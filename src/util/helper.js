function isInvalid(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === '') {
        return true;
      }
    }
  }
    return false;
}


module.exports = isInvalid;