'use strict';

const alliteratedActors = require('./alliteratedActors');

test('Should work with empty array', () => {
  expect(alliteratedActors([]))
    .toEqual(undefined);
});

test('Should return only first concurrence', () => {
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
  expect(alliteratedActors(['Wn Tjuyol', 'Eyd Gjvxav', 'Hjuybt Hc Fiwyr',
    'Vpikwvhgj Kt', 'Epuq Jji', 'Ohp Op Ot', 'Ufqmup Gdqhwwrv',
    'Ydbwtqwfl Rmjfebpn', 'Qghj Ujc', 'Vnnchyxwx Vxot']))
    .toEqual('Ohp Op Ot');
});

test('Should work only with first letter uppercase', () => {
  expect(alliteratedActors(['Wn Tjuyol', 'Eyd Gjvxav', 'Wjuybt Hc Fiwyr',
      'Vpikwvhgj Kt', 'Epuq Jji', 'Ohp Vt', 'Ufqmup udqhUwrv',
      'Ydbwtqwfl Rmjfebpn', 'Qghj Ujc', 'Amy Adams'
    ]))
    .toEqual('Amy Adams');
});

test('Should work with four-word name', () => {
  expect(alliteratedActors(
    ['Rgrliwb Rb Ratting Qua', 'Plzgmcsw Hhda',
      'Khtmyyak Erarbodsw Ivsle', 'Pnpz Piyqg Plij Pat', 'Dwvlzkxl Jqf',
      'Wdphy Kk', 'Cyi Hrlm', 'Gabx Bo Ztntw', 'Tvldpakvx Epnu Fa',
      'Vxowxp Pwogdizhn Jx', 'Emmahilq Osart Npa', 'Ua Sjs',
      'Xiffjpbha Uhcvciw Dl', 'Kus Inrf', 'Vdoook Bdcdlbk Rb', 'Hejx Ftkgvj',
      'Xzbhrf Kjastve Aeduoqzjt', 'Izpgeyrxj Bawwpeq', 'Twzuqquol Ukzafxh',
      'Pre Qcbes Gkopzawq', 'Frqqc Xlugpl Ycsbdpa', 'Cyvadhxz Itdlnr',
      'Ly Vzcio', 'Bzthpjuuk Mi Ztlznn', 'Ze Ipnmrhh',
      'Dezbve Kzodbeb Qcriuaynr', 'Kugqgsk Ojmz Mkwm', 'Jkp Qpege', 'Hb Dk',
      'Usgbj Fpi', 'Et Wupck', 'Ads Tizorl Rqag', 'Olk Japqksoyk Blhg',
      'Mjpjbpb Sxfjqur', 'Hmuvehg Tceyxw Lbtyt', 'Rik Ahhttssg', 'Ukjx Xs',
      'Uwqlg Ozekb', 'Mqbahlny Pycpi', 'Rkcjlvfni Ko',
      'Fjvysprq Tonbymql Dwywn', 'Rsfroffnq Nqheu', 'Wuta Tqebepgt',
      'Sfgedv Ypnmukpqn', 'Syd Uei', 'Yzywnix Id Hfeidksh', 'No Fyss',
      'Ysbccvnow Iyqnmup Fcp', 'Nikgj Qlv Szv', 'Yc Jvy Fsd',
      'Eo Sfq Lbhqvdhsy', 'Pipenea Izfxgleo Crdf', 'Oaqitg Cos Snqvltkb',
      'Lmusjxu Bughvjukd Ubrompki', 'Ldiltj Fiswkbei Lgnro', 'Ens Ukmarxh',
      'Pgxv Mvgb Ujxkuv', 'Auccaxhrb Tckeyuat Vmqssg', 'Jpnauqj Nazuzauqt',
      'Za Kncyyenng', 'Xblotsh Lkz Gyfrbsqwv', 'Jviulwlf Ewjzvmd Hyttvu',
      'Pni Jkabrjeg Cxw', 'Ur Vzhdxiwgf', 'Nebjpksmq Nfl', 'Mqkqybvt Dgwr',
      'Qru Ux', 'Lv Sqkrul Sygmrtrk', 'Tvalag Qftjg', 'Xw Mvp Zplwyzovl',
      'Tn Atcjub Ruhhpvtdy', 'Owttxctw Dwv Kswketud', 'Tzcbrauxe Ah',
      'Vgpm Jmzbtra', 'Gnptxdlfa Lou', 'Wmlibm Werposo Rnjdkbr',
      'Dzhy Uerfllhsz Ahu', 'Intsf Sm', 'Dqexkz Fi', 'Wdd Sbpkn',
      'Ssadpqe Matgi Dozw', 'Duznofcmg Amevc', 'Kcsaefocu Fmt Igly',
      'Pmhlwij Ptrurim Jwkzuam', 'Sfp Xssxpkkvp', 'Sxp Xvopzedv',
      'Vlqxppzv Mkkwe Trep', 'Xxfjlogg Sizkal', 'Arfx Md', 'Brz Pbwgbnv',
      'Lyimch Dlkuu', 'Tc Amjstmsqt Cbjr', 'Pv Jld', 'Met Hyvcmmple',
      'Xapq Jz Rnh', 'Rebfivaut Dnifo', 'Qupvtdjs Iqhm', 'Nbyyvshw Vv',
      'Hxc Kjv Lhey', 'Vlgkkf Zueizdyu']))
    .toEqual('Pnpz Piyqg Plij Pat');
});
