import { Component, OnInit , Input } from '@angular/core';
import { ServicesService } from '../services.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {


    matchSelect = new FormControl()
    indexChange;
    valueChange;
    test=true


  constructor(private service : ServicesService , public dialog: MatDialog) { }


  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  getMatching=JSON.parse( localStorage.getItem('matching'))
  matchedKeys = JSON.parse(localStorage.getItem('matchedKeys'))
  
  ngOnInit(): void {
    console.log(this.getMatching);
    console.log(this.matchedKeys);
  
  }
  changeItem(e) {
    console.log(e.target.value);
    this.valueChange=e.target.value
    if(e.target.value!='default')
    this.test=false
    else this.test=true
  }
  confirmChange(){
    this.getMatching[this.indexChange].key=this.valueChange
    this.matchSelect.setValue("default", {
      onlySelf: true
    })
 
  }

  matchItemGetIndex(j){
    this.indexChange=j   
    this.test=true
  }
}



