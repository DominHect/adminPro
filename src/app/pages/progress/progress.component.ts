import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progresoVerde: number = 20;
  progresoAzul: number = 30;

  constructor() { }

  ngOnInit() {
  }

}
