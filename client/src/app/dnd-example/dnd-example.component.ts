import { Component } from '@angular/core';

@Component({
    selector: 'dnd-example',
    templateUrl: './dnd-example.component.html',
    styleUrls: ['./dnd-example.component.css']
})
export class DndExampleComponent
{
    boxes = [   { id: 'box1', color: '#5bc0de' },
                { id: 'box2', color: '#ff6666' },
                { id: 'box3', color: '#5cb85c' },
                { id: 'box4', color: '#000099' },
                { id: 'box5', color: '#333333' },
                { id: 'box6', color: '#428bca' },
                { id: 'box7', color: '#999999' },
                { id: 'box8', color: '#cc0033' }];

    onDrop(data: any)
    {
        let draggedBox: any;
        let index = -1;

        for (let i = 0; i < this.boxes.length; i++)
        {
            if (this.boxes[i].id === data.draggedId)
            {
                draggedBox = this.boxes[i];
                index = i;
                break;
            }
        }

        let newIndex = -1;
        for (let i = 0; i < this.boxes.length; i++)
        {
            if (this.boxes[i].id === data.targetId)
            {
                newIndex = i;
                break;
            }
        }

        if (newIndex > -1)
        {
            if (index > -1)
            {
                this.boxes.splice(index, 1);
            }
            this.boxes.splice(newIndex, 0, draggedBox);
        }
    }
}