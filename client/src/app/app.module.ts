import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DndExampleComponent } from './dnd-example/dnd-example.component'

import { DraggableDirective } from './shared/draggable.directive';
import { DropTargetDirective } from './shared/drop-target.directive';

@NgModule({
    declarations: [
        AppComponent,
        DndExampleComponent,
        DraggableDirective,
        DropTargetDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
