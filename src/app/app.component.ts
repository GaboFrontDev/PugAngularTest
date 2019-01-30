import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.pug',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'pug-test';
	printOnConsole(txt: string) {
		console.log(txt);
	}
}
