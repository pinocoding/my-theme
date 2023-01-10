import { AuthorpageComponent } from './authorpage/authorpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReadingDetailComponent } from './common/reading-container/reading-detail/reading-detail.component';

const appRouter: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'author',
    component: AuthorpageComponent,
  },
  {
    path: 'contact',
    component: ContactpageComponent,
  },
  {
    path: 'readings',
    component: ContactpageComponent,
  },
  {
    path: 'readings/:slug',
    component: ReadingDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
