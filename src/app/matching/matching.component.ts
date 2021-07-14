import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from '../services.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css'],
})
export class MatchingComponent implements OnInit {
  indexChange;
  valueChange;
  test = true;
  selectedValue = "";
  arrayChoices = [];
  j:String

  headerToMatch = new FormControl()
  matchingString = new FormControl()

  matchingArray=[]
  finalMatch:any


  constructor(private service: ServicesService, public dialog: MatDialog , public router : Router) {}

  getMatching = JSON.parse(localStorage.getItem('matching'));
  matchedKeys = JSON.parse(localStorage.getItem('matchedKeys'));

  ngOnInit(): void {
    console.log(this.getMatching);
    console.log(this.matchedKeys);
  }
  confirmChange(e,i) {
    console.log('ttt');
    
      this.matchedKeys.push(
        new FormGroup({
          header: new FormControl(this.getMatching.key),
          matchingString: new FormControl(e),
        })
      );
    while (this.getMatching.length !== 0) {
      this.getMatching.removeAt(0);
    }

  }
  choice(m,i){
    this.matchingArray[i]=m
    console.log(m);
    
  }
  change(){
    this.finalMatch=localStorage.setItem("finalMatch" , JSON.stringify(this.matchingArray , this.matchedKeys))
    this.router.navigate(['/finalMatch'])
    console.log(this.finalMatch);
  }

}
