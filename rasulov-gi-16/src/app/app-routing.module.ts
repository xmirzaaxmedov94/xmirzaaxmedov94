import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemeOneComponent } from './themes/theme-one/theme-one.component';
import { ThemeTwoComponent } from './themes/theme-two/theme-two.component';
import { ThemeThreeComponent } from './themes/theme-three/theme-three.component';
import { ThemeFourComponent } from './themes/theme-four/theme-four.component';
import { ThemeFiveComponent } from './themes/theme-five/theme-five.component';
import { ThemeSixComponent } from './themes/theme-six/theme-six.component';
import { ThemeSevenComponent } from './themes/theme-seven/theme-seven.component';
import { ThemeEightComponent } from './themes/theme-eight/theme-eight.component';
import { ThemeNineComponent } from './themes/theme-nine/theme-nine.component';
import { News } from './components/inner-pages/news/news';
import { BlogThreeColumnComponent } from './components/blogs/blog-three-column/blog-three-column.component';
import { BlogDetailsLeftSidebarComponent } from './components/blogs/blog-details-left-sidebar/blog-details-left-sidebar.component';
import {ContactPage} from './components/inner-pages/contacts/contact-page.component';


const routes: Routes = [
  {path: 'theme-two', component: ThemeTwoComponent},
  {path: 'theme-three', component: ThemeThreeComponent},
  {path: 'theme-four', component: ThemeFourComponent},
  {path: 'theme-five', component: ThemeFiveComponent},
  {path: 'theme-six', component: ThemeSixComponent},
  {path: 'theme-seven', component: ThemeSevenComponent},
  {path: 'theme-eight', component: ThemeEightComponent},
  {path: 'theme-nine', component: ThemeNineComponent},
  {path: '', component: ThemeOneComponent},
  {path: 'about', component: BlogDetailsLeftSidebarComponent},
  {path: 'product', component: BlogThreeColumnComponent},
  {path: 'team', component: News},
  // {path: 'support', component: News},
  {path: 'contact', component: ContactPage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
