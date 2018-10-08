import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "~/login/login.component";
import { RegistrationComponent } from "~/registration/registration.component";
import { TNSFontIconModule, TNSFontIconService } from 'nativescript-ngx-fonticon';
import { PlayerRegistrationComponent } from "~/player-registration/player-registration.component";
import { PlayerRegistrationAddressComponent } from "~/player-registration-address/player-registration-address.component";
import { MapComponent } from "~/map/map.component";
import { CardsComponent } from "~/cards/cards.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
TNSFontIconService.debug = true;

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        TNSFontIconModule.forRoot({
            'fa': './css/font-awesome.min.css',
        }),
    ],
    declarations: [
        AppComponent,
        MapComponent,
        CardsComponent,
        PlayerRegistrationAddressComponent,
        ItemsComponent,
        ItemDetailComponent,
        RegistrationComponent,
        LoginComponent,
        PlayerRegistrationComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
