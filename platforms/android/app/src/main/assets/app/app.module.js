"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var login_component_1 = require("~/login/login.component");
var registration_component_1 = require("~/registration/registration.component");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var player_registration_component_1 = require("~/player-registration/player-registration.component");
var player_registration_address_component_1 = require("~/player-registration-address/player-registration-address.component");
var map_component_1 = require("~/map/map.component");
var cards_component_1 = require("~/cards/cards.component");
var side_drawer_directives_1 = require("nativescript-ui-sidedrawer/angular/side-drawer-directives");
nativescript_ngx_fonticon_1.TNSFontIconService.debug = true;
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                side_drawer_directives_1.NativeScriptUISideDrawerModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './css/font-awesome.min.css',
                }),
            ],
            declarations: [
                app_component_1.AppComponent,
                map_component_1.MapComponent,
                cards_component_1.CardsComponent,
                player_registration_address_component_1.PlayerRegistrationAddressComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                registration_component_1.RegistrationComponent,
                login_component_1.LoginComponent,
                player_registration_component_1.PlayerRegistrationComponent
            ],
            providers: [
                item_service_1.ItemService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsMkRBQXlEO0FBQ3pELGdGQUE4RTtBQUM5RSx1RUFBa0Y7QUFDbEYscUdBQWtHO0FBQ2xHLDZIQUF5SDtBQUN6SCxxREFBbUQ7QUFDbkQsMkRBQXlEO0FBQ3pELG9HQUEyRztBQUMzRyw4Q0FBa0IsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBRWhDLDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsNkVBQTZFO0FBQzdFLHNFQUFzRTtBQWtDdEU7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBakNyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsdURBQThCO2dCQUM5Qiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLElBQUksRUFBRSw0QkFBNEI7aUJBQ3JDLENBQUM7YUFDTDtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCwwRUFBa0M7Z0JBQ2xDLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsOENBQXFCO2dCQUNyQixnQ0FBYztnQkFDZCwyREFBMkI7YUFDOUI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIn4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9IGZyb20gXCJ+L3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlLCBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgUGxheWVyUmVnaXN0cmF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIn4vcGxheWVyLXJlZ2lzdHJhdGlvbi9wbGF5ZXItcmVnaXN0cmF0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJSZWdpc3RyYXRpb25BZGRyZXNzQ29tcG9uZW50IH0gZnJvbSBcIn4vcGxheWVyLXJlZ2lzdHJhdGlvbi1hZGRyZXNzL3BsYXllci1yZWdpc3RyYXRpb24tYWRkcmVzcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSBcIn4vbWFwL21hcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ2FyZHNDb21wb25lbnQgfSBmcm9tIFwifi9jYXJkcy9jYXJkcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXIvc2lkZS1kcmF3ZXItZGlyZWN0aXZlc1wiO1xyXG5UTlNGb250SWNvblNlcnZpY2UuZGVidWcgPSB0cnVlO1xyXG5cclxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXHJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXHJcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgICAgICAgICdmYSc6ICcuL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycsXHJcbiAgICAgICAgfSksXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIE1hcENvbXBvbmVudCxcclxuICAgICAgICBDYXJkc0NvbXBvbmVudCxcclxuICAgICAgICBQbGF5ZXJSZWdpc3RyYXRpb25BZGRyZXNzQ29tcG9uZW50LFxyXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxyXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgUmVnaXN0cmF0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIFBsYXllclJlZ2lzdHJhdGlvbkNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEl0ZW1TZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuLypcclxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxyXG4qL1xyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=