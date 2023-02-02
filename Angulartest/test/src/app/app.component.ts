import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'test';
  data:any={};
  constructor(private server: ApiService){

}
ngOnInit(){
  // this.data = this.server.getUsers()
  console.log(this.data)
  this.server.getUsers().subscribe(res=>{
    this.data = res;
    console.log(this.data)
  })
}

}

