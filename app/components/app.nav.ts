import { Component } from '@angular/core';
import { appStrings } from './strings';
@Component({
  selector: 'my-app-nav',
  templateUrl: "app/components/views/index-nav.html"
})
export class AppNav {
	constructor(private strings: appStrings) { 
	}

	private appName: string = this.strings.appName ;


  }