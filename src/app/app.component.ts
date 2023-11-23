import { Component } from '@angular/core';
import { DataService, Gestor, Cliente, Mensaje, Transferencia } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Angular App</h1>
      <button (click)="getData()">Get Data</button>
      <div *ngIf="dataLoaded">
        <h2>Gestores:</h2>
        <ul>
          <li *ngFor="let gestor of gestoresArray">{{ gestor.name }} - {{ gestor.role }}</li>
        </ul>
        <h2>Clientes:</h2>
        <ul>
          <li *ngFor="let cliente of clientesArray">{{ cliente.name }} - {{ cliente.email }}</li>
        </ul>
        <h2>Mensajes:</h2>
        <ul>
          <li *ngFor="let mensaje of mensajesArray">{{ mensaje.content }} - {{ mensaje.sender }} - {{ mensaje.receiver }}</li>
        </ul>
        <h2>Transferencias:</h2>
        <ul>
          <li *ngFor="let transferencia of transferenciasArray">{{ transferencia.amount }} - {{ transferencia.senderAccount }} - {{ transferencia.receiverAccount }}</li>
        </ul>
      </div>
    </div>
  `
})
export class AppComponent {
  gestoresArray: Gestor[] = [];
  clientesArray: Cliente[] = [];
  mensajesArray: Mensaje[] = [];
  transferenciasArray: Transferencia[] = [];
  dataLoaded: boolean = false;

  constructor(private dataService: DataService) {}

  getData() {
    this.gestoresArray = this.dataService.getGestoresArray();
    this.clientesArray = this.dataService.getClientesArray();
    this.mensajesArray = this.dataService.getMensajesArray();
    this.transferenciasArray = this.dataService.getTransferenciasArray();
    this.dataLoaded = true;
  }
}

