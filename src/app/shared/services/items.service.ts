import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getItems(): any {
    return this.http.get(this.url);
  }

  addItem(item: any): any {
    return this.http.post(this.url, item);
  }

  deleteItem(id: any): any {
    return this.http.delete(`${this.url}/${id}`);
  }

  modifyItem(item: any): any {
    return this.http.put(`${this.url}/${item.id}`, item);
  }
}
