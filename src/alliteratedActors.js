'use strict';

/**
 * Implement alliteratedActors function:
 *
 * You are given an array of full names of several people (let's say, a group of
 * actors). Return the very first of the names that satisfies the property: all
 * parts of the name start with the same letter. If none of the names is
 * alliterated, return undefined.
 *
 * For example, if the array ['Tom Hanks', 'Julia Roberts', 'James Earl Jones',
 * 'Sylvester Stallone', 'Leonardo DiCaprio', 'Amy Adams'] is given, you must
 * return 'Sylvester Stallone'. Note that even though Amy Adams' name is
 * alliterated as well, you do not need to include it in what you return, as
 * Sylvester Stallone's name comes before it.
 *
 * You are encouraged to use the `find` and `every` array methods to solve this
 * problem. Please do not use `for` or any other kind of loop.
 *
 * @param {string[]} names
 *
 * @return {string}
 */
function alliteratedActors(names) {
  // write code here
  const callback = (name) => {
    let name1 =  name.split(' ')[0];
    let name2 = name.split(' ')[1];
    if(name1[0] === name2[0]) {
      return name;
      }
    return undefined;
  }
  const resultName = names.find(callback);
}

module.exports = alliteratedActors;
