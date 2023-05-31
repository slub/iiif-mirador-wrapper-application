/* json blob adapter class */

export default class JsonBlobAdapter {
  constructor() {
    this.host = 'jsonblob.com';
    this.port = '443';
    this.ssl = true;

    this.updateEndpoint = this.updateEndpoint.bind(this);
    this.getEndpointUrl = this.getEndpointUrl.bind(this);
    this.post = this.post.bind(this);
    this.update = this.update.bind(this);
    this.get = this.get.bind(this);
    this.delete = this.delete.bind(this);
  }

  updateEndpoint = (config) => {
    this.host = config.options.host;
    this.port = config.options.port;
    this.ssl = config.options.ssl;
  }

  /** */
  getEndpointUrl = (id) => {
    var path = '/api/jsonBlob';
    var proto = 'http';
    var port = this.port ? this.port : '80';
    var host;

    if (this.ssl) {
      proto = 'https';
      port = this.port ? this.port : '443';
    }
    host = this.host ? this.host : 'jsonblob.com';

    if (id) {
      path += '/' + id;
    }
    return proto + '://' + host + ':' + port + path;
  }

  /** */
  post = async (data) => {
    return await fetch(this.getEndpointUrl(), {
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      dataType: 'json',
      method: 'POST',
    })
    .then(response => {
      const param = response.headers.get('Location').split('/');
      return param.pop();
    })
    .catch(error => {
      return null;
    });
  }

  /** */
  update = async (id, data) => {
    return await fetch(this.getEndpointUrl(id), {
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      dataType: 'json',
      method: 'PUT',
    })
    .then(response => {
      return true;
    })
    .catch(error => {
      return null;
    });
  }

  /** */
  get = async (id) => {
    return await fetch(this.getEndpointUrl(id), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      dataType: 'json',
      method: 'GET',
      processData: false
    })
    .then(response => response.json())
    .then(data => {
      var content;
      try {
        content = JSON.parse(data);
      }
      catch (e) {
        content = data;
      }
      return content;
    })
    .catch(error => {
      return null;
    });
  }

  /** */
  delete = async (id) => {
    return await fetch(this.getEndpointUrl(id), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      },
      dataType: 'json',
      method: 'DELETE',
      processData: false
    })
    .then(response => {
      return true;
    })
    .catch(error => {
      return null;
    });
  }
}
