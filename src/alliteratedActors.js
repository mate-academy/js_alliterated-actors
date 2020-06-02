'use strict';

function alliteratedActors(names) {
  function findName(name) {
    return name.split(' ').every(isSameStart);
  }

  function isSameStart(item, i, arr) {
    return item[0] === arr[0][0];
  }

  return names.find(findName);
}

module.exports = alliteratedActors;
