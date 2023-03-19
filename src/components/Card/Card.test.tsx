import { render, screen } from '@testing-library/react';
import Card, { ICard } from './Card';

const testCard: ICard = {
  imgUrl: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/x3PIk93PTbxT88ohfeb26L1VpZw.jpg',
  name: 'Prizefighter: The Life of Jem Belcher',
  date: 'Jun 30, 2022',
  score: '71%',
};
describe('Card component', () => {
  test('it renders', () => {
    render(<Card {...testCard} />);
  });
  it('should props it into the apropriate text', () => {
    render(<Card {...testCard} />);
    expect(screen.getByText(testCard.name)).toBeInTheDocument();
    expect(screen.getByText(testCard.date)).toBeInTheDocument();
    expect(screen.getByText(`Score: ${testCard.score}`)).toBeInTheDocument();
  });
});
