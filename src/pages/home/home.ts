import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
    })

export class HomePage {
    public diceType: number;
    public rollValue: number;

    constructor(
    public navCtrl: NavController

) {
    this.diceType = 4;

}

    onDiceButtonClick() {
        this.rollValue = this.rollDice();
    }

    rollDice() {
        var rand = Math.floor((Math.random() * this.diceType) + 1);
        return rand;
    }

    updateDiceType() {
       return this.diceType;
    }
}
