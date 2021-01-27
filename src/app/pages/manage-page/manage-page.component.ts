import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ItemsService} from 'src/app/shared/services/items.service';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.scss']
})
export class ManagePageComponent implements OnInit {

  addItemForm: any;

  item: any;

  constructor(private formBuilder: FormBuilder, private itemsService: ItemsService) {
  }

  ngOnInit(): void {
    this.addItemForm = this.formBuilder.group({
      image: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      stars: ['', Validators.required]
    });

    this.updateItem();
  }

  addItem(): void {
    this.itemsService.addItem(this.item).subscribe();
  }

  updateItem(): void {
    this.addItemForm.valueChanges.subscribe((res: any) => {
      this.item = {
        image: res.image,
        name: res.name,
        price: res.price,
        description: res.description,
        stars: res.stars
      };
    });

  }

}
