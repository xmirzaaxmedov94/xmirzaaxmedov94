import { Component, OnInit } from '@angular/core';
import {NgwWowService} from 'ngx-wow';
declare let $:any;
@Component({
  selector: 'app-hero-one',
  templateUrl: './hero-one.component.html',
  styleUrls: ['./hero-one.component.css']
})
export class HeroOneComponent implements OnInit {

  constructor(private wow: NgwWowService,) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    $('.main-slider.owl-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      smartSpeed: 2000,
      autoplay: true,
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
          items: 1
        }
      }
    });
    this.wow.init();
  }

}
