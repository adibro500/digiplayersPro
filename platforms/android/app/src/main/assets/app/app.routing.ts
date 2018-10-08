import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "~/login/login.component";
import { RegistrationComponent } from "~/registration/registration.component";
import { PlayerRegistrationComponent } from "~/player-registration/player-registration.component";
import { PlayerRegistrationAddressComponent } from "~/player-registration-address/player-registration-address.component";
import { MapComponent } from "~/map/map.component";
import { CardsComponent } from "~/cards/cards.component";

const routes: Routes = [
    { path: "", component: LoginComponent },//component: PlayerRegistrationComponent },// redirectTo: "/items", pathMatch: "full" },
    { path: "registration", component: RegistrationComponent },
    { path: "player-register", component: PlayerRegistrationComponent },
    { path: "player-register-address", component: PlayerRegistrationAddressComponent },
    { path: 'map', component: MapComponent },
    { path: 'items', component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "/cards", component: CardsComponent },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
