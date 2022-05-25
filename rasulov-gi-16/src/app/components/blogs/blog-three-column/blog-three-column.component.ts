import { Component, OnInit } from '@angular/core';
declare let $:any;
@Component({
  selector: 'app-blog-three-column',
  templateUrl: './blog-three-column.component.html',
  styleUrls: ['./blog-three-column.component.css']
})
export class BlogThreeColumnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit() {
    $('.catalog.owl-carousel').owlCarousel({
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
          items: 3
        }
      }
    });
    setTimeout(()=> {
      $('.owl-carousel .owl-stage').addClass('d-flex').addClass('align-items-center');
    },100)
  }

}
