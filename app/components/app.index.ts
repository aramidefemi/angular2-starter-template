import { Component } from '@angular/core';
import { appStrings } from './strings';
// moduleId: module.id,
@Component({
  selector: 'my-app',
  templateUrl: "app/components/views/index-app.html"
})
export class AppIndex { 
	constructor(private strings: appStrings) { 
	}

	private pageTitle : string = this.strings.pageTitle;
	private about : string = this.strings.about;
 }
