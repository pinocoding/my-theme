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
import { HeaderComponent } from './common/header/header.component';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './common/carousel/carousel.component';
import { ToastModule } from 'primeng/toast';
import { ProductService } from './common/carousel/productservice';
import { FooterComponent } from './common/footer/footer.component';
import { SubcribeComponent } from './common/subcribe/subcribe.component';
import { FooterbotComponent } from './common/footerbot/footerbot.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
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
import { PaginatorModule } from 'primeng/paginator';
import { SocialsideComponent } from './common/socialside/socialside.component';
import { AdvertisingsideComponent } from './common/advertisingside/advertisingside.component';
import { BannerComponent } from './common/banner/banner.component';
import { TagcloudsideComponent } from './common/tagcloudside/tagcloudside.component';
import { TagcloudsideitemComponent } from './common/tagcloudsideitem/tagcloudsideitem.component';
import { FollowmeitemComponent } from './common/followmeitem/followmeitem.component';
import { ContainerComponent } from './common/container/container.component';
import { CardComponent } from './common/card/card.component';
import { TableComponent } from './common/table/table.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './common/button/button.component';
import { MenuSidebarComponent } from './common/menu-sidebar/menu-sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    ContainerComponent,
    CardComponent,
    TableComponent,
    ButtonComponent,
    MenuSidebarComponent,
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
    CardModule,
    PaginatorModule,
    TableModule,
    FormsModule,
    PanelMenuModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
