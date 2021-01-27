import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems(): any {
    return this.http.get('http://localhost:3000/products');
  }

  addItem(item: any): any {
    return this.http.post('http://localhost:3000/products', item);
  }
}
