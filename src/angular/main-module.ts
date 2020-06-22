import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
// @ts-ignore
import { App2 } from "./angular.component.ts";
// @ts-ignore
import { Subroute1 } from "./subroute1.component.ts";
// @ts-ignore
import { Subroute2 } from "./subroute2.component.ts";
import { enableProdMode } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";

const appRoutes: Routes = [
  {
    path: "subroute1",
    component: Subroute1,
  },
  {
    path: "subroute2",
    component: Subroute2,
  },
];

enableProdMode();

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes, {})],
  providers: [{ provide: APP_BASE_HREF, useValue: "/app2/" }],
  declarations: [App2, Subroute1, Subroute2],
  bootstrap: [App2],
})
export default class MainModule {}
