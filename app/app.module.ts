import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';




import { AppTimeline}   from './components/app.timeline';
import { AppFeedBackForm }   from './components/app.feed-back-form';
import { appStrings }   from './components/strings';
import { myService }   from './services/app.services';
@NgModule({
  imports:      [ BrowserModule,HttpModule, FormsModule ],
  declarations: [AppTimeline,AppFeedBackForm  ],
  providers: [ appStrings, myService],
  bootstrap:    [ AppTimeline ]
})
export class AppModule {  }
