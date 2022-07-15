import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeImageComponentModule } from '@theriot.dev/fe-image-component';
import { FeCarouselComponentComponent } from './fe-carousel-component.component';

@NgModule({
  declarations: [FeCarouselComponentComponent],
  imports: [CommonModule, FeImageComponentModule],
  exports: [FeCarouselComponentComponent]
})
export class FeCarouselComponentModule {}
