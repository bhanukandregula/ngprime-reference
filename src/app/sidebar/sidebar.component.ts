import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import {MessageService} from 'primeng/api';

import {Product} from './product';
import {ProductService} from './productservice';
import {OverlayPanel} from 'primeng/overlaypanel';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
  providers: [MessageService]

})
export class SidebarComponent {
  item: MenuItem[];
  uploadedFiles: any[] = [];

  products: Product[];
    
  selectedProduct: Product;

 
  constructor(private messageService: MessageService, private router:Router, private primengConfig: PrimeNGConfig) {
   }

  ngOnInit()
  {
    this.primengConfig.ripple = true;
    this.item = [
      {
          label:'File',
          icon:'pi pi-fw pi-file'
  
      },
      {
        label:'Edit',
        icon:'pi pi-fw pi-pencil'
      },
      {
        label:'Users',
        icon:'pi pi-fw pi-user'
      },
      {
        label:'Quit',
        icon:'pi pi-fw pi-power-off'
      }
    ];
  } 


    displayMaximizable: boolean;
    showMaximizableDialog() {
      this.displayMaximizable = true;
  }
  displayMaximumbutton: boolean;
  showMaximizablebutton() {
    this.displayMaximumbutton = true;
}
displayMaximumOverlaybutton: boolean;
showMaximizableOverlaybutton() {
  this.displayMaximumOverlaybutton = true;
}
  
  displayMaximum: boolean;
  showMaximum() {
    this.displayMaximum = true;
  }
  showTopLeft() {
    this.messageService.add({key: 'tl', severity:'info', summary: 'Info', detail: 'Message Content'});
}

showTopCenter() {
    this.messageService.add({key: 'tc', severity:'info', summary: 'Info', detail: 'Message Content'});
}

showBottomCenter() {
    this.messageService.add({key: 'bc', severity:'info', summary: 'Info', detail: 'Message Content'});
}

displayMaximumFile: boolean;
showMaximumFile() {
  this.displayMaximumFile = true;
}
onUpload(event) {
  for(let file of event.files) {
      this.uploadedFiles.push(file);
  }

  this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

onRowSelect(event) {
  this.messageService.add({severity: 'info', summary: 'Product Selected', detail: event.data.name});
}

}