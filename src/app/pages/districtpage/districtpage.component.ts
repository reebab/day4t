import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-districtpage',
  templateUrl: './districtpage.component.html',
  styleUrls: ['./districtpage.component.css']
})
export class DistrictpageComponent {
 districts:any
  constructor(private hr:HeroService, private router:Router){ 
  this.districts=this.hr.getData();
  }
  gotohere(id:any)
    {
    localStorage.setItem('id',id)
    this.router.navigate(['/single'])

  }
}



