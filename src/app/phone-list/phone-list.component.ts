import { Component, OnInit } from '@angular/core';

import { PhoneService } from '../phone.service';
import { Phones } from '../phone';

@Component({
  selector: 'app-phone-list',
  templateUrl:'./phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
  
})
export class PhoneListComponent implements OnInit {
    productList: Phones[] = [];
    phones: Phones[] = [];

  constructor(private phoneService: PhoneService) { 
   
 }

  ngOnInit(): void {
    this.phoneService.getAllProducts().subscribe((products : any)=>{
      this.productList = products;
      this.phones = products;
      })
  
    
  
  }
     
   
    
  

}
