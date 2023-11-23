import { Injectable } from '@angular/core';

// Data model for Gestor
export class Gestor {
  constructor(public name: string, public role: string) {}
}

// Data model for Cliente
export class Cliente {
  constructor(public name: string, public email: string) {}
}

// Data model for Mensaje
export class Mensaje {
  constructor(public content: string, public sender: string, public receiver: string) {}
}

// Data model for Transferencia
export class Transferencia {
  constructor(public amount: number, public senderAccount: string, public receiverAccount: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private gestoresArray: Gestor[] = [];
  private clientesArray: Cliente[] = [];
  private mensajesArray: Mensaje[] = [];
  private transferenciasArray: Transferencia[] = [];

  // Add sample data to the arrays
  constructor() {
    const gestor1 = new Gestor('Gestor1', 'Manager');
    const gestor2 = new Gestor('Gestor2', 'Supervisor');
    const gestor3 = new Gestor('Gestor3', 'Coordinator');

    const cliente1 = new Cliente('Cliente1', 'client1@example.com');
    const cliente2 = new Cliente('Cliente2', 'client2@example.com');
    const cliente3 = new Cliente('Cliente3', 'client3@example.com');

    const mensaje1 = new Mensaje('Hello World!', 'UserA', 'UserB');
    const mensaje2 = new Mensaje('How are you?', 'UserC', 'UserD');
    const mensaje3 = new Mensaje('Nice to meet you!', 'UserE', 'UserF');

    const transferencia1 = new Transferencia(100, 'AccountA', 'AccountB');
    const transferencia2 = new Transferencia(200, 'AccountC', 'AccountD');
    const transferencia3 = new Transferencia(300, 'AccountE', 'AccountF');

    this.gestoresArray = [gestor1, gestor2, gestor3];
    this.clientesArray = [cliente1, cliente2, cliente3];
    this.mensajesArray = [mensaje1, mensaje2, mensaje3];
    this.transferenciasArray = [transferencia1, transferencia2, transferencia3];
  }

  // Get arrays
  getGestoresArray(): Gestor[] {
    return this.gestoresArray;
  }

  getClientesArray(): Cliente[] {
    return this.clientesArray;
  }

  getMensajesArray(): Mensaje[] {
    return this.mensajesArray;
  }

  getTransferenciasArray(): Transferencia[] {
    return this.transferenciasArray;
  }
}
