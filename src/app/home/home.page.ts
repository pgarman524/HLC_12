import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  productos: any;
  filtro: string = '';

  constructor(private httpClient: HttpClient) {

    this.productos = this.httpClient.get('https://raw.githubusercontent.com/pgarman524/JSON_HLC/refs/heads/master/productos.json').pipe(
      map((res: any) => res)  
    );
  }
}