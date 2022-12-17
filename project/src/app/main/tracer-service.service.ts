import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICryptoTracer } from '../shared/interfaces/CryptoTrakerInterface';

@Injectable({
  providedIn: 'root'
})
export class TracerServiceService {
  
  constructor(private http: HttpClient) { }

  getData() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CoinAPI-Key': 'C54ED7CC-189B-48FC-93AA-7A17DBA2E463'
    });

    return this.http
    .get<ICryptoTracer[]>
    ('https://rest.coinapi.io/v1/assets?filter_asset_id=BTC,ETH,USDT,BNB,USDC,BUSD,XRP,DOGE,ADA,MATIC', { headers });

  }
}
