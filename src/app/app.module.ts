import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HelloComponent} from "./app.component";
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
    bootstrap:    [HelloComponent],
    declarations: [HelloComponent, HeroesComponent],
    imports:      [BrowserModule, FormsModule ],
})
export class AppModule {}