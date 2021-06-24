import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import{ServicesService} from '../services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @ViewChild('fileDropRef', { static: false }) fileDropEl: ElementRef;
  files: any[] = [];


  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  deleteFile(i) {
    if (this.files[i].progress < 100) {
      alert('Upload in progress.');
      return;
    }
    this.files.splice(i, 1);
  }

  uploadFilesSimulator(i) {
    setTimeout(() => {
      if (i === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[i].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(i + 1);
          } else {
            this.files[i].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = '';
    this.uploadFilesSimulator(0);
  }

  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }











  
  constructor(private service :ServicesService , public router : Router ) { }
file: any
UploadFiles:File[]=[];
result :any


  ngOnInit(): void {
  }


upload(event : any){
this.file = event.target.files[0]
console.log(this.file);
}
uploadFile(){
  const formdata = new FormData()
  formdata.append("file",this.file);
  this.service.uploadFile(formdata).subscribe(res =>{
    this.result=res
    console.log(res.matchingResult);
  } , 
  err =>{console.log(err)} ,
  ()=>{
      this.router.navigate(['/importFile']) , localStorage.setItem("matching", JSON.stringify(this.result.matchingResult)) ,
      localStorage.setItem("matchedKeys", JSON.stringify(this.result.matched));}
)}
  }
