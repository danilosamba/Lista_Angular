import { Item } from 'src/app/interfaces/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [
    {
      "id": 1,
      "nome": "Queijo prato",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 2,
      "nome": "Leite integral",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 3,
      "nome": "Mamão papaia",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": true
    },
  ]

  constructor() {
    this.listaDeCompra = JSON.parse( localStorage.getItem('items') || '[]' );
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  adicionarItem(valorItem: string):Item {
    const id = this.listaDeCompra.length+1;
    const item: Item = {
      "id": id,
      "nome": valorItem,
      "data": new Date().toLocaleString('pt-BR'),
      "comprado": false
    }
    return item;
  }

  adicionarItemNaLista(itemValor: string) {
    const item = this.adicionarItem(itemValor);
    this.listaDeCompra.push(item);
    this.atualizarLocalStrage();
  }

  editarItemDaLista(itemAntigo: Item, NomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: NomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }
    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id)-1,1,itemEditado);
    this.atualizarLocalStrage(); 
  }

  atualizarLocalStrage() {
    localStorage.setItem('items',JSON.stringify(this.listaDeCompra));
  }
}
