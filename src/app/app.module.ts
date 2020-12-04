import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material/material.module";
import { HomeModule } from "./home/home.module";
import { AdminModule } from "./admin/admin.module";
import { AppRouterModule } from "./app-router/app-router.module";
import { HttpClientModule } from "@angular/common/http";
import { NgCircleProgressModule } from "ng-circle-progress";
import { DialogContentComponent } from './shared/dialog-content/dialog-content.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoadingComponent } from './shared/loading/loading.component';



@NgModule({
  declarations: [AppComponent, DialogContentComponent, NotfoundComponent, LoadingComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    AdminModule,
    AppRouterModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),

  ],
  exports: [DialogContentComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
