import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { TimelineComponent } from "../timeline/timeline.component";
import { LoginComponent } from "../login/login.component";

export const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "timeline", component: TimelineComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", redirectTo: "/login" }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
