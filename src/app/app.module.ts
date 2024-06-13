import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MessageWspComponent } from './shared/message-wsp/message-wsp.component';
import { LegalPolicyComponent } from './modals/legal-policy/legal-policy.component';
import { PolicyCookiesComponent } from './modals/policy-cookies/policy-cookies.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailProductComponent } from './modals/detail-product/detail-product.component';
import { BlogComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [AppComponent, BlogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    MessageWspComponent,
    LegalPolicyComponent,
    PolicyCookiesComponent,
    AboutUsComponent,
    GalleryComponent,
    ContactComponent,
    DetailProductComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
