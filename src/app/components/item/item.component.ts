import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input()
  item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();
  faPen = faPen;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnChanges(): void {
    console.log('OnChanges');
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  ItemComprado(): string {
    if(this.item.comprado) return 'line-through'; 
    else return '';
  }
  
  checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }

  deletarItem() {
    this.emitindoIdParaDeletar.emit(this.item.id);
  }
}
