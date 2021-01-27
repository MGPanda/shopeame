import { Component, OnInit } from '@angular/core';
import { faRadiation, faBinoculars, faDharmachakra } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  faRadiation = faRadiation;
  faBinoculars = faBinoculars;
  faDharmachakra = faDharmachakra;

  constructor() { }

  ngOnInit(): void {
  }

}
