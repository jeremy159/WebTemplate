import { Component } from '@angular/core';
import { ServiceExample} from './services/example.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ServiceExample]
})
export class AppComponent {

    constructor(private serviceExample : ServiceExample) 
    { 
    }
    title = 'app';

}
