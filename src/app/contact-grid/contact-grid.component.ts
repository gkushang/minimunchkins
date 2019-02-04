import { Component, OnInit } from '@angular/core';
import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

@Component({
  selector: 'app-contact-grid',
  templateUrl: './contact-grid.component.html',
  styleUrls: ['./contact-grid.component.scss']
})
export class ContactGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
