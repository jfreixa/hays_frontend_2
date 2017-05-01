import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SectionPage } from './section-page';

@NgModule({
  declarations: [
    SectionPage,
  ],
  imports: [
    IonicPageModule.forChild(SectionPage),
  ],
  exports: [
    SectionPage
  ]
})
export class SectionPageModule {}
