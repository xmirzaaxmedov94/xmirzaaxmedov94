import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector:'child-page',
  templateUrl:'child-page.html'
})
export class ChildPage {
  @Input() name = '';
  @Input() code = '';
  @Input() data = '';
  obj$: Observable<any>;
  obj;
  url = './assets/data/';
  constructor(private http: HttpClient) {
  }

  ngOnChanges() {
    this.obj$ = this.http.get<any>(this.url + this.code + '/' + this.data).pipe(map(x=>{
      this.name = this.name.toLowerCase();
      this.obj = x;
      return x;
    }))
  }
}
