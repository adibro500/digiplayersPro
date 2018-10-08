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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStGO0FBSS9GLDhEQUE0RjtBQVM1RjtJQUdFLHdCQUFvQixtQkFBc0M7UUFBdEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtJQUMxRCxDQUFDO0lBS0Qsd0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyw2UkFBNlIsQ0FBQztJQUN2VCxDQUFDO0lBRUQsc0JBQUksMkNBQWU7YUFBbkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7YUFFRCxVQUFvQixLQUFhO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BSkE7SUFNTSxtQ0FBVSxHQUFqQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLHFDQUFZLEdBQW5CO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVNLHlDQUFnQixHQUF2QjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQXBDa0M7UUFBbEMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQztrQ0FBa0IsZ0NBQXNCOzJEQUFDO0lBTmhFLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzt5Q0FJeUMsd0JBQWlCO09BSC9DLGNBQWMsQ0EyQzFCO0lBQUQscUJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiBcInRrLXNpZGVkcmF3ZXItZ2V0dGluZy1zdGFydGVkXCIsXHJcbiAgdGVtcGxhdGVVcmw6ICdjYXJkcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NhcmRzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuICBwcml2YXRlIF9tYWluQ29udGVudFRleHQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XHJcbiAgcHJpdmF0ZSB0b2dnbGVEcmF3OiBib29sZWFuO1xyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcclxuICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubWFpbkNvbnRlbnRUZXh0ID0gXCJTaWRlRHJhd2VyIGZvciBOYXRpdmVTY3JpcHQgY2FuIGJlIGVhc2lseSBzZXR1cCBpbiB0aGUgSFRNTCBkZWZpbml0aW9uIG9mIHlvdXIgcGFnZSBieSBkZWZpbmluZyB0a0RyYXdlckNvbnRlbnQgYW5kIHRrTWFpbkNvbnRlbnQuIFRoZSBjb21wb25lbnQgaGFzIGEgZGVmYXVsdCB0cmFuc2l0aW9uIGFuZCBwb3NpdGlvbiBhbmQgYWxzbyBleHBvc2VzIG5vdGlmaWNhdGlvbnMgcmVsYXRlZCB0byBjaGFuZ2VzIGluIGl0cyBzdGF0ZS4gU3dpcGUgZnJvbSBsZWZ0IHRvIG9wZW4gc2lkZSBkcmF3ZXIuXCI7XHJcbiAgfVxyXG5cclxuICBnZXQgbWFpbkNvbnRlbnRUZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21haW5Db250ZW50VGV4dDtcclxuICB9XHJcblxyXG4gIHNldCBtYWluQ29udGVudFRleHQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbWFpbkNvbnRlbnRUZXh0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcclxuICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVEcmF3ZXIoKSB7XHJcbiAgICBpZiAodGhpcy50b2dnbGVEcmF3ID09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgICAgdGhpcy50b2dnbGVEcmF3ID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XHJcbiAgICAgIHRoaXMudG9nZ2xlRHJhdyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XHJcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gIH1cclxufSJdfQ==