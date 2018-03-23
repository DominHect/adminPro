import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-promesas",
  templateUrl: "./promesas.component.html",
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {
    let promesa = new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {//si lo añadimos a una variblae podemos usar clearInterval para que pare cuando se cumpla
        contador += 1;
        console.log(contador);
        if (contador == 3) {
          resolve();//le decimos que si se cumple esta condición está resuelto.
          clearInterval(intervalo);
        }
      }, 1000);
    });

    promesa
      .then(() => console.log("Se cumplió"))
      .catch(error => console.log("Error en la promesa", error));
  }
  ngOnInit() {}
}
