/** */
class Storage {
  constructor(id) {
    this.id = id;

    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
  }

  /** */
  get = async () => {
    return await JSON.parse(sessionStorage.getItem(this.id));
  }

  /** */
  set = (data) => {
    sessionStorage.setItem(this.id, JSON.stringify(data));
  }
}

/** */
export default class AppStorage {
  constructor(id) {
    this.viewer = new Storage(id);
    this.workspace = new Storage('data-' + id);

    this.getViewer = this.getViewer.bind(this);
    this.setViewer = this.setViewer.bind(this);
    this.getWorkspace = this.getWorkspace.bind(this);
    this.setWorkspace = this.setWorkspace.bind(this);
  }

  /** */
  getViewer = async () => {
    return await this.viewer.get();
  }

  /** */
  setViewer = (data) => {
    this.viewer.set(data);
  }

  /** */
  getWorkspace = async () => {
    return await this.workspace.get();
  }

  /** */
  setWorkspace = (data) => {
    this.workspace.set(data);
  }
}
