import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { DownloadComponent } from './components/download/download.component';
import { BlogComponent } from './components/blogs/blog/blog.component';
import { BlogThreeColumnComponent } from './components/blogs/blog-three-column/blog-three-column.component';
import { BlogDetailsLeftSidebarComponent } from './components/blogs/blog-details-left-sidebar/blog-details-left-sidebar.component';
import { ThemeOneComponent } from './themes/theme-one/theme-one.component';
import { ScrollupComponent } from './components/scrollup/scrollup.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeTwoComponent } from './themes/theme-two/theme-two.component';
import { ThemeThreeComponent } from './themes/theme-three/theme-three.component';
import { ThemeFourComponent } from './themes/theme-four/theme-four.component';
import { ThemeFiveComponent } from './themes/theme-five/theme-five.component';
import { ThemeSixComponent } from './themes/theme-six/theme-six.component';
import { ThemeSevenComponent } from './themes/theme-seven/theme-seven.component';
import { ThemeEightComponent } from './themes/theme-eight/theme-eight.component';
import { ThemeNineComponent } from './themes/theme-nine/theme-nine.component';
import { HeaderOneComponent } from './components/header/header-one/header-one.component';
import { HeaderTwoComponent } from './components/header/header-two/header-two.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {ChildPage} from './components/child-page/child-page';
import {HttpClientModule} from '@angular/common/http';
import {NgxUiLoaderModule,NgxUiLoaderConfig,SPINNER,POSITION,PB_DIRECTION} from "ngx-ui-loader";
import {HeroOneComponent} from './components/hero/hero-one/hero-one.component';
import {PromoOneComponent} from './components/promo/promo-one/promo-one.component';
import {News} from './components/inner-pages/news/news';
import {TeamComponent} from './components/team/team.component';
import {ContactPage} from './components/inner-pages/contacts/contact-page.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "yellow",
  bgsPosition: POSITION.topCenter,
  bgsSize: 40,
  overlayColor: 'rgba(0,0,0,1)',
  bgsType: SPINNER.cubeGrid, // background spinner type
  fgsType: SPINNER.ballSpinClockwiseFadeRotating, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DownloadComponent,
    BlogComponent,
    BlogThreeColumnComponent,
    BlogDetailsLeftSidebarComponent,
    ThemeOneComponent,
    ScrollupComponent,
    PreloaderComponent,
    FooterComponent,
    ThemeTwoComponent,
    ThemeThreeComponent,
    ThemeFourComponent,
    ThemeFiveComponent,
    ThemeSixComponent,
    ThemeSevenComponent,
    ThemeEightComponent,
    ThemeNineComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    ChildPage,
    HeroOneComponent,
    PromoOneComponent,
    News,
    TeamComponent,
    ContactPage,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatTreeModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
