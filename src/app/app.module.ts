import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { MicroserviceComponent } from './microservice/microservice.component';
import { CustomerSystemComponent } from './customer-system/customer-system.component';
import { SocialComponent } from './social/social.component';
import { WebHostingComponent } from './web-hosting/web-hosting.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutComponent } from './about/about.component';
import { GearComponent } from './gear/gear.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    RegisterComponent,
    MicroserviceComponent,
    CustomerSystemComponent,
    SocialComponent,
    WebHostingComponent,
    WebDevelopmentComponent,
    ReviewsComponent,
    AboutComponent,
    GearComponent,
    FaqComponent,
    ContactComponent,
    ChatComponent,
    ProfileComponent,
    OrdersComponent,
    WishListComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
