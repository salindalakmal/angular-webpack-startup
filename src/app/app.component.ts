import {Component} from "@angular/core";

@Component({ 
    selector: "app-root",
    templateUrl: __dirname + 'src/app/app.component.html',
    styleUrls: [ __dirname + "src/app/app.component.css" ],
})
export class HelloComponent {
    title = 'Tour of Heroes';
}