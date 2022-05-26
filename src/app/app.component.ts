import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redcarpetpups';

  constructor(private http: HttpClient){

  }

  onMessageForm(messages: {yName: string, sSubject: string, mMessage: string}){
    console.log(messages);
    const headers = new HttpHeaders({'myHeader': 'redcarpetpus'});
    this.http.post(
      'https://redcarpetpups-eacb9-default-rtdb.firebaseio.com/messages.json', 
      messages,{headers: headers})
    .subscribe((res) => {
      console.log(res);
    });
  }
}
