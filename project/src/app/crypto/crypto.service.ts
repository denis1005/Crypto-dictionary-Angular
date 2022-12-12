import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICryptocurrency } from '../shared/interfaces/Cryptocurrency';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(public http:HttpClient) { }

  getAllCrypto(){
    return this.http.get<ICryptocurrency[]>('/api/data/crypto')
  }

  getOneCrypto(id:number){
    return this.http.get<ICryptocurrency>(`/api/data/crypto/${id}`)
  }
}
