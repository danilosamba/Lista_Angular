import { Component, DoCheck, OnInit } from '@angular/core';

import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompras!: Array<Item>;
  itemQueVaiSerEditado!: Item;

  constructor(private ListaService: ListaDeCompraService) { }

  ngOnInit(): void {
      this.listaDeCompras = this.ListaService.getListaDeCompra();
  }

  editarItem(item:Item) {
    this.itemQueVaiSerEditado = item;
  }

  deletarItem(id: number) {
    const index = this.listaDeCompras.findIndex((item) => item.id===id);
    this.listaDeCompras.splice(index, 1);
  }

  ngDoCheck(): void {
    console.log('DoCheck foi chamado.');
    this.ListaService.atualizarLocalStrage();
  }

  limparLista() {
    this.listaDeCompras = [];
  }
  
}
