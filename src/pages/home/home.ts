import { Task } from './../../models/Task';
import { Observable } from 'rxjs/Observable';
import { Api } from './../../providers/api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
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
      console.log(state)
      task.state = state;
    });
  }

  deleteTask(task: Task) {
    this.api.deleteTask(task).subscribe((task) => {
      this.sections$ = this.api.getSections();
    });
  }

  createTask(task: Task) {
    this.api.createTask(task).subscribe((task) => {
      this.sections$ = this.api.getSections();
    });
  }

}
