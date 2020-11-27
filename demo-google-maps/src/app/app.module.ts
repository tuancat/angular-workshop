import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgmCoreModule.forRoot({
            // please get your own API key here:
            // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
            apiKey: 'AIzaSyANrtsPs8i2OTDBbR0sK71X3byxESlPoAw',
            libraries: ['places']
        })
    ],
    declarations: [AppComponent, HelloComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
