import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

import { HeaderlogoComponent } from './headerlogo/headerlogo.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';

import { HomepagewrapperComponent } from './homepagewrapper/homepagewrapper.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderlogoComponent,
    HeadernavComponent,
    HomepageComponent,
    FooterComponent,

    HomepagewrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
