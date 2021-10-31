import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerSystemComponent } from './customer-system/customer-system.component';
import { FaqComponent } from './faq/faq.component';
import { GearComponent } from './gear/gear.component';
import { LoginComponent } from './login/login.component';
import { MicroserviceComponent } from './microservice/microservice.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ReviewComponent } from './review/review.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SocialComponent } from './social/social.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { WebHostingComponent } from './web-hosting/web-hosting.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'customerSystem', component: CustomerSystemComponent},
  { path: 'microservice', component: MicroserviceComponent},
  { path: 'social', component: SocialComponent},
  { path: 'webHosting', component: WebHostingComponent},
  { path: 'webDevelopment', component: WebDevelopmentComponent},
  { path: 'reviews', component: ReviewsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'gear', component: GearComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'wishlist', component: WishListComponent},
  { path: 'review', component: ReviewComponent},
  { path: 'review/:id', component: ReviewComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
