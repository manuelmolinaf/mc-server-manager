import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root',
})
export class RconService {

  private serverUrl = 'localhost:3000/api'

  constructor(private http:HttpClient) {
  
  }

  public sendMessage(message:Message){
    
    return this.http.post<string>(`${this.serverUrl}/sendMessage`, message).subscribe(res=> console.log(res));
  }




}
