/** 
 * used with workspaces
 * 
*/

/** */
export default class ToVersion {
  /** */
  static versionToNumber = (number) => {
    var parts = number.split('.').map(e => parseInt(e));
    return {
      t: parts[0],
      h: parts[1],
      c: parts[2]
    }
  }

  /** */
  static numberToVersion = (number) => {
    return number.t + '.' + number.h + '.' + number.c;
  }

  /** */
  static raiseVersion = (number) => {
    var convertedNumber = this.versionToNumber(number);
    if (convertedNumber.c < 9999) {
      convertedNumber.c += 1;
    } else {
      convertedNumber.c = 0;
      if (convertedNumber.h < 9999) {
        convertedNumber.h += 1;
      }
      else {
        convertedNumber.h = 0;
        convertedNumber.t += 1;
      }
    }
    return this.numberToVersion(convertedNumber);
  }

  /** */
  static compareVersion = (numberA, numberB) => {
    var a = this.versionToNumber(numberA);
    var b = this.versionToNumber(numberB);

    if (a.t == b.t && a.t == b.t && a.c == b.c) {
      return true;
    }
    return false;
  }
}
