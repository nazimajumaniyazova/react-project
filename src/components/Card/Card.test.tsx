import { render, screen } from '@testing-library/react';
import Card from './Card';
import { ICardData } from '../../ts/interfaces/fetchingdata.interface';
const testCards: Array<ICardData> = [
  {
    id: 361,
    name: 'Toxic Rick',
    status: 'Dead',
    species: 'Humanoid',
    type: "Rick's Toxic Side",
    gender: 'Male',
    origin: {
      name: 'Alien Spa',
      url: 'https://rickandmortyapi.com/api/location/64',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    url: 'https://rickandmortyapi.com/api/character/361',
    created: '2018-01-10T18:20:41.703Z',
  },
];

describe('Card component', () => {
  test('it renders', () => {
    render(<Card {...testCards[0]} />);
  });
  it('renders props it into the apropriate text', () => {
    render(<Card {...testCards[0]} />);
    expect(screen.getByText(testCards[0].name)).toBeInTheDocument();
    expect(screen.getByText(`Origin: ${testCards[0].origin.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Species: ${testCards[0].species}`)).toBeInTheDocument();
  });
  it('renders a list of product cards', () => {
    render(
      <>
        {testCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </>
    );
    const scoreElements = screen.getAllByText(/Species:/i);
    expect(scoreElements.length).toBe(testCards.length);
  });
});
