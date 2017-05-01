import { Section } from './../../models/Section';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-section-page',
  templateUrl: 'section-page.html',
})
export class SectionPage {
  public section:Section;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.section = this.navParams.get("section");
  }

  ionViewDidLoad() {
    console.log(this.section)
    console.log('ionViewDidLoad SectionPage');
  }

}
