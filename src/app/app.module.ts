import { appReducer } from "./store/app.reducer";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CoreModule } from "./core.module";
import * as fromApp from "./store/app.reducer";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    SharedModule,
    CoreModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
