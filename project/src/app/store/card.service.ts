import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IShoppingCard } from '../shared/interfaces/ShoppinCard';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }

  addOneToCard(data:any,headers:HttpHeaders){
    return this.http.post(`/api/data/shoppingCard/`,data,{headers})
  }
  
  getUserCardItems(userId:string){
     return this.http.get<IShoppingCard[]>(`/api/data/shoppingCard?where=_ownerId%3D%22${userId}%22`)
  }
  
  cancelOne(shirtId:string, headers:HttpHeaders){
    return this.http.delete(`/api/data/shoppingCard/${shirtId}`,{headers})
  }

  getOne(orderId:string){
    return this.http.get<IShoppingCard>(`/api/data/shoppingCard/${orderId}`)
  }

  addOneToOrders(data:any,headers:HttpHeaders){
    return this.http.post(`/api/data/myOrders/`,data,{headers})
  }

  getUserOrdersItems(userId:string){
    return this.http.get<IShoppingCard[]>(`/api/data/myOrders?where=_ownerId%3D%22${userId}%22`)
 }

}
