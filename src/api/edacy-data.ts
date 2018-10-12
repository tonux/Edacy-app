import {Edacy} from '../app/edacy/edacy';

export const EDACY_ITEMS: Edacy[] = [
 {
   id: 1,
   cohorte: 'cohorte 1',
   description: 'Mettre une description',
   date: new Date(new Date().setDate(new Date().getDate() + -15)),
   etat: false
 }, {
   id: 2,
   cohorte: 'cohorte 2',
   description: 'mettre une description 2',
   date: new Date(new Date().setDate(new Date().getDate() + 5)),
   etat: false
 }, {
   id: 3,
   cohorte: 'cohorte 3',
   description: 'mettre une description 3',
   date: new Date(new Date().setDate(new Date().getDate() - 1)),
   etat: true
 }
];
