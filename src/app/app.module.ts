import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoot} from './app.component'

@NgModule({
    bootstrap:[AppRoot],
    imports:[BrowserModule,FormsModule],
    declarations:[AppRoot],
})
export class AppModule{}