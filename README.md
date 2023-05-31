# iiif-mirador-wrapper-application

[![npm package][npm-badge]][npm]

`iiif-mirador-wrapper-application` is an wrapper application for [Mirador 3](https://github.com/projectmirador/mirador) which adds additional functionality. The features are accessible within an additional top navigation bar. 

## Installing `iiif-mirador-wrapper-application`
To install `iiif-mirador-wrapper-application` clone the project locally and run 
```sh
$ npm install
```
to install all dependencies. For development run
```sh
$ npm start
```
See the [demo index.html](https://github.com/slub/iiif-mirador-wrapper-application/blob/main/demo/src/index.html) for an example to set up the wrapper application.
`iiif-mirador-wrapper-application` includes an instance of Mirador 3. Take a look at [Mirador 3 settings.js](https://github.com/ProjectMirador/mirador/blob/master/src/config/settings.js) to customize mirador. The iiif-mirador-wrapper-application comes with a limited set of adjustible configurations. See the [iiif-mirador-wrapper-application settings.js](https://github.com/slub/iiif-mirador-wrapper-application/blob/main/src/config/settings.js) for possible modifications.
## Application dependencies of `iiif-mirador-wrapper-application`
### Integration of a jsonBlob server
Some features of the wrapper application require a [jsonBlob](https://github.com/tburch/jsonblob) instance to store and retreive data. By default, the wrapper application uses a [demo jsonBlob server](https://jsonblob.com/) which is cleared regularly.
## Additional features of `iiif-mirador-wrapper-application`
### Customizable navigation bar
Icons or extern routings to an organization can be located within the navigation bar. 
### Authentication
The wrapper application supports different authentication states. For demo simply adapt the [demo index.html](https://github.com/slub/iiif-mirador-wrapper-application/blob/main/demo/src/index.html) by adding ```authenticated: true```.
### Dialog management tool
The dialog management tool serves space to present textual information, e.g. step-by-step instructions on how to use the application.
### Share Collection
[Mirador 2](https://github.com/projectmirador/mirador2) comes with a share collection feature which allowed users to create a snapshot of their current mirador and share it with others. The `iiif-mirador-wrapper-application` provides the feature so it can be used with mirador 3 again.
### Workspaces
The `iiif-mirador-wrapper-application` comes with a feature to store information about the current workspace and update changes in-time. This happens by synchronizing the client data and the stored data at the jsonBlob server after every change on client side. This allows multiple users to work on the same workspace. To test the workspaces add ```authenticated: true``` to [demo index.html](https://github.com/slub/iiif-mirador-wrapper-application/blob/main/demo/src/index.html).
## Credits
### NFDI4Culture
The Consortium for Research Data on Material and Immaterial Cultural Heritage (NFDI4Culture)

The aim of NFDI4Culture is to establish a demand-oriented infrastructure for research data on material and immaterial cultural assets. This includes 2D digitised reproductions of paintings, photographs and drawings as well as 3D digital models of culturally and historically important buildings, monuments or audiovisual data of music, film and stage performances. Concept and structure of the consortium were developed over two years in an open process and in close cooperation between 11 professional societies, 9 supporting institutions and 52 partners. The consortium addresses the needs of a broad spectrum of disciplines from architecture, art, music, theatre, dance, film and media studies.

[nfdi4culture.de](https://www.nfdi4culture.de)

[![Twitter](https://img.shields.io/twitter/follow/nfdi4culture?style=social)](https://twitter.com/nfdi4culture)



[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

