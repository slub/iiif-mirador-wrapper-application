/** 
 * reduce state settings to return valid mirador config
 * 
 * cleans up settings
 * allows to transform each kind of config to be adapted for mirador 3 usage
 * allows to use standartized configurations without respect of outdated configuration (e.g. themes)
 * necessary as workspace export/import on mirador 3 might mess up on plugin usage (e.g. annotation plugin)
 */

export default class ConfigReducer {
  constructor(appConfig, state) {
    // pass base config settings as default settings
    this.appConfig = appConfig;
    this.miradorState = state;

    this.getConfig = this.getConfig.bind(this);
    this.getSelectedThemeFromState = this.getSelectedThemeFromState.bind(this);
    this.getThemeFromState = this.getThemeFromState.bind(this);
    this.getThemesFromState = this.getThemesFromState.bind(this);
    this.getSelectedLanguageFromState = this.getSelectedLanguageFromState.bind(this);
    this.getLanguageFromState = this.getLanguageFromState.bind(this);
    this.getTranslationsFromState = this.getTranslationsFromState.bind(this);
    this.getCatalogFromState = this.getCatalogFromState.bind(this);
    this.getWindowFromState = this.getWindowFromState.bind(this);
    this.getWindowsFromState = this.getWindowsFromState.bind(this);
    this.getWorkspaceFromState = this.getWorkspaceFromState.bind(this);
    this.getWindowsFromWindowObjects = this.getWindowsFromWindowObjects.bind(this);
  }

  /** */
  getConfig = async () => {
    const configSelectedTheme = await this.getSelectedThemeFromState(this.appConfig);
    const configTheme = await this.getThemeFromState(this.appConfig);
    const configThemes = await this.getThemesFromState(this.appConfig);
    const configLanguage = await this.getSelectedLanguageFromState(this.appConfig);
    const configAvailableLanguages = await this.getLanguageFromState(this.appConfig);
    const configTranslations = await this.getTranslationsFromState(this.appConfig);
    const configCatalog = await this.getCatalogFromState(this.miradorState);
    const configWindow = await this.getWindowFromState(this.appConfig);
    const configWindows = await this.getWindowsFromState(this.miradorState);
    const configWorkspace = await this.getWorkspaceFromState(this.miradorState);

    const config = {
      ...(configSelectedTheme && { selectedTheme: configSelectedTheme }),
      ...(configTheme && { theme: configTheme }),
      ...(configThemes && { themes: configThemes }),
      ...(configLanguage && { language: configLanguage }),
      ...(configAvailableLanguages && { availableLanguages: configAvailableLanguages }),
      ...(configTranslations && { translations: configTranslations }),
      ...(configCatalog && { catalog: configCatalog }),
      ...(configWindow && { window: configWindow }),
      ...(configWindows && { windows: configWindows }),
      ...(configWorkspace && { workspace: configWorkspace }),
    };

    return config;
  }

  /** */
  getWindowsFromWindowObjects = async (config) => {
    var windows = Object.entries(config.windowObjects).map((window) => {
      let conf = {};
      conf.manifestId = window[1].loadedManifest;
      return conf;
    });
    return windows;
  }

  /* mirador 3 config settings */
  getSelectedThemeFromState = (config) => {
    return config.selectedTheme;
  }

  /** */
  getThemeFromState = (config) => {
    return config.theme;
  }

  /** */
  getThemesFromState = (config) => {
    return config.themes;
  }

  /** */
  getSelectedLanguageFromState = (config) => {
    return config.language;
  }

  /** */
  getLanguageFromState = (config) => {
    return config.availableLanguages;
  }

  /** */
  getTranslationsFromState = (config) => {
    return config.translations;
  }

  /** */
  getWindowFromState = (config) => {
    return config.window;
  }

  /** */
  getCatalogFromState = (config) => {
    return config.catalog;
  }

  /** */
  getWindowsFromState = async (config) => {
    // iterate through window objects
    var windows = Object.entries(config.windows).map((window) => {
      // ignore first object containing the window id
      // access second object containing the window configuration
      let winConf = window[Object.keys(window)[1]];

      // cleanup configuration settings for setting up a new viewer
      // Important! cleanup ids as they are set up dynamically 
      let conf = {};
      conf.manifestId = winConf.manifestId;
      conf.maximized = winConf.maximized;
      conf.rangeId = winConf.rangeId;
      conf.rotation = winConf.rotation;
      conf.sideBarOpen = winConf.sideBarOpen;
      conf.sideBarPanel = winConf.sideBarPanel;

      // pass image-tools plugin configurations if available
      if (winConf.imageToolsEnabled == true) {
        conf.imageToolsEnabled = true;
        if (winConf.imageToolsOpen == true) {
          conf.imageToolsOpen = true;
        }
      };
      return conf;
    });
    return windows;
  }

  /** */
  getWorkspaceFromState = async (config) => {
    let workspace = {}
    workspace.type = config.workspace.type;
    workspace.isWorkspaceAddVisible = config.workspace.isWorkspaceAddVisible;
    return workspace;
  }
}
