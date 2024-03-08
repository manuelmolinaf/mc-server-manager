import { Component, OnInit } from '@angular/core';
import { RconService } from '../../services/rcon.service';
import { Message } from '../../interfaces/message.interface';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {



  constructor(private rconService:RconService){
  }

  async ngOnInit(): Promise<void> {

    const message:Message = {
      host:'10.0.0.150',
      port: 25575,
      password: '20165468',
      message: 'list'
    }

    this.rconService.sendMessage(message);

    // this.rconService.sendMessage(message).subscribe( res =>{
    //   console.log(res)
    // });
   
   
  }







}
