import { Component, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {NgxUiLoaderService} from 'ngx-ui-loader';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-blog-details-left-sidebar',
  templateUrl: './blog-details-left-sidebar.component.html',
  styleUrls: ['./blog-details-left-sidebar.component.css']
})
export class BlogDetailsLeftSidebarComponent implements OnInit {


  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  constructor(private ngxService: NgxUiLoaderService,) { }
  data  = [
    {
      name: 'Plastik',
      children: [{name: 'Engelberg 76'}, {name: 'Engelberg 70'}, {name: 'Imzo Trio 60'},{name: 'Imzo Quattro 60'}],
    },
    {
      name: 'Alyumin',
      children: [{name: 'Imzo Champion 76'}, {name: 'Engelberg Thermo 78'}, {name: 'Engelberg 65 Thermo'}],
    },
    {
      name: 'Surilma tizim',
      children: [{name: 'Imzo Hebe-schiebe'}],
    },
  ];
  treeControl = new FlatTreeControl<any>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  name;

  ngOnInit(): void {
    this.dataSource.data = this.data;
    window.scrollTo(0, 0);
  }

  setName(name) {
    this.ngxService.startLoader("loader-02");
    setTimeout(() => {
      this.ngxService.stopLoader("loader-02");
    }, 700);
    this.name = name;
  }
}
