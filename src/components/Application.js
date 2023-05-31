import React from "react";
import Mirador from 'mirador';
import Navbar from "./Navbar";
import renderViewer from "../lib/renderViewer";
import JsonBlobAdapter from "../adapters/jsonBlobAdapter";
import ConfigReducer from "../lib/configReducer";
import AppStorage from "../lib/appStorage.js";
import { ThemeProvider, CssBaseline } from "@mui/material";
import ManifestListAnalyzer from "../lib/manifestListAnalyzer";
import UrlLogic from "../lib/urlLogic";
import WorkspaceDisposer from "../lib/workspaceDisposer.js";
import { SnackbarProvider } from 'notistack';
import SnackbarNotifications from "./SnackbarNotifications.js";
import DialogTool from "./DialogTool";
import { appTheme } from "../styles/themes/theme";
import settings from "../config/settings";
import { I18nextProvider } from 'react-i18next';
import createI18nInstance from '../locales/i18n';


/* Main component to set up mirador and menu */
const Wrapper = (conf) => {
  const [uuid, setUuid] = React.useState(null);
  const [jsonBlobId, setJsonBlobId] = React.useState(null);
  const [workspaceId, setWorkspaceId] = React.useState(null);
  const [isSynching, setIsSynching] = React.useState(false);
  const [updated, setUpdated] = React.useState(false);
  const [workspaceName, setWorkspaceName] = React.useState(null);
  const [dialog, setDialog] = React.useState(false);
  const [dialogPos, setDialogPos] = React.useState(0);
  const [dialogNoClose, setDialogNoClose] = React.useState(false);
  const [miradorInstance, setMiradorInstance] = React.useState(null);
  const [setupToast, setSetupToast] = React.useState(null);
  const snackRef = React.useRef();
  const [miradorConfig, setMiradorConfig] = React.useState(null);
  const [urlConfig, setUrlConfig] = React.useState(null);
  const [appStorage, setAppStorage] = React.useState(null);
  const [workspaceData, setWorkspaceData] = React.useState(null);
  const [config, setConfig] = React.useState(settings);
  const [miradorId, setMiradorId] = React.useState(null);
  const [wrapperId, setWrapperId] = React.useState(null);
  const [rawConfig, setRawConfig] = React.useState(null);
  const [configMode, setConfigMode] = React.useState(null);
  const [workspaceDisposer, setWorkspaceDisposer] = React.useState(null);

  const urlLogic = new UrlLogic();
  const jsonBlobEndpoint = new JsonBlobAdapter();

  /** merge passed configuration with basic configuration and setup ids */
  React.useEffect(() => {
    (async() => {
      setConfig({ ...settings, ...conf });
      setMiradorId(conf.id + 'Mirador');
      setWrapperId(conf.id + 'Wrapper');
    })();
  }, []);

  /** validate url for json blob parameters and setup hash */
  React.useEffect(() => {
    if(config && miradorId && wrapperId) {
      (async() => {
        var helper = await urlLogic.init();
        setUrlConfig(helper);
        if(config.jsonStorageEndpoint) {
          jsonBlobEndpoint.updateEndpoint(config.jsonStorageEndpoint);
        };
      })();
    }
  }, [config, miradorId, wrapperId]);
  
  /** setup mirador id and session storage */
  React.useEffect(() => {
    if(urlConfig) {
      setAppStorage(new AppStorage(urlConfig.hash));
      setUuid(urlConfig.hash);
    }
  }, [urlConfig]);

  /** check if there is initial load, reload or json blob and fetch configuration */
  React.useEffect(() => {
    if(appStorage) {
      (async () => {
        if(urlConfig.jsonBlob || urlConfig.jsonBlobShare) {
          /** setup mirador config by json blob */
          var tempConf = await jsonBlobEndpoint.get(urlConfig.jsonBlob ? urlConfig.jsonBlob : urlConfig.jsonBlobShare);
          if(urlConfig.jsonBlobShare && tempConf) {
            setWorkspaceId(urlConfig.jsonBlobShare);
          }
          setRawConfig(tempConf ? tempConf : config);
          setConfigMode(tempConf? 'extern' : 'init');
          setSetupToast(tempConf ? 'link-success' : 'link-error');
        } else if (urlConfig.hash) {
          /** setup mirador config by session storage */
          var tempConf = await appStorage.getWorkspace();
          if(tempConf) {
            if(tempConf.workspaceId) {
              var conf = await jsonBlobEndpoint.get(tempConf.workspaceId);
              if(conf) {
                  setWorkspaceId(tempConf.workspaceId);
              }
              setRawConfig(conf ? conf : config);
              setConfigMode(conf ? 'extern' : 'init');
              setSetupToast(conf ? 'reload-success' : 'data-error');
            }
            else {
              var conf = await appStorage.getViewer();
              setRawConfig(conf ? conf : config);
              setConfigMode(conf ? 'local' : 'init');
              setSetupToast(conf ? 'reload-success' : 'data-error');
            }
          } else {
            /** setup mirador config by passed configuration */
            setRawConfig(config);
            setConfigMode('init');
          }
        } else {
            setRawConfig(config);
            setConfigMode('init');
        }
      })();
    }
  }, [appStorage]);

  /** preprocess configuration */
  React.useEffect(() => {
    if(rawConfig && configMode) {
      if(configMode == 'extern') {
        if(urlConfig.jsonBlob) {
          (async() => {
            var conf = await new ConfigReducer(config, rawConfig).getConfig();
            setMiradorConfig(conf);
          })();
        } else {
          var conf = config;
          conf.catalog = rawConfig.catalog;
          conf.workspace = { isWorkspaceAddVisible: true };
          setMiradorConfig(conf);
        }
      } else if(configMode == 'local') {
        (async() => {
          var conf = await new ConfigReducer(config, rawConfig).getConfig();
          setMiradorConfig(conf);
        })();
      } else if(configMode =='init') {
        setMiradorConfig(rawConfig);
      } else {
        setMiradorConfig(rawConfig);
      }
    }
  }, [rawConfig, configMode]);

  /** setup workspace data */
  React.useEffect(() => {
    if(miradorConfig) {
      var controller = new WorkspaceDisposer(config.defaultWorkspaceName);
      controller.set({ catalog: {} });
      (async() => {
        if(workspaceId) {
          controller.importLocal(rawConfig);
          controller.updateWorkingStation({ workspaceName: rawConfig.workspaceName, catalog: rawConfig.catalog });
          setWorkspaceName(rawConfig.workspaceName);
        } else {
          if(config.authenticated) {
            controller.initLocal();
            const tempId = await jsonBlobEndpoint.post(controller.localWorkspace);
            setWorkspaceId(tempId);
            setWorkspaceName(controller.localWorkspace.workspaceName);
            controller.updateWorkingStation(controller.localWorkspace.workspaceName);
          }
        }
        setWorkspaceDisposer(controller);
      })();
    }
  }, [miradorConfig]);

  /** */
  React.useEffect(() => {
    if(workspaceDisposer) {
      var data =  {
        authenticated: config.authenticated,
        version: workspaceDisposer.localWorkspace.version,
        workspaceId: workspaceId ? workspaceId : null
      }
      setWorkspaceData(data);
    }
  }, [workspaceDisposer]);

  /** */
  React.useEffect(() => {
    if(workspaceData) {
      appStorage.setWorkspace(workspaceData);
      if(!miradorInstance) {
        (async() => {
          setMiradorInstance(await renderViewer(miradorConfig, miradorId, config.annotationEndpoint, config.authenticated, workspaceId));
        })();
      }
    }
  }, [workspaceData]);

  /** */
  React.useEffect(() => {
    if(miradorInstance) {
      appStorage.setViewer(cleanUpMiradorInstanceState(miradorInstance.store.getState()));
      
      var action = Mirador.actions.toggleZoomControls(true);
      miradorInstance.store.dispatch(action);
      
      miradorInstance.store.subscribe(() => {
        appStorage.setViewer(cleanUpMiradorInstanceState(miradorInstance.store.getState()));
        if(!isSynching) {
          if (config.authenticated) {
            workspaceDisposer.updateWorkingStation({ catalog: miradorInstance.store.getState().catalog });
            synchLocal();
          }
        }
      });
      
      switch(setupToast) {
        case 'link-success':
          snackRef.current.createSuccess('tst_col_suc');
          break;
        case 'link-error':
          snackRef.current.createError('tst_link_err');
          break;
        case 'reload-success':
          break;
        case 'data-error':
          snackRef.current.createError('tst_data_err');
          break; 
      }
      
      if(workspaceId && !config.authenticated) {
        setDialog(true);
        setDialogPos(0);
        //setDialogNoClose(true);
      }
      if((configMode == 'init' || configMode == 'local' || urlConfig.jsonBlob ) && config.authenticated) {
        setDialog(true);
        snackRef.current.createInfo('tst_col_new');
      }
    }
  }, [miradorInstance]);

  /** */
  React.useEffect(() => {
    if(updated) {
      snackRef.current.createInfo('tst_snc_updt');
      setUpdated(false);
    }
  }, [updated]);

  /** */
  const synch = async () => {
    if(!isSynching) {
      setIsSynching(true);
      const endpointData = await jsonBlobEndpoint.get(workspaceId);
      if(endpointData.version !== workspaceDisposer.localWorkspace.version) {
        const controller = new ManifestListAnalyzer(endpointData.catalog, workspaceDisposer.localWorkspace.catalog);
        const listAdded = controller.getDiff('add');
        const listDeleted = controller.getDiff('del');

        if(listDeleted.length > 0) {
          listDeleted.forEach(e => {
            var action = Mirador.actions.removeResource(e);
            miradorInstance.store.dispatch(action);
          });
        }

        if(listAdded.length > 0) {
          listAdded.forEach(e => {
              var action = Mirador.actions.addResource(e);
              miradorInstance.store.dispatch(action);
          });
        }

        if((workspaceName == workspaceDisposer.localWorkspace.workspaceName) && (workspaceDisposer.localWorkspace.workspaceName !== endpointData.workspaceName)) {
          // prevent updating local workspace name if we changed it in meantime
          setWorkspaceName(endpointData.workspaceName);
        }
        workspaceDisposer.updateLocal(endpointData);  
      }
    }
  }

  /** */
  const synchLocal = async() => {
    if(!isSynching) {
      if(workspaceDisposer.isLocalCatalogChange()) {
        // workspace controller uses trigger to prevent multiple calls 
        // necessary as mirador store subscription fires multiple events
        
        await synch();

        workspaceDisposer.updateWorkingStation({ catalog: miradorInstance.store.getState().catalog });
        workspaceDisposer.updateLocal({ catalog: workspaceDisposer.workingStation.catalog });
        await jsonBlobEndpoint.update(workspaceId, workspaceDisposer.localWorkspace);

        setIsSynching(false);
        
        // reset trigger after endpoint data is syched with local data 
        workspaceDisposer.resetTrigger();
      }
    }
  }

  /** */
  const synchName = async(value) => {
    if(!isSynching) {
      await synch();

      setWorkspaceName(value);
      workspaceDisposer.updateWorkingStation({ workspaceName: value });
      workspaceDisposer.updateLocal({ workspaceName: value });
      await jsonBlobEndpoint.update(workspaceId, workspaceDisposer.localWorkspace);
      snackRef.current.createSuccess('tst_nme_fnct_suc');

      setIsSynching(false);
    }
  }

  /** 
   *  clean up mirador state before parsing to JSON
   *  important fix to prevent cyclic conversion error on collection
   */
  const cleanUpMiradorInstanceState = (tempState) => {
      
    if(tempState.manifests) {
      for( var key in tempState.manifests) {
        const manifestData = tempState.manifests[key];
        const { json: { __collection } = {}} = manifestData;
        if(__collection) {
          delete tempState.manifests[key].json.__collection;
        }
      }  
    }
    return tempState;
  }

  /** */
  const handleCallback = async (callback) => {
    const blob = cleanUpMiradorInstanceState(miradorInstance.store.getState());
    const key = await jsonBlobEndpoint.post(blob);
    setJsonBlobId(key);
  }

  /** */
  const handleCallbackChangeWorkspaceName = async (value) => {
    await synchName(value);
  }

  /** */
  const handleCallbackSynch = async () => {
    await synch();
    setIsSynching(false);
    setUpdated(true);
  }

  /** */
  const handleLogin = () => {
    var hrefWithHash = config.mainMenuSettings.userButtons.login.attributes.href + uuid;
    window.open(hrefWithHash, config.mainMenuSettings.userButtons.login.attributes.target);
  }

  /** */
  const dialogOpen = ({ pos=0 }) => {
    setDialog(true);
    setDialogPos(pos);
  }

  /** */
  const dialogClose = () => {
    setDialog(false);
  }

  /** */
  const dialogUpdate = (newPos) => {
    setDialogPos(newPos);
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={appTheme}>
        <CssBaseline enableColorScheme />
        <Navbar
          authenticated={config.authenticated}
          shareWorkspace={workspaceId}
          menuId={wrapperId}
          uuid={uuid}
          workspaceName={workspaceName}
          blobLink={UrlLogic.blobUrl(jsonBlobId)}
          shareLink={UrlLogic.workspaceUrl(workspaceId)}
          synching={isSynching}
          handleCallback={handleCallback}
          handleSync={handleCallbackSynch}
          handleNameChange={handleCallbackChangeWorkspaceName}
          openTeaser={dialogOpen}
          mainMenuSettings={config.mainMenuSettings}
          {...config}
        />
        <DialogTool
          handleClose={dialogClose} 
          handleLogin={handleLogin} 
          //isOpen={true}
          isOpen={dialog} 
          authenticated={config.authenticated}
          noClose={dialogNoClose} 
          isPos={dialogPos} 
          setPos={dialogUpdate} />
      </ThemeProvider>
      
      <div id={miradorId} />
      <SnackbarNotifications ref={snackRef} />
    </React.Fragment>
  );
}

/** */
const Application = (props) => {
  const i18n = createI18nInstance();
  i18n.changeLanguage('de');


  return (
    <I18nextProvider i18n={i18n}>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <Wrapper {...props} />
      </SnackbarProvider>
    </I18nextProvider>
  );
}

export default Application;
