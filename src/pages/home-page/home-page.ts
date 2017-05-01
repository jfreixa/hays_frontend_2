import { SectionPage } from './../section-page/section-page';
import { Task } from './../../models/Task';
import { Observable } from 'rxjs/Observable';
import { Api } from './../../providers/api';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { Section } from './../../models/Section';

@IonicPage()
@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html',
})
export class HomePage {
  public sections$: Observable<any[]>;
  constructor(public navCtrl: NavController, private api: Api) {

  }

  ionViewWillEnter () {
    this.sections$ = this.api.getSections();
  }

  completeTask(task: Task) {
    this.api.completeTask(task).subscribe(({state})=>{
      task.state = state;
    });
  }

  deleteTask(task: Task) {
    this.api.deleteTask(task).subscribe((task) => {
      this.sections$ = this.api.getSections();
    });
  }

  deleteSection(section: Section) {
    this.api.deleteSection(section).subscribe((section) => {
      this.sections$ = this.api.getSections();
    });
  }

  editSection(section: Section) {
    this.navCtrl.push(SectionPage, {
      section,
      method: "update"
    })
  }

  createSection() {
    let section = new Section(null, null, null);
    this.navCtrl.push(SectionPage, {
      section,
      method: "create"
    })
  }

}
