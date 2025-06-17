import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  editando = false;
  textoBtn = 'Salvar Item';

  valorItem!: string;
  @Input() itemParaSerEditado!: Item;

  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void { }

  adicionarItem(){
    this.listaDeCompraService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }

  EditarItem() {
    this.listaDeCompraService.editarItemDaLista(this.itemParaSerEditado,this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = 'Salvar Item';
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['itemParaSerEditado'].currentValue){
        this.editando = true;
        this.textoBtn = 'Editar Item'
        this.valorItem = this.itemParaSerEditado?.nome;
      }
  }
}
