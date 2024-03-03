import { Component, OnInit } from '@angular/core';
import { RconService } from '../../services/rcon.service';
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

   
   
  }







}
