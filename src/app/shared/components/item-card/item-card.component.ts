import {Component, Input, OnInit} from '@angular/core';
import {ItemsService} from '../../services/items.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: any;
  @Input() showInGallery = false;

  editItemForm: any;
  isEditing = false;

  constructor(private itemsService: ItemsService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.editItemForm = this.formBuilder.group({
      image: [this.item.image, Validators.required],
      name: [this.item.name, Validators.required],
      price: [this.item.price, Validators.required],
      description: [this.item.description, Validators.required],
      stars: [this.item.stars, Validators.required]
    });

    this.updateItem();
  }

  deleteItem(): void {
    this.itemsService.deleteItem(this.item.id).subscribe();
  }

  modifyItem(): void {
    this.itemsService.modifyItem(this.item).subscribe();
  }

  updateItem(): void {
    this.editItemForm.valueChanges.subscribe((res: any) => {
      this.item.image = res.image;
      this.item.name = res.name;
      this.item.price = res.price;
      this.item.description = res.description;
      this.item.stars = res.stars;
    });
  }
}
