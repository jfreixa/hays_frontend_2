import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Section } from './section';

@NgModule({
  declarations: [
    Section,
  ],
  imports: [
    IonicPageModule.forChild(Section),
  ],
  exports: [
    Section
  ]
})
export class SectionModule {}
