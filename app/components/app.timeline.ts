import { Component, OnInit } from '@angular/core';
import { myService } from '../services/app.services';
import { formData } from './strings';
@Component({
  selector: 'my-app-timeline',
  templateUrl: "app/components/views/timeline.html"
})
export class AppTimeline implements OnInit {

  constructor(private myService: myService) {
  }


  private feeds = [];
  private msg: string;
  private getFeedsLink: string = 'http://localhost/urangle/api/feed-back.php?type=get';
  private postFeedsLink: string = 'http://localhost/urangle/api/feed-back.php?type=new';
  public formData : formData;
  getFeeds(): void {

    this.myService.getData(this.getFeedsLink).subscribe(res => {
      var myRes = res.json();
      this.feeds = myRes
    });
  }
  setFormData(val: formData): void {
    this.formData = val;
  }

  postFeeds(): void {

    this.myService.postData(this.postFeedsLink, this.formData).subscribe(res => {
      this.getFeeds();
    });
  }

  ngOnInit(): void {
    this.getFeeds();
  }

}
