import { Component } from '@angular/core';
import {Item} from "./classes/item";
import {ItemService} from "./item-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  public lowestLevel: number;
  public highestLevel: number;
  public lowestQuality: number;
  public highestQuality: number;

  itemList: Item[];

  constructor(public itemService: ItemService) {
    this.itemList = [];
    this.lowestLevel = 20;
    this.highestLevel = 25;
    this.highestQuality = 20;
    this.lowestQuality = 25;
  }


  public validate(): void {
    this.itemList = [];
    for (let i = 0; i < 20; i++) {
      this.itemList.push(new Item(this.itemService, this.lowestLevel, this.highestLevel, this.lowestQuality, this.highestQuality));
    }
  }
}
