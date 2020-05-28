import { Component } from '@angular/core';

@Component({
    selector : 'app-discuss',
    templateUrl : './DiscussionBox.component.html',
    styleUrls : ['./DiscussionBox.component.css']
})
export class DisscussionBoxComponent{
    queryTxt:string;
    query:string;
    counter = 0;

    postTheQuery(queryTxt : string){
        document.getElementById('postedQueries').innerHTML = queryTxt;
    }
}