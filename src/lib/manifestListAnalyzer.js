/** */
class ManifestList {

  /** */
  static toList = (list) => {
    var manifestList = [];
    list.forEach(e => { manifestList.push(e.manifestId) });

    return manifestList;
  }
}

/** */
export default class ManifestListAnalyzer {

  constructor(listCurrent, listPrevious) {
    // first list is our current list data
    // second list is previous list data we compare to
    this.manifestListCurrent = ManifestList.toList(listCurrent);
    this.manifestListPrevious = ManifestList.toList(listPrevious);
    this.manifestsDifference = [];

    this.getDiff = this.getDiff.bind(this);
    this.getDiffMode = this.getDiffMode.bind(this);
  }

  /** */
  getDiff = (mode) => {
    if (mode == 'add') {
      this.manifestsDifference = this.manifestListCurrent.filter(x => !this.manifestListPrevious.includes(x));
    } else if (mode == 'del') {
      this.manifestsDifference = this.manifestListPrevious.filter(x => !this.manifestListCurrent.includes(x));
    }
    return this.manifestsDifference;
  }

  /** */
  getDiffMode = () => {
    if (this.manifestListCurrent > this.manifestListPrevious) {
      return 'add';
    } else if (this.manifestListCurrent < this.manifestListPrevious) {
      return 'del';
    } else {
      return null;
    }
  }
}
