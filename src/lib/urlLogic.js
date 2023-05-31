/** 
 * helper class to initial set up window url and pass data
 * 
*/

import { v4 as uuidv4 } from 'uuid';

/** */
export default class UrlLogic {
  constructor() {
    this.jsonBlob = null;
    this.jsonBlobShare = null;
    this.hash = null;
    this.reload = false;

    this.init = this.init.bind(this);
  }

  /** */
  init = async () => {
    var jsonBlob = null;
    var jsonBlobShare = null;
    var hash = null;
    var reload = false;
    if (window.location.search) {
      let url = window.location.href;
      let params = (new URL(window.location)).searchParams;

      if (params.has('json')) {
        jsonBlob = params.get('json');
      } else if (params.has('share')) {
        jsonBlobShare = params.get('share');
      }

      // cleanup url
      window.history.pushState({}, "", url.split('?')[0]);
    }

    if (window.location.hash == '') {
      hash = uuidv4();
      window.location = window.location + '#' + hash;
    } else {
      hash = window.location.hash.substring(1);
      reload = true;
    }
    return { jsonBlob, jsonBlobShare, hash, reload };
  }

  /** */
  static blobUrl = (id) => {
    return window.location.href.split('#')[0] + '?json=' + id;
  }

  /** */
  static workspaceUrl = (id) => {
    return window.location.href.split('#')[0] + '?share=' + id;
  }
}
