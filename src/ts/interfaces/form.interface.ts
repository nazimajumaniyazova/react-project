export interface IFormData {
  name: string;
  date: string;
  country: string;
  status: string;
  genres: Array<string>;
  image: string;
}
export interface IFormState {
  cards: Array<IFormData>;
}
