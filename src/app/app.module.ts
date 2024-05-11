import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    MessageWspComponent,
    LegalPolicyComponent,
    PolicyCookiesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
