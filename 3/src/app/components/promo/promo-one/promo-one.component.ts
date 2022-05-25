import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-promo-one',
  templateUrl: './promo-one.component.html',
  styleUrls: ['./promo-one.component.css']
})
export class PromoOneComponent implements OnInit {
 @Input() url;
  constructor() { }

  ngOnInit(): void {
  }

}
