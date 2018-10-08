"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var CardsComponent = /** @class */ (function () {
    function CardsComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    CardsComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    CardsComponent.prototype.ngOnInit = function () {
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    };
    Object.defineProperty(CardsComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    CardsComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    CardsComponent.prototype.toggleDrawer = function () {
        if (this.toggleDraw == false) {
            this.drawer.showDrawer();
            this.toggleDraw = true;
        }
        else {
            this.drawer.closeDrawer();
            this.toggleDraw = false;
        }
    };
    CardsComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], CardsComponent.prototype, "drawerComponent", void 0);
    CardsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tk-sidedrawer-getting-started",
            templateUrl: 'cards.component.html',
            styleUrls: ['cards.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStGO0FBSS9GLDhEQUE0RjtBQVM1RjtJQUdFLHdCQUFvQixtQkFBc0M7UUFBdEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtJQUMxRCxDQUFDO0lBS0Qsd0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyw2UkFBNlIsQ0FBQztJQUN2VCxDQUFDO0lBRUQsc0JBQUksMkNBQWU7YUFBbkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7YUFFRCxVQUFvQixLQUFhO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BSkE7SUFNTSxtQ0FBVSxHQUFqQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLHFDQUFZLEdBQW5CO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVNLHlDQUFnQixHQUF2QjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQXBDa0M7UUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FBeUIsZ0NBQXNCOzJEQUFDO0lBTnZFLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzt5Q0FJeUMsd0JBQWlCO09BSC9DLGNBQWMsQ0EyQzFCO0lBQUQscUJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiBcInRrLXNpZGVkcmF3ZXItZ2V0dGluZy1zdGFydGVkXCIsXHJcbiAgdGVtcGxhdGVVcmw6ICdjYXJkcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NhcmRzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuICBwcml2YXRlIF9tYWluQ29udGVudFRleHQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xyXG4gIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xyXG4gIHByaXZhdGUgdG9nZ2xlRHJhdzogYm9vbGVhbjtcclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm1haW5Db250ZW50VGV4dCA9IFwiU2lkZURyYXdlciBmb3IgTmF0aXZlU2NyaXB0IGNhbiBiZSBlYXNpbHkgc2V0dXAgaW4gdGhlIEhUTUwgZGVmaW5pdGlvbiBvZiB5b3VyIHBhZ2UgYnkgZGVmaW5pbmcgdGtEcmF3ZXJDb250ZW50IGFuZCB0a01haW5Db250ZW50LiBUaGUgY29tcG9uZW50IGhhcyBhIGRlZmF1bHQgdHJhbnNpdGlvbiBhbmQgcG9zaXRpb24gYW5kIGFsc28gZXhwb3NlcyBub3RpZmljYXRpb25zIHJlbGF0ZWQgdG8gY2hhbmdlcyBpbiBpdHMgc3RhdGUuIFN3aXBlIGZyb20gbGVmdCB0byBvcGVuIHNpZGUgZHJhd2VyLlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1haW5Db250ZW50VGV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9tYWluQ29udGVudFRleHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgbWFpbkNvbnRlbnRUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX21haW5Db250ZW50VGV4dCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XHJcbiAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRHJhd2VyKCkge1xyXG4gICAgaWYgKHRoaXMudG9nZ2xlRHJhdyA9PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICAgIHRoaXMudG9nZ2xlRHJhdyA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gICAgICB0aGlzLnRvZ2dsZURyYXcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICB9XHJcbn0iXX0=