import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppIndex }   from './components/app.index';
import { AppNav}   from './components/app.nav';
import { AppFooter}   from './components/app.footer';
import { AppTimeline}   from './components/app.timeline';
import { AppFeedBackForm }   from './components/app.feed-back-form';
import { appStrings }   from './components/strings';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppIndex,AppNav,AppFooter,AppTimeline,AppFeedBackForm  ],
  providers: [ appStrings],
  bootstrap:    [ AppIndex,AppNav,AppFooter ]
})
export class AppModule {  }
