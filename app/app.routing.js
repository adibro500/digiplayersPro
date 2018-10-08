"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var login_component_1 = require("~/login/login.component");
var registration_component_1 = require("~/registration/registration.component");
var player_registration_component_1 = require("~/player-registration/player-registration.component");
var player_registration_address_component_1 = require("~/player-registration-address/player-registration-address.component");
var map_component_1 = require("~/map/map.component");
var cards_component_1 = require("~/cards/cards.component");
var routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "registration", component: registration_component_1.RegistrationComponent },
    { path: "player-register", component: player_registration_component_1.PlayerRegistrationComponent },
    { path: "player-register-address", component: player_registration_address_component_1.PlayerRegistrationAddressComponent },
    { path: 'map', component: map_component_1.MapComponent },
    { path: 'items', component: items_component_1.ItemsComponent },
    { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
    { path: "cards", component: cards_component_1.CardsComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSwyREFBeUQ7QUFDekQsZ0ZBQThFO0FBQzlFLHFHQUFrRztBQUNsRyw2SEFBeUg7QUFDekgscURBQW1EO0FBQ25ELDJEQUF5RDtBQUV6RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDdkMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw4Q0FBcUIsRUFBRTtJQUMxRCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsMkRBQTJCLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsU0FBUyxFQUFFLDBFQUFrQyxFQUFFO0lBQ2xGLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBRTtJQUN4QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7Q0FFL0MsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIn4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9IGZyb20gXCJ+L3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBsYXllclJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9IGZyb20gXCJ+L3BsYXllci1yZWdpc3RyYXRpb24vcGxheWVyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGxheWVyUmVnaXN0cmF0aW9uQWRkcmVzc0NvbXBvbmVudCB9IGZyb20gXCJ+L3BsYXllci1yZWdpc3RyYXRpb24tYWRkcmVzcy9wbGF5ZXItcmVnaXN0cmF0aW9uLWFkZHJlc3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gXCJ+L21hcC9tYXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhcmRzQ29tcG9uZW50IH0gZnJvbSBcIn4vY2FyZHMvY2FyZHMuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LC8vY29tcG9uZW50OiBQbGF5ZXJSZWdpc3RyYXRpb25Db21wb25lbnQgfSwvLyByZWRpcmVjdFRvOiBcIi9pdGVtc1wiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXHJcbiAgICB7IHBhdGg6IFwicmVnaXN0cmF0aW9uXCIsIGNvbXBvbmVudDogUmVnaXN0cmF0aW9uQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicGxheWVyLXJlZ2lzdGVyXCIsIGNvbXBvbmVudDogUGxheWVyUmVnaXN0cmF0aW9uQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwicGxheWVyLXJlZ2lzdGVyLWFkZHJlc3NcIiwgY29tcG9uZW50OiBQbGF5ZXJSZWdpc3RyYXRpb25BZGRyZXNzQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICdtYXAnLCBjb21wb25lbnQ6IE1hcENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnaXRlbXMnLCBjb21wb25lbnQ6IEl0ZW1zQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiaXRlbS86aWRcIiwgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6IFwiY2FyZHNcIiwgY29tcG9uZW50OiBDYXJkc0NvbXBvbmVudCB9LFxyXG5cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cclxuIl19