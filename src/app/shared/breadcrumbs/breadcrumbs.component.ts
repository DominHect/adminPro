import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = "";
  keysTag: string = "";

  constructor( 
    private router: Router,
    public title: Title,
    public meta: Meta
  ) { 
    this.getDataRoute()
      .subscribe( data => {
          console.log(data);
          this.label = data.titulo;
          this.keysTag = data.keywords;
          this.title.setTitle( this.label );

          let metaTagDescription: MetaDefinition = { //añadimos cada meta que queramos de esta manera.
            name: 'description',
            content: this.label
          }
          let metaTagKeywords: MetaDefinition = {
            name: ' keywords',
            content: this.keysTag
          } 

          this.meta.updateTag(metaTagDescription);
          this.meta.updateTag(metaTagKeywords);

        })
   }

   //Obtenemos los datos de las rutas y las filtramos
   getDataRoute() {
    return this.router.events
    .filter( evento => evento instanceof ActivationEnd ) // filtramos aquella en la que aparece el título
    .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null )// filtramos y descartamos
    .map( (evento: ActivationEnd) => evento.snapshot.data )
   }

  ngOnInit() {
  }



}
