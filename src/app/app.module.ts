import { ReadingService } from './common/services/readingservice';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
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
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { TitleComponent } from './common/title/title.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { PaginatorModule } from 'primeng/paginator';
import { ReadingContainerComponent } from './common/reading-container/reading-container.component';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuSidebarComponent } from './common/menu-sidebar/menu-sidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { AuthorpageComponent } from './authorpage/authorpage.component';
import { GMapModule } from 'primeng/gmap';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReadingDetailComponent } from './common/reading-container/reading-detail/reading-detail.component';
import { SearchBarComponent } from './searchBar/searchBar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    TitleComponent,
    SidebarComponent,
    ReadingContainerComponent,
    MenuSidebarComponent,
    HomepageComponent,
    ContactpageComponent,
    AuthorpageComponent,
    ReadingDetailComponent,
    SearchBarComponent,
  ],
  imports: [
    TabMenuModule,
    FormsModule,
    ReactiveFormsModule,
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
    AppRoutingModule,
    GMapModule,
    InputTextareaModule,
  ],
  providers: [ProductService, ReadingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
