import { render } from '@testing-library/react';
import Cards from './Cards';
const cards = [
  {
    id: 1,
    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/x3PIk93PTbxT88ohfeb26L1VpZw.jpg',
    name: 'Prizefighter: The Life of Jem Belcher',
    date: 'Jun 30, 2022',
    score: '71%',
  },
  {
    id: 2,
    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
    name: 'Puss in Boots: The Last Wish',
    date: 'Dec 07, 2022',
    score: '84%',
  },
  {
    id: 3,
    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    name: 'Black Panther: Wakanda Forever',
    date: 'Nov 09, 2022',
    score: '73%',
  },
  {
    id: 4,
    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/aCy61aU7BMG7SfhkaAaasS0KzUO.jpg',
    name: 'Sayen',
    date: 'Mar 03, 2023',
    score: '67%',
  },
  {
    id: 5,
    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg',
    name: 'The Whale',
    date: 'Dec 09, 2022',
    score: '81%',
  },
  {
    id: 6,
    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    name: 'Avatar: The Way of Water',
    date: 'Dec 14, 2022',
    score: '77%',
  },
  {
    id: 7,
    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/130H1gap9lFfiTF9iDrqNIkFvC9.jpg',
    name: 'A Man Called Otto',
    date: 'Dec 28, 2022',
    score: '79%',
  },
  {
    id: 8,
    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uMMIeMVk1TCG3CZilpxbzFh0JKT.jpg',
    name: '65',
    date: 'Mar 02, 2023',
    score: '58%',
  },
  {
    id: 10,
    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg',
    name: `Guillermo del Toro's Pinocchio`,
    date: 'Nov 09, 2022',
    score: '83%',
  },
  {
    id: 11,
    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2IRjbi9cADuDMKmHdLK7LaqQDKA.jpg',
    name: `All Quiet on the Western Front`,
    date: 'Oct 07, 2022',
    score: '78%',
  },
];
describe('Cards component', () => {
  test('it renders', () => {
    render(<Cards {...cards} />);
  });
});
