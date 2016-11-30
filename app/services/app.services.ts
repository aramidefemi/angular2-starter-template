import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class myService {

private data;


  constructor(private http: Http) { }



   getData(link){
    return this.http.get(link);
        	
  }
  
   postData(link,formData):any{
   	let headers = new Headers();
   	headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(link,formData,{
    headers: headers
});
        	
  }

 

}
