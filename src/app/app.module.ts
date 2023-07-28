import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
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
import { LoginComponent } from './login/login.component';
import { JavaComponent } from './java/java.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
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
    ReviewComponent,
    LoginComponent,
    JavaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
