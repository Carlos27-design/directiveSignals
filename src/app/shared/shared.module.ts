import { CustomLabelDirective } from './directives/custom-label.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomLabelDirective],
  imports: [CommonModule],
  exports: [CustomLabelDirective],
})
export class SharedModule {}
