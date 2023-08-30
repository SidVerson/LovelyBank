export type TypeCurrency = 'RUB' | ' USD';
export type TypeName = 'Lovely Black' | 'Lovely Platinum';

export interface IAccount {
  _id: string;
  userId: string;
  balance: number;
  cardNumber: number;
  currency: TypeCurrency;
  name: TypeName;
}
