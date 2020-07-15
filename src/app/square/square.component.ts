import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <div class="square">
      {{ value }}
    </div>
  `,
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Input() value: 'X' | 'O'; //UI Component  -- DUMB component, does not manage state

  constructor() {}

  ngOnInit() {}
}
