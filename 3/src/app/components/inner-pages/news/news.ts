import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './news.html'
})
export class News implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
