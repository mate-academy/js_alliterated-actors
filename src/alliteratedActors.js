'use strict';

function alliteratedActors(names) {
  return names.find(name => name.split(' ')
    .every(el => el[0] === name[0][0]));
}
module.exports = alliteratedActors;
