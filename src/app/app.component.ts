import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'redcarpetpups';

  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.fetchMessages();
  }

  onMessagesFetch(){
    this.fetchMessages();
  }
//create and send post request to server
// with angular app
//create and add some data in the database 
//by sending an HTTP post request to the server

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
//fetch data from the server and display that 
//data in the web application. To fetch data from the server I used GET request 
//and to send a GET request to the server, I used of get() method of HttpClient.
  private fetchMessages(){
    this.http.get('https://redcarpetpups-eacb9-default-rtdb.firebaseio.com/messages.json')
    .pipe(map((res) => {
      const messages = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          messages.push({...res[key], id: key})
        }
        
      }
      return messages;
    }))
    .subscribe((res) => {
      console.log(res);
    })
  }
}
