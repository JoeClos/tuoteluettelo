import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Phones } from './phone';



@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  productList: Phones[]= [];
  phones: Phones[] = [];
  
  constructor(private http: HttpClient) { }
  getAllProducts(): any {
    const products = this.http.get('assets/phones/phones.json');
    return products;
  }

  getProduct(id: string): any {
    const product = this.http.get('assets/phones/' + id + '.json');
    return product;
  }
}
