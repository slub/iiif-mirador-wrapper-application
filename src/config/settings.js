export default {
  mainMenuSettings: {
    userLogo: {
      enabled: true,
      label: "Logo",
      attributes: {
        id: "",
        href: "",
        target: "",
        title: ""
      }
    },
    userButtons: {
      login: {
        enabled: false,
        label: "Login",
        icon: "login",
        attributes: {
          id: "",
          href: "",
          target: "_self",
          title: "Login"
        }
      }
    },
  },
  defaultWorkspaceName: "[Workspace Name]",
  selectedTheme: "dark",
  language: "de",
  jsonStorageEndpoint: {
    name: "JSONBlob API Endpoint",
    module: "JSONBlobAPI",
    options: {
      ssl: true,
      pprt: 443,
      host: "jsonblob.com"
    }
  },
  authenticated: false
}
