import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtprogress') txtprogress: ElementRef;

  @Input() leyenda: string = "Leyenda";
  @Input() progreso: number;

  //Se cambia el nombre de la variable en ( nuevo nombre ) - también es posible en input
  @Output("actualizaValor") cambioValor: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {}

  //Input
  onChanges(newValue: number) { 

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.txtprogress.nativeElement.value = this.progreso;

    this.txtprogress.nativeElement.foucus();

    this.cambioValor.emit(this.progreso);
  }

  cambiaValor(val) {
    console.log(val);
    if (this.progreso >= 100 && val > 0) {
      return;
    }
    if (this.progreso <= 0 && val < 0) {
      return;
    }
    this.progreso = this.progreso + val;

    this.cambioValor.emit(this.progreso);
    
  }
}
