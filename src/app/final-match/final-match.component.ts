import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-final-match',
  templateUrl: './final-match.component.html',
  styleUrls: ['./final-match.component.css']
})
export class FinalMatchComponent implements OnInit {
matched : ''
matching : any
  constructor() { }

  ngOnInit(): void {
    this.getHeaders()
  }
  getHeaders(){
    this.matched=JSON.parse(localStorage.getItem('matchedKeys'));
    this.matching = JSON.parse(localStorage.getItem('finalMatch'))
    console.log(this.matched);
    
  }

}
