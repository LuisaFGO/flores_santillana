import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
