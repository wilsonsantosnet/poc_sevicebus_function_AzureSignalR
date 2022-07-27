import { Injectable, EventEmitter, Output } from '@angular/core';
import { HubConnection, HubConnectionBuilder, IHttpConnectionOptions } from '@aspnet/signalr';
//import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { NotificationsService } from 'angular2-notifications';
import { GlobalService, NotificationParameters } from '../../global.service';
import { AuthService } from './auth.service';
import { CacheService } from './cache.service';

@Injectable()
export class SignalRService {

  @Output() notificationReceived: EventEmitter<any> = new EventEmitter();
  @Output() connectionEstablished: EventEmitter<any> = new EventEmitter();

  private _hubConnection: HubConnection;
  private _baseUrl: string

  constructor(private notificationsService: NotificationsService, private auth: AuthService) {
    //this._baseUrl = GlobalService.getEndPoints().DEFAULT + "/notification"
    this._baseUrl = "http://localhost:7071/api";
    //this._baseUrl = "https://seed-func.azurewebsites.net/api";
    

    this.createConnection();
    this.registerOnServerEvents();
    this.startConnection();
  }

  private getUserId() {
    let user = this.auth.currentUser();
    console.log("getUserId()", user);
    if (user.claims)
      return user.claims.email;

  }

  private createConnection() {
    this._hubConnection = new HubConnectionBuilder()
      .withUrl(`${this._baseUrl}?userId=${this.getUserId()}`)
      .build();
  }

  private registerOnServerEvents() {
    this._hubConnection
      .on('ClientNotificationMethod', (user, message) => {

        console.log("ClientNotificationMethod",user)

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
        GlobalService.getNotificationEmitter().emit(new NotificationParameters("signalR", {data:"sampleType"}))
      });
  }

  private startConnection(): void {
    this._hubConnection.start()
      .then(() => {
        console.log('Hub de conexão iniciado');
        this.connectionEstablished.emit(true);
      }).catch(err => {
        console.log('Erro ao realizar conexão do signalR, tentando novamente');
        setTimeout(this.startConnection, 5000);
      });
  }
}
