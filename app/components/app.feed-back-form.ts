import { Component,Input } from '@angular/core';

import { AppTimeline  } from './app.timeline';
import {  formData } from './strings';


@Component({
  selector: 'my-app-feed-back-form',
  templateUrl: "app/components/views/feed-back-form.html"
})
export class AppFeedBackForm {  
@Input()
public fb : any[] = [];
public rextxt :formData;

	constructor(private timeLine: AppTimeline) { 
	}


  newFeedBack(n): any {

  

  let stuff = {
     name : n.name,
     email : n.email,
    content :  n.content
  };
   
   this.timeLine.setFormData(stuff);
   this.timeLine.postFeeds();
    this.rextxt = this.timeLine.formData;
  }

}