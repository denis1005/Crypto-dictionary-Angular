import { Component, OnInit } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes-component',
  templateUrl: './memes-component.component.html',
  styleUrls: ['./memes-component.component.css']
})
export class MemesComponentComponent implements OnInit {
    
  constructor(private memeService:MemesService){

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
