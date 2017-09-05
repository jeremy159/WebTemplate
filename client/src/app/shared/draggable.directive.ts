import { Input, HostListener, Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[myDrag]'
})
export class DraggableDirective
{
    @HostBinding('draggable')
    get draggable()
    {
        return true;
    };

    @HostListener('dragstart', ['$event'])
    onDragStart(event)
    {
        event.dataTransfer.setData('objectID', JSON.stringify(event.target.getAttribute('id')));
    };
}