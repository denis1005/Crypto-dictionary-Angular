import { ICryptoShirt } from "./CryptoShirt";

export interface IShoppingCard {
  _ownerId:string,
  _id:string,
        order:{
          'price':string,
          'sizes':string,
          'gender':string,
          'quantity':string,
        },
        'shirt':ICryptoShirt
      
}