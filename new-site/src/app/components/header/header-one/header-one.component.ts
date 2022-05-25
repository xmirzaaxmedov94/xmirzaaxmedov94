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
    {name:'Kompaniya haqida', url:'/about'},
    {name:'Katalog', url:'/catalog'},
    {name:'Xizmat', url:'/service'},
    // {name:'F.A.Q', url:'/support'},
    {name:'Yangiliklar', url:'/news'},
  ];
  constructor(private routerSer: RouterService) { }

  ngOnInit(): void {
  }

  onNavigate(u, i) {
    this.routerSer.setUrl(u.url);
  }

}
