export type Category = {
  id: number;
  title: string;
};
export type Drink = {
  id?: number | string;
  name?: string;
  price?: number;
  imgUrl?: string;
  category?: string;
  quantity?: number;
};
export type Table = {
  id: number;
  drink: Drink[];
  total: number;
  empty: boolean;
};
