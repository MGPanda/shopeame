import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ItemsService } from 'src/app/shared/services/items.service';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.scss']
})
export class ManagePageComponent implements OnInit {

  addItemForm: any;

  formImage = 'https://holatelcel.com/wp-content/uploads/2018/11/HEAD-Shrek-reboot.jpg';
  formName = 'Brand New 2020 Shrek Available Fresh Trump Destroyer';
  formPrice = 18.50;
  formDescription = 'El deber de Dios es perdonar a los pinches furros. ¿Cual es el mío? Enviárselos.';
  formStars = 4.5;

  item = {
    image: this.formImage,
    name: this.formName,
    price: this.formPrice,
    description: this.formDescription,
    stars: this.formStars
  };

  constructor(private formBuilder: FormBuilder, private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.addItemForm = this.formBuilder.group({
      image: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      stars: ['', Validators.required]
    });
  }

  addItem(): void {
    this.itemsService.addItem(this.item).subscribe();
  }

  updateItem(): void {
    this.item = {
      image: this.formImage,
      name: this.formName,
      price: this.formPrice,
      description: this.formDescription,
      stars: this.formStars
    };
  }

}
