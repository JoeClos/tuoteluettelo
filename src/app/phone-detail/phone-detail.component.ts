import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {
  phoneId: string = '';
  phonesList!: any[];
  chosenPhone: any;
  allReady: boolean = false;
  newImgSrc: string = '';
  faCheck = faCheck;
  faMinus = faMinus;



  constructor(private phoneService: PhoneService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getPhone();

    
  }

  getPhone(): void {
    this.phoneId = this.route.snapshot.params['id'];

    this.route.params.subscribe((params) => {
      this.phoneId = params['id'];
    });
    
    this.phoneService.getProduct(this.phoneId).subscribe((data: any) => {
      this.chosenPhone = data;
      this.allReady = true;
    });
  }

  changeImg(event: any) {
    this.newImgSrc = event.target.getAttribute('src');
    document.getElementById('view-phone')?.setAttribute('src', this.newImgSrc);
  }

  goBack(): void {
    this.location.back();
  }
 
}
