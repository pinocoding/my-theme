import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderlogoComponent } from './headerlogo/headerlogo.component';
import { HeaderComponent } from './header/header.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { ToastModule } from 'primeng/toast';
import { ProductService } from './carousel/productservice';
import { FooterComponent } from './footer/footer.component';
import { SubcribeComponent } from './subcribe/subcribe.component';
import { FooterbotComponent } from './footerbot/footerbot.component';

import { InputTextModule } from 'primeng/inputtext';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { ArticlecartComponent } from './articlecart/articlecart.component';
import { TitleComponent } from './title/title.component';
import { ArtinforComponent } from './artinfor/artinfor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderlogoComponent,
    HeadernavComponent,
    CarouselComponent,
    FooterComponent,
    SubcribeComponent,
    FooterbotComponent,
    ArticlecartComponent,
    TitleComponent,
    ArtinforComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    FontAwesomeModule,
    MegaMenuModule,
    CarouselModule,
    ToastModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CheckboxModule,
    RadioButtonModule,
    RippleModule,
    TabViewModule,
    InputTextModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
