import { Component, OnInit, OnDestroy} from "@angular/core";
import { Observable, Subscription } from "rxjs/Rx";
import {  } from "rxjs/Subscription";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscription: Subscription;

  constructor() {
    this.suscription = this.regresaObservable().retry(2)
        .subscribe(
          numero => console.log("subs", numero),
          error => console.log("error", error),
          () => console.log("Terminó")
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;

      let intervalo = setInterval(() => {
        contador += 1;

        let salida = {
          valor: contador
        }

        observer.next(salida);

        // if (contador == 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador == 1) {
        //   observer.error("Ha habido un error, el contador marca ");
        // }
      }, 1000);
    }).map( (res: any) => {  return res.valor  } )
      .filter( valor => {
        if( valor % 2 ){
          return true;
        }else{
          return false;
        }
      })
    
    
    ;
  }
}
