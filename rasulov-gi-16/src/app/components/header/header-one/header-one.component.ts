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
    {name:'Bosh sahifa', url:''},
    {name:'Kompaniya haqida', url:'/about'},
    {name:'Katalog', url:'/product'},
    {name:'Hamkorlik', url:'/team'},
    {name:'Aloqa', url:'/contact'}
  ];
  constructor(private routerSer: RouterService) { }

  ngOnInit(): void {
  }

  onNavigate(u, i) {
    this.routerSer.setUrl(u.url);
  }

}
