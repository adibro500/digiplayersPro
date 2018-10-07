"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
// Important - must register MapView plugin in order to use in Angular templates
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.latitude = -33.86;
        this.longitude = 151.20;
        this.zoom = 8;
        this.minZoom = 0;
        this.maxZoom = 22;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
    }
    //Map events
    MapComponent.prototype.onMapReady = function (event) {
        console.log('Map Ready');
        this.mapView = event.object;
        console.log("Setting a marker...");
        var marker = new nativescript_google_maps_sdk_1.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(-33.86, 151.20);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = { index: 1 };
        this.mapView.addMarker(marker);
    };
    MapComponent.prototype.onCoordinateTapped = function (args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    };
    MapComponent.prototype.onMarkerEvent = function (args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    };
    MapComponent.prototype.onCameraChanged = function (args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    };
    MapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map',
            template: "\n  <GridLayout>\n    <MapView #mapView [latitude]=\"latitude\" [longitude]=\"longitude\"\n             [zoom]=\"zoom\" [minZoom]=\"minZoom\" [maxZoom]=\"maxZoom\" [bearing]=\"bearing\"\n             [tilt]=\"tilt\" i-padding=\"50,50,50,50\" [padding]=\"padding\" (mapReady)=\"onMapReady($event)\"\n             (markerSelect)=\"onMarkerEvent($event)\" (markerBeginDragging)=\"onMarkerEvent($event)\"\n             (markerEndDragging)=\"onMarkerEvent($event)\" (markerDrag)=\"onMarkerEvent($event)\"\n             (markerInfoWindowTapped)=\"onMarkerEvent($event)\" (coordinateTapped)=\"onCoordinateTapped($event)\"\n             (cameraChanged)=\"onCameraChanged($event)\"></MapView>\n</GridLayout>\n  ",
            styleUrls: ['map.component.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUQ7QUFDckQsMEVBQXdFO0FBQ3hFLDZFQUF5RTtBQUd6RSxnRkFBZ0Y7QUFDaEYsa0NBQWUsQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLHNDQUFPLEVBQVAsQ0FBTyxDQUFDLENBQUM7QUFrQjFDO0lBY0U7UUFaQSxhQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDbEIsY0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBTTNCLENBQUM7SUFFRCxZQUFZO0lBQ1osaUNBQVUsR0FBVixVQUFXLEtBQUs7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFbkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQ0FBTSxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHlDQUFrQixHQUFsQixVQUFtQixJQUFJO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9HLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsSUFBSTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTO2NBQzFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztjQUN0QyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUE5Q1UsWUFBWTtRQWhCeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxnc0JBVVQ7WUFDRCxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDOztPQUNXLFlBQVksQ0FnRHhCO0lBQUQsbUJBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xyXG5pbXBvcnQgeyBNYXBWaWV3LCBNYXJrZXIsIFBvc2l0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdvb2dsZS1tYXBzLXNkayc7XHJcblxyXG5cclxuLy8gSW1wb3J0YW50IC0gbXVzdCByZWdpc3RlciBNYXBWaWV3IHBsdWdpbiBpbiBvcmRlciB0byB1c2UgaW4gQW5ndWxhciB0ZW1wbGF0ZXNcclxucmVnaXN0ZXJFbGVtZW50KCdNYXBWaWV3JywgKCkgPT4gTWFwVmlldyk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbWFwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxHcmlkTGF5b3V0PlxyXG4gICAgPE1hcFZpZXcgI21hcFZpZXcgW2xhdGl0dWRlXT1cImxhdGl0dWRlXCIgW2xvbmdpdHVkZV09XCJsb25naXR1ZGVcIlxyXG4gICAgICAgICAgICAgW3pvb21dPVwiem9vbVwiIFttaW5ab29tXT1cIm1pblpvb21cIiBbbWF4Wm9vbV09XCJtYXhab29tXCIgW2JlYXJpbmddPVwiYmVhcmluZ1wiXHJcbiAgICAgICAgICAgICBbdGlsdF09XCJ0aWx0XCIgaS1wYWRkaW5nPVwiNTAsNTAsNTAsNTBcIiBbcGFkZGluZ109XCJwYWRkaW5nXCIgKG1hcFJlYWR5KT1cIm9uTWFwUmVhZHkoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAobWFya2VyU2VsZWN0KT1cIm9uTWFya2VyRXZlbnQoJGV2ZW50KVwiIChtYXJrZXJCZWdpbkRyYWdnaW5nKT1cIm9uTWFya2VyRXZlbnQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAobWFya2VyRW5kRHJhZ2dpbmcpPVwib25NYXJrZXJFdmVudCgkZXZlbnQpXCIgKG1hcmtlckRyYWcpPVwib25NYXJrZXJFdmVudCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgIChtYXJrZXJJbmZvV2luZG93VGFwcGVkKT1cIm9uTWFya2VyRXZlbnQoJGV2ZW50KVwiIChjb29yZGluYXRlVGFwcGVkKT1cIm9uQ29vcmRpbmF0ZVRhcHBlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgIChjYW1lcmFDaGFuZ2VkKT1cIm9uQ2FtZXJhQ2hhbmdlZCgkZXZlbnQpXCI+PC9NYXBWaWV3PlxyXG48L0dyaWRMYXlvdXQ+XHJcbiAgYCxcclxuICBzdHlsZVVybHM6IFsnbWFwLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQge1xyXG5cclxuICBsYXRpdHVkZSA9IC0zMy44NjtcclxuICBsb25naXR1ZGUgPSAxNTEuMjA7XHJcbiAgem9vbSA9IDg7XHJcbiAgbWluWm9vbSA9IDA7XHJcbiAgbWF4Wm9vbSA9IDIyO1xyXG4gIGJlYXJpbmcgPSAwO1xyXG4gIHRpbHQgPSAwO1xyXG4gIHBhZGRpbmcgPSBbNDAsIDQwLCA0MCwgNDBdO1xyXG4gIG1hcFZpZXc6IE1hcFZpZXc7XHJcblxyXG4gIGxhc3RDYW1lcmE6IFN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICAvL01hcCBldmVudHNcclxuICBvbk1hcFJlYWR5KGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZygnTWFwIFJlYWR5Jyk7XHJcblxyXG4gICAgdGhpcy5tYXBWaWV3ID0gZXZlbnQub2JqZWN0O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyBhIG1hcmtlci4uLlwiKTtcclxuXHJcbiAgICB2YXIgbWFya2VyID0gbmV3IE1hcmtlcigpO1xyXG4gICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKC0zMy44NiwgMTUxLjIwKTtcclxuICAgIG1hcmtlci50aXRsZSA9IFwiU3lkbmV5XCI7XHJcbiAgICBtYXJrZXIuc25pcHBldCA9IFwiQXVzdHJhbGlhXCI7XHJcbiAgICBtYXJrZXIudXNlckRhdGEgPSB7IGluZGV4OiAxIH07XHJcbiAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XHJcbiAgfVxyXG5cclxuICBvbkNvb3JkaW5hdGVUYXBwZWQoYXJncykge1xyXG4gICAgY29uc29sZS5sb2coXCJDb29yZGluYXRlIFRhcHBlZCwgTGF0OiBcIiArIGFyZ3MucG9zaXRpb24ubGF0aXR1ZGUgKyBcIiwgTG9uOiBcIiArIGFyZ3MucG9zaXRpb24ubG9uZ2l0dWRlLCBhcmdzKTtcclxuICB9XHJcblxyXG4gIG9uTWFya2VyRXZlbnQoYXJncykge1xyXG4gICAgY29uc29sZS5sb2coXCJNYXJrZXIgRXZlbnQ6ICdcIiArIGFyZ3MuZXZlbnROYW1lXHJcbiAgICAgICsgXCInIHRyaWdnZXJlZCBvbjogXCIgKyBhcmdzLm1hcmtlci50aXRsZVxyXG4gICAgICArIFwiLCBMYXQ6IFwiICsgYXJncy5tYXJrZXIucG9zaXRpb24ubGF0aXR1ZGUgKyBcIiwgTG9uOiBcIiArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZSwgYXJncyk7XHJcbiAgfVxyXG5cclxuICBvbkNhbWVyYUNoYW5nZWQoYXJncykge1xyXG4gICAgY29uc29sZS5sb2coXCJDYW1lcmEgY2hhbmdlZDogXCIgKyBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSksIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSA9PT0gdGhpcy5sYXN0Q2FtZXJhKTtcclxuICAgIHRoaXMubGFzdENhbWVyYSA9IEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKTtcclxuICB9XHJcblxyXG59Il19