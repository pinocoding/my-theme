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
import { HeaderlogoComponent } from './common/headerlogo/headerlogo.component';
import { HeaderComponent } from './common/header/header.component';
import { HeadernavComponent } from './common/headernav/headernav.component';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './common/carousel/carousel.component';
import { ToastModule } from 'primeng/toast';
import { ProductService } from './common/carousel/productservice';
import { FooterComponent } from './common/footer/footer.component';
import { SubcribeComponent } from './common/subcribe/subcribe.component';
import { FooterbotComponent } from './common/footerbot/footerbot.component';

import { InputTextModule } from 'primeng/inputtext';

import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { ArticlecartComponent } from './common/articlecart/articlecart.component';
import { TitleComponent } from './common/title/title.component';
import { ArtinforComponent } from './common/artinfor/artinfor.component';
import { TagcloudComponent } from './common/tagcloud/tagcloud.component';
import { TagcloudItemComponent } from './common/tagclouditem/tagclouditem.component';
import { FollowmeComponent } from './common/followme/followme.component';
import { AboutmeComponent } from './common/aboutme/aboutme.component';
import { AboutmeinfoComponent } from './common/aboutmeinfo/aboutmeinfo.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { ArticlesideComponent } from './common/articleside/articleside.component';

import { SocialsideComponent } from './common/socialside/socialside.component';
import { AdvertisingsideComponent } from './common/advertisingside/advertisingside.component';
import { BannerComponent } from './common/banner/banner.component';
import { TagcloudsideComponent } from './common/tagcloudside/tagcloudside.component';
import { TagcloudsideitemComponent } from './common/tagcloudsideitem/tagcloudsideitem.component';
import { FollowmeitemComponent } from './common/followmeitem/followmeitem.component';

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
    TagcloudComponent,
    TagcloudItemComponent,
    FollowmeComponent,
    AboutmeComponent,
    AboutmeinfoComponent,
    SidebarComponent,
    ArticlesideComponent,

    SocialsideComponent,
    AdvertisingsideComponent,
    BannerComponent,
    TagcloudsideComponent,
    TagcloudsideitemComponent,
    FollowmeitemComponent,
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
