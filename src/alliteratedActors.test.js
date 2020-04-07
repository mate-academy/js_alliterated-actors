'use strict';
/* eslint-disable */

const alliteratedActors = require('./alliteratedActors');

test('Should work with empty array', () => {
  expect(alliteratedActors([]))
    .toEqual(undefined);
});

test('Should return only first occurence', () => {
  expect(alliteratedActors(
    ['Tom Hanks', 'Julia Roberts', 'James Earl Jones',
      'Sylvester Stallone', 'Leonardo DiCaprio', 'Amy Adams']))
    .toEqual('Sylvester Stallone');
});

test('Should return undefined when none of the names is alliterated ', () => {
  expect(alliteratedActors(
    ['Fpzwpgpq Vswaed Eagbsm', 'Qv Owj', 'Wzucu Qmwrw', 'Djnrai Uvrwyh',
      'Naclcthdv Bpooabnvt Gwpfsy']))
    .toEqual(undefined);
});

test('Should work with three-word name', () => {
  expect(alliteratedActors(['Wn Tjuyol', 'Ohp Op Ot', 'Vnnchyxwx Vxot']))
    .toEqual('Ohp Op Ot');
});

test('Should work only with first letter uppercase', () => {
  expect(alliteratedActors(['Wn Tjuyol', 'Ufqmup udqhUwrv',
    'Qghj Ujc Qht', 'Amy Adams']))
    .toEqual('Amy Adams');
});

test('Should work with four-word name', () => {
  expect(alliteratedActors(
    ['Rgrliwb Rb Ratting Qua', 'Pnpz Piyqg Plij Pat',
      'Vlqxppzv Vkkwe Vrep', 'Vlgkkf Zueizdyu']))
    .toEqual('Pnpz Piyqg Plij Pat');
});
