import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FeImageComponentModule } from '@theriot.dev/fe-image-component';

import { FeCarouselComponentComponent } from './fe-carousel-component.component';

describe('FeCarouselComponentComponent', () => {
  let component: FeCarouselComponentComponent;
  let fixture: ComponentFixture<FeCarouselComponentComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeCarouselComponentComponent],
      imports: [CommonModule, FeImageComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FeCarouselComponentComponent);
    de = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const carousel = de.query(By.css('.component-carousel'));
    const container = carousel.query(By.css('.carousel'));
    const prev = carousel.query(By.css('.indicator-prev-btn'));
    const next = carousel.query(By.css('.indicator-next-btn'));

    expect(container.children.length).toBe(2);
    expect(prev.nativeElement).toBeDefined();
    expect(next.nativeElement).toBeDefined();
  });

  it('can create with slides', () => {
    component.slides = [
      {
        header: { src: '/mock' },
        body: 'item 1'
      },
      {
        header: { src: '/mock' },
        body: 'item 2'
      },
      {
        header: { src: '/mock' },
        body: 'item 3'
      }
    ];
    fixture.detectChanges();

    const carousel = de.query(By.css('.component-carousel .carousel'));
    const cards = carousel.queryAll(By.css('.card'));
    const headers = cards.map(card => card.query(By.css('.card-header > fe-image-component')));
    const body = cards.map(card => card.query(By.css('.card-body')));
    const prev = carousel.query(By.css('.indicator-prev-btn'));
    const next = carousel.query(By.css('.indicator-next-btn'));

    expect(cards.length).toBe(3);
    expect(headers.length).toBe(3);
    expect(body.length).toBe(3);
    expect(prev.nativeElement).toBeDefined();
    expect(next.nativeElement).toBeDefined();
  });
});
