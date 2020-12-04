import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { UserdetailComponent } from "./userdetail/userdetail.component";
import { BookinginfoComponent } from "./bookinginfo/bookinginfo.component";
import { AddmoviesComponent } from "./addmovies/addmovies.component";
import { AdduserComponent } from "./adduser/adduser.component";
import { UsersComponent } from "./users/users.component";
import { MoviesComponent } from "./movies/movies.component";
import { RouterModule, Routes } from "@angular/router";
import { AdmincontentComponent } from "./admincontent/admincontent.component";
import { HomeModule } from "../home/home.module";
import { AdminGuard } from "../core/guards/admin.guard";
import { MaterialModule } from "../shared/material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EdituserComponent } from './edituser/edituser.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import {MatSortModule} from '@angular/material/sort';
import { EditmovieComponent } from './editmovie/editmovie.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: "",
        redirectTo: "users",
        pathMatch: "full",
      },
      {
        path: "users",
        component: UsersComponent,
      },
      {
        path: "users/:id",
        component: UserdetailComponent,
      },
      {
        path: "add-user",
        component: AdduserComponent,
      },
      {
        path: "movies",
        component: MoviesComponent,
      },
      {
        path: "add-movies",
        component: AddmoviesComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    UserdetailComponent,
    BookinginfoComponent,
    AddmoviesComponent,
    AdduserComponent,
    UsersComponent,
    MoviesComponent,
    AdmincontentComponent,
    EdituserComponent,
    SlidebarComponent,
    EditmovieComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
  ],
  exports: [RouterModule,UserdetailComponent],
})
export class AdminModule {}
