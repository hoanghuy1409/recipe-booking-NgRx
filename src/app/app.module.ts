import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";

import { AuthEffects } from "./auth/store/auth.effects";
import { RecipeEffects } from "./recipes/store/recipe.effects";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CoreModule } from "./core.module";
import * as fromApp from "./store/app.reducer";
import { environment } from "src/environments/environment";

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
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    EffectsModule.forRoot([AuthEffects, RecipeEffects]),
    StoreRouterConnectingModule.forRoot(),
    SharedModule,
    CoreModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
