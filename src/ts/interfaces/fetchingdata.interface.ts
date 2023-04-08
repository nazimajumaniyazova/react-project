export interface ICardData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  url: string;
  image: string;
  created: string;
  episode: Array<string>;
  gender: string;
  location: { name: string; url: string };
  origin: { name: string; url: string };
}
export interface PostICardData {
  info: { count: number; pages: number; next: string | null; prev: string | null };
  results: Array<ICardData>;
}
export interface IFetchError {
  error: string;
}
