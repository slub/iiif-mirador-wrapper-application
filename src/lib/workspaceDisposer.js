/** 
 * helper class for storing the protected workspace data
 * it stores the last loaded/synched data with the enpoint
 * 
 * all the jsonblob-magic should happen here, the endpoint-comparing should happen here too 
 * 
*/

import ToVersion from "./toVersion";

/** */
class Workspace {
  constructor(defaultWorkspaceName) {
    this.version = null;
    this.workspaceName = defaultWorkspaceName;
    this.catalog = null;
    this.date = null;

    this.init = this.init.bind(this);
    this.update = this.update.bind(this);
    this.import = this.import.bind(this);
  }

  /** */
  init = ({ catalog }) => {
    this.version = '1.0.0';
    catalog ? this.catalog = catalog : this.catalog = [];
    this.date = new Date().toUTCString();
  }

  /** */
  update = ({ catalog, workspaceName }) => {
    this.version = ToVersion.raiseVersion(this.version);
    workspaceName && (this.workspaceName = workspaceName);
    catalog && (this.catalog = catalog);
    this.date = new Date().toUTCString();
  }

  /** */
  import = ({ version, workspaceName, catalog, date }) => {
    this.version = version;
    this.workspaceName = workspaceName;
    this.catalog = catalog;
    this.date = date;
  }
}

/** */
export default class WorkspaceDisposer {
  constructor(defaultWorkspaceName) {
    this.workspaceId = null;
    this.localWorkspace = new Workspace(defaultWorkspaceName);
    this.endpointWorkspace = new Workspace(defaultWorkspaceName);
    this.triggered = false;

    this.workingStation = {
      workspaceName: null,
      catalog: null
    };

    this.set = this.set.bind(this);
    this.initLocal = this.initLocal.bind(this);
    this.importLocal = this.importLocal.bind(this);
    this.importEndoint = this.importEndoint.bind(this);
    this.isLocalCatalogChange = this.isLocalCatalogChange.bind(this);
    this.resetTrigger = this.resetTrigger.bind(this);
  }

  /** */
  set = ({ workspaceId: workspaceId, workspaceName: workspaceName, catalog: catalog }) => {
    workspaceId && (this.workspaceId = workspaceId);
    workspaceName && (this.workingStation.workspaceName = workspaceName);
    catalog && (this.workingStation.catalog = catalog);
  }

  /** */
  initLocal = (data) => {
    this.localWorkspace.init({ catalog: data });
  }

  /** */
  importLocal = (data) => {
    this.localWorkspace.import(data);
  }

  /** */
  updateLocal = (data) => {
    this.localWorkspace.update(data);
  }

  /** */
  importEndoint = (data) => {
    this.endpointWorkspace.import(data);
  }

  /** */
  updateWorkingStation = ({ workspaceName, catalog }) => {
    workspaceName && (this.workingStation.workspaceName = workspaceName);
    catalog & (this.workingStation.catalog = catalog);
  }

  /** */
  resetTrigger = () => {
    this.triggered = false;
  }

  /** */
  isLocalCatalogChange = () => {
    if (this.triggered) { return false; };
    if (this.workingStation.catalog.length == this.localWorkspace.catalog.length) {
      return false;
    } else {
      this.triggered = true;
      return true;
    }
  }
}
