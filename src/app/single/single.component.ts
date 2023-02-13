import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  single:any
  constructor(private hero:HeroService){}
  ngOnInit():void{
    let id=localStorage.getItem('id')
    console.log(id);
    
    let SingleDataArray=this.hero.getData()
    console.log(SingleDataArray);
    this.single=SingleDataArray.filter(e=>e.title===id)
    console.log(this.single)
  }
}
