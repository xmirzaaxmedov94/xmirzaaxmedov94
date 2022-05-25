import {Component, Input, OnInit} from '@angular/core';
declare let $:any;
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

  ngAfterViewInit() {
    $('.team-slider.owl-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      smartSpeed: 2000,
      autoplay: false,
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 6
        }
      }
    });

    $('.slider-1.owl-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      smartSpeed: 2000,
      autoplay: false,
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        }
      }
    });
  }

}
