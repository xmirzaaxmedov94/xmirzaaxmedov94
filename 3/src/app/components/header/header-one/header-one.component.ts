import {Component, Input, OnInit} from '@angular/core';
import {RouterService} from '../../../services/router.service';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})
export class HeaderOneComponent implements OnInit {

  @Input() url;
  urls = [
    {name:'Asosiy', url:''},
    {name:'Biz haqimizda', url:'/about'},
    {name:'Vazifa', url:'/task'},
    {name:'Mahsulotlar', url:'/products'},
    {name:'Xizmatlar', url:'/services'},
  ];
  constructor(private routerSer: RouterService) { }

  ngOnInit(): void {
  }

  onNavigate(u, i) {
    this.routerSer.setUrl(u.url);
  }

}
