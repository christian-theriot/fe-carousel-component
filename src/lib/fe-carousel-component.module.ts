import { NgModule } from '@angular/core';
import { FeImageComponentModule } from 'dist/theriot.dev/fe-image-component/public-api';
import { FeCarouselComponentComponent } from './fe-carousel-component.component';

@NgModule({
  declarations: [FeCarouselComponentComponent],
  imports: [FeImageComponentModule],
  exports: [FeCarouselComponentComponent],
})
export class FeCarouselComponentModule {}
