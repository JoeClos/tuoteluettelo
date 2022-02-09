import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {


  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
    
  }

 
}
