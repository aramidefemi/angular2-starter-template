import { Component } from '@angular/core';
import { appStrings } from './strings';
@Component({
  selector: 'my-app-footer',
  templateUrl: "app/components/views/index-footer.html"
})
export class AppFooter {
	constructor(private strings: appStrings) { 
	}

	private appName: string = this.strings.appName ;


  }