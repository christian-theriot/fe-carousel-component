import { Component, Input, OnInit } from '@angular/core';
import { SourceSet } from '@theriot.dev/fe-image-component';

export declare type CarouselSlide = {
  header: {
    sources?: SourceSet[];
    src?: string;
    alt?: string;
    loading?: boolean;
  };
  body: string;
};

@Component({
  selector: 'fe-carousel-component',
  templateUrl: './fe-carousel-component.component.html',
  styles: []
})
export class FeCarouselComponentComponent implements OnInit {
  @Input() slides: CarouselSlide[] = [];

  constructor() {}

  ngOnInit(): void {}
}
