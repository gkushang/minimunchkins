import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() supportingText: string;
  @Input() buttonText: string;
  @Input() targetLink: string;
  @Input() icon: string;
  @Input() imageTitle: string;
  @Input() imageTitleColor: string;
  @Input() backgroundImage: string;
  imageStyles;
  mediaStyle;

  constructor() { }

  ngOnInit() {
    this.mediaStyle = {
      'background': 'url(' + this.backgroundImage + ')',
      'max-width': '100%'
    };

    this.imageStyles = {
      'padding': '0.8rem',
      'color': this.imageTitleColor
    };

  }

}
