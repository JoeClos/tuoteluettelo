import { Component, OnInit } from '@angular/core';

import { PhoneService } from '../phone.service';
import { Phones } from '../phone';

@Component({
  selector: 'app-phone-list',
  templateUrl:'./phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
  
})
export class PhoneListComponent implements OnInit {
    title = 'Phone list';
    productsList!: any[];
    phones!: Phones[];
    term: string = '';
    selectedSort: string = '';
   

  constructor(public phoneService: PhoneService) { 
   
 }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.phoneService.getAllProducts().subscribe(
      (data: any[]) => {
        this.productsList = data;
      },
      (error: any) => {
        console.log('http-error:');
        console.log(error);
      }
    );
  }
  
  sortBy(event: any) {
    this.selectedSort = event.target.value;
    if (this.selectedSort == 'name') {
      this.productsList.sort(function (a, b) {
       return a.name.localeCompare(b.name)
      });
    } else if (this.selectedSort == 'age') {
      this.productsList.sort(function (a, b) {
        return parseInt(a.age) - parseInt(b.age);
      });
    }
    
  }
  
  }
     
   
    
  

