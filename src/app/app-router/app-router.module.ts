import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { AdminComponent } from "../admin/admin.component";
import {FooterComponent} from '../home/footer/footer.component';
import {NotfoundComponent} from '../shared/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: "**",
    component: NotfoundComponent
  }

 /* {
    path: "admin",
    loadChildren: () => import("../home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "",
    loadChildren: () =>
        import("../admin/admin.module").then((m) => m.AdminModule),
  },*/
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
