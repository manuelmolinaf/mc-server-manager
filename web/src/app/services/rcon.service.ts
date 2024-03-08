import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root',
})
export class RconService {

  private serverUrl = 'http://localhost:3000'

  constructor(private http:HttpClient) {
  
  }

  public sendMessage(message:Message){
    
    return this.http.post<any>(`${this.serverUrl}/sendMessage`, message);
  }


}
