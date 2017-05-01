import { Api } from './../../providers/api';
import { Section } from './../../models/Section';
import { Task } from './../../models/Task';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-task-page',
  templateUrl: 'task-page.html',
})
export class TaskPage {
  public task: Task;
  public section: Section;
  public method: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: Api) {
    this.task = navParams.get("task");
    this.section = navParams.get("section");
    this.method = this.navParams.get("method");    
  }

  submitForm () {
    if(this.method === "update") {
      this.api.updateTask(this.section, this.task).subscribe(()=>{
        this.navCtrl.popToRoot();
      });
    } else {
      this.api.createTask(this.section, this.task).subscribe(()=>{
        this.navCtrl.popToRoot();
      });
    }
  }

}
