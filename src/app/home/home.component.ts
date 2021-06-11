import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{ServicesService} from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private service :ServicesService) { }
file: any
UploadFiles:File[]=[];
  ngOnInit(): void {
  }

upload(event : any){
this.file = event.target.files[0]
console.log(this.file);

}
uploadFile(){
  const formdata = new FormData()
  formdata.append("file",this.file, this.file.name);
  
 
  this.service.uploadFile(formdata).subscribe(d =>{console.log(d);
  } , err =>{console.log(err);
  })

}
}
