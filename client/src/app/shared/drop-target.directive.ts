import { Output, EventEmitter, Input, HostListener, Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[myDrop]'
})
export class DropTargetDirective
{
    @Output() myDrop = new EventEmitter();

    @HostListener('dragenter', ['$event'])
    @HostListener('dragover', ['$event'])
    onDragOver(event)
    {
        event.preventDefault();
    };

    @HostListener('drop', ['$event'])
    onDrop(event)
    {
        event.preventDefault();
        const draggedId = JSON.parse(event.dataTransfer.getData('objectID'));

        let targetId = event.target.getAttribute('id');
        if (targetId !== draggedId)
        {
            this.myDrop.next({ draggedId: draggedId, targetId: targetId });
        }
    };
}