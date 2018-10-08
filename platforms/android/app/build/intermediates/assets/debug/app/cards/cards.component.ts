import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  moduleId: module.id,
  selector: "tk-sidedrawer-getting-started",
  templateUrl: 'cards.component.html',
  styleUrls: ['cards.component.scss']
})
export class CardsComponent implements AfterViewInit, OnInit {
  private _mainContentText: string;

  constructor(private _changeDetectionRef: ChangeDetectorRef) {
  }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;
  private toggleDraw: boolean;
  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  ngOnInit() {
    this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
  }

  get mainContentText() {
    return this._mainContentText;
  }

  set mainContentText(value: string) {
    this._mainContentText = value;
  }

  public openDrawer() {
    this.drawer.showDrawer();
  }

  public toggleDrawer() {
    if (this.toggleDraw == false) {
      this.drawer.showDrawer();
      this.toggleDraw = true;
    } else {
      this.drawer.closeDrawer();
      this.toggleDraw = false;
    }
  }

  public onCloseDrawerTap() {
    this.drawer.closeDrawer();
  }
}