import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { RestangularModule } from "ngx-restangular";

import { AppComponent } from "./app.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { LoginComponent } from "./login/login.component";
import { MatDialogModule } from "@angular/material/dialog";
import { OriginalNoteDialogComponent } from "./originalnotedialog/originalnotedialog.component";

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl("https://irest.pitt.edu/api");
}

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    OriginalNoteDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [],
  entryComponents: [OriginalNoteDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
