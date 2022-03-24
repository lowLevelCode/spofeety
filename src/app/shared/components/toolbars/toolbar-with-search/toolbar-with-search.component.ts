import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { MessageStateService } from 'src/app/services/mesage.state.service';

@Component({
  selector: 'app-toolbar-with-search',
  templateUrl: './toolbar-with-search.component.html',
  styleUrls: ['./toolbar-with-search.component.scss']
})
export class ToolbarWithSearchComponent implements OnInit {

  buscarControl = new FormControl();  

  constructor(private readonly _messageStateService: MessageStateService) { }

  ngOnInit(): void {
    this.buscarControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((data: string) => {
        this._messageStateService.sendMessage(data);
      });
  }

}
