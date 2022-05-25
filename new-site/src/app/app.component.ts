import { Component } from '@angular/core';
import {RouterService} from './services/router.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private routerSer: RouterService,
              private ngxService: NgxUiLoaderService,) {
  }

  ngOnInit() {
    this.routerSer.getUrl().subscribe(url=> {
      this.ngxService.startLoader("loader-01");
      setTimeout(() => {
        this.ngxService.stopLoader("loader-01");
      }, 400);
    })
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }
}
