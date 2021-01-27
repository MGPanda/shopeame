import { Component, Input, OnInit } from '@angular/core';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarFull, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  faStarEmpty = faStarEmpty;
  faStarFull = faStarFull;
  faStarHalf = faStarHalfAlt;

  @Input() rating = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getStars(): string {
    let starSymbols = "";
    return starSymbols;
  }

}
