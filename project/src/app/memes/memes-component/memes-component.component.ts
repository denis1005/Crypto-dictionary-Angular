import { Component, OnInit } from '@angular/core';
import { IMeme } from 'src/app/shared/interfaces/MemeInterface';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes-component',
  templateUrl: './memes-component.component.html',
  styleUrls: ['./memes-component.component.css']
})
export class MemesComponentComponent implements OnInit {

  memesData:IMeme[] | null = null;
    
  constructor(private memeService:MemesService){

  }

  ngOnInit(): void {
     this.memeService.getAll().subscribe((memes)=>{
        this.memesData=memes;
     })
  }
}
