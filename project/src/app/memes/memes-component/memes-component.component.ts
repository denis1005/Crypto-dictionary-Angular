import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMeme } from 'src/app/shared/interfaces/MemeInterface';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes-component',
  templateUrl: './memes-component.component.html',
  styleUrls: ['./memes-component.component.css']
})
export class MemesComponentComponent implements OnInit {

  memesData:IMeme[] | null = null;
    
  constructor(private memeService:MemesService,private router:Router){

  }

  ngOnInit(): void {
     this.memeService.getAll().subscribe({
      next:(memes)=>{
        this.memesData=memes;
     }, error:(err)=>{
      if(err.status=='0'){
        this.router.navigate(['404'])
      }
    }

     })
  }

  clickHandler(memeId:string){
    this.router.navigate(['meme/details',memeId],)
  } 
}
