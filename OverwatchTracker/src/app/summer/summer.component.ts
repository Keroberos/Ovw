import { Component, OnInit } from '@angular/core';
import { Skin } from '../skin';
import { CompleteInfo } from '../completeinfo';
import { GameItem } from '../gameitem';
import { SummerService } from '../summer.service';

@Component({
  selector: 'app-summer',
  templateUrl: './summer.component.html',
  styleUrls: ['./summer.component.css']
})
export class SummerComponent implements OnInit {

  theData: CompleteInfo;

  constructor(private box: SummerService) {
    this.theData = box.getInfo();    
  }

  ngOnInit() {
  } 

  saveSkin(skin: Skin) {
    if (skin.isChecked == true) {
      this.theData.price = this.theData.price - skin.price;
    }
    if (skin.isChecked == false) {
      this.theData.price = this.theData.price + skin.price;
    }
    skin.isChecked = !skin.isChecked;
    this.box.saveInfo();
  }

  saveItem(theitem: GameItem) {
    if (theitem.isChecked == true) {
      this.theData.price = this.theData.price - theitem.price;
    }
    if (theitem.isChecked == false) {
      this.theData.price = this.theData.price + theitem.price;
    }
    theitem.isChecked = !theitem.isChecked;
    this.box.saveInfo();
  }

  reset() {
    this.box.initEveryting();
    window.location.reload(false);
  } 

}
