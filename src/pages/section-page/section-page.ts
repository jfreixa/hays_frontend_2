import { Api } from './../../providers/api';
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
  public method: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api : Api) {
    this.section = this.navParams.get("section");
    this.method = this.navParams.get("method");    
  }

  submitForm () {
    if(this.method === "update") {
      this.api.updateSection(this.section).subscribe(()=>{
        this.navCtrl.popToRoot();
      });
    } else {
      this.api.createSection(this.section).subscribe(()=>{
        this.navCtrl.popToRoot();
      });
    }
    
  }

}
