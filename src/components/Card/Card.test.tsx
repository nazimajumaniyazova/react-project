import { render, screen } from '@testing-library/react';
import Card, { ICard } from './Card';

const testCards: Array<ICard> = [
  {
    id: 1,
    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
    name: 'Puss in Boots: The Last Wish',
    date: 'Dec 07, 2022',
    score: '84%',
  },
  {
    id: 2,
    imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/x3PIk93PTbxT88ohfeb26L1VpZw.jpg',
    name: 'Prizefighter: The Life of Jem Belcher',
    date: 'Jun 30, 2022',
    score: '71%',
  },
];

describe('Card component', () => {
  test('it renders', () => {
    render(<Card {...testCards[0]} />);
  });
  it('renders props it into the apropriate text', () => {
    render(<Card {...testCards[0]} />);
    expect(screen.getByText(testCards[0].name)).toBeInTheDocument();
    expect(screen.getByText(testCards[0].date)).toBeInTheDocument();
    expect(screen.getByText(`Score: ${testCards[0].score}`)).toBeInTheDocument();
  });
  it('renders a list of product cards', () => {
    render(
      <>
        {testCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </>
    );
    const scoreElements = screen.getAllByText(/Score:/i);
    expect(scoreElements.length).toBe(testCards.length);
  });
});
