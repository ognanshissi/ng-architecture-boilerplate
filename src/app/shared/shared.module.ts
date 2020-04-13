import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TruncatePipe } from './pipes/truncate.pipe';

// Shared module is used inside Feature Module

// what i use to do
// Is create an array and use it in both side imports and exports
const MODULES = [CommonModule];

@NgModule({
  imports: [MODULES],
  exports: [MODULES, TruncatePipe],
  declarations: [TruncatePipe],
})
export class SharedModule {}
