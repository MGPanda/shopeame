import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/shared/services/items.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  items: any;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems().subscribe((res: any) => {
      this.items = res;
    });
  }

}
