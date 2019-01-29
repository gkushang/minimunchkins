import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';
import { slider } from './carausel.tile.animation';

@Component({
  selector: 'app-carousel-tile',
  templateUrl: './carousel.tile.component.html',
  styleUrls: ['./carousel.tile.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselTileComponent implements OnInit {
  @Input() name: string;
  imgags = [
    'assets/daycare/1.jpg',
    'assets/daycare/2.jpg',
    'assets/daycare/3.jpg',
    'assets/daycare/4.jpg',
    'assets/daycare/5.jpg',
    'assets/daycare/6.jpg',
    'assets/daycare/7.jpg',
  ];

  public carouselTileItems$: Observable<number[]>;

  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 5, all: 0 },
    speed: 550,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 6500 },
    animation: 'lazy'
  };
  tempData: any[];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    let n = 0;
    this.tempData = [];
    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(this.imgags.length),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.imgags[n++]
        ]);
        return data;
      })
    );
  }
}
