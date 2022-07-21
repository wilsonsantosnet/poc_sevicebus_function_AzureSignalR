import { Injectable, EventEmitter, Output } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
//import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { NotificationsService } from 'angular2-notifications';
import { GlobalService } from '../../global.service';

@Injectable()
export class SignalRService {

  @Output() notificationReceived: EventEmitter<any> = new EventEmitter();
  @Output() connectionEstablished: EventEmitter<any> = new EventEmitter();

  private _hubConnection: HubConnection;
  private _baseUrl: string 

  constructor(private notificationsService: NotificationsService) {
    //this._baseUrl = GlobalService.getEndPoints().DEFAULT + "/notification"
    this._baseUrl = "http://localhost:7071/api";

    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

  private createConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(this._baseUrl)
      .build();
  }

  private registerOnServerEvents() {
    this._hubConnection
      .on('ClientNotificationMethod', (user,message) => {

        this.notificationsService.success(
          'Sucesso',
          message,
          {
            timeOut: 1000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: false,
          }
        )
        this.notificationReceived.emit(message);
      });
  }

  private startConnection(): void {
    this._hubConnection
      .start()
      .then(() => {
        console.log('Hub de conexão iniciado');
        this.connectionEstablished.emit(true);
      }).catch(err => {
        console.log('Erro ao realizar conexão do signalR, tentando novamente');
        setTimeout(this.startConnection, 5000);
      });
  }
}
