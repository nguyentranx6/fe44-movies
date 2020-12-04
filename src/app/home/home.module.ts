import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MaterialModule } from "../shared/material/material.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NewsComponent } from "./news/news.component";
import { ContactComponent } from "./contact/contact.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ContentComponent } from "./content/content.component";
import { MoviesComponent } from "./movies/movies.component";
import { TheatersComponent } from "./theaters/theaters.component";
import { DetailComponent } from "./detail/detail.component";
import { NgCircleProgressModule } from "ng-circle-progress";
import { TheaterdetailComponent } from "./theaterdetail/theaterdetail.component";
import { BookingComponent } from "./booking/booking.component";
import { ChairComponent } from "./chair/chair.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {UserdetailComponent} from '../admin/userdetail/userdetail.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: ContentComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "contact",
        component: ContactComponent,
      },
      {
        path: "news",
        component: NewsComponent,
      },
      {
        path: "detail/:id",
        component: DetailComponent,
      },
      {
        path: "booking/:idBooking",
        component: BookingComponent,
      },
      {
        path: "user/:id",
        component: UserdetailComponent,
        data: {type: 'home'}
      },
    ],
  },
];
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NewsComponent,
    ContactComponent,
    CarouselComponent,
    ContentComponent,
    MoviesComponent,
    TheatersComponent,
    DetailComponent,
    TheaterdetailComponent,
    BookingComponent,
    ChairComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    NgCircleProgressModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NewsComponent,
    ContactComponent,
    CarouselComponent,
    ContentComponent,
    MoviesComponent,
    TheatersComponent,
  ],
})
export class HomeModule {}
