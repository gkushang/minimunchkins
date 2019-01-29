import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTileComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselTileComponent;
  let fixture: ComponentFixture<CarouselTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
