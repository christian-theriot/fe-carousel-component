import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SourceSet } from '@theriot.dev/fe-image-component';

export declare type CarouselSlide = {
  header: {
    sources?: SourceSet[];
    src?: string;
    alt?: string;
    loading?: 'eager' | 'lazy';
  };
  body: string;
};

@Component({
  selector: 'fe-carousel-component',
  templateUrl: './fe-carousel-component.component.html',
  styleUrls: ['./fe-carousel-component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeCarouselComponentComponent implements OnInit {
  @Input() slides: CarouselSlide[] = [];

  constructor() {}

  ngOnInit(): void {}
}
