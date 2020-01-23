import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input()
  public inputData: string;

  @Output()
  public changed = new EventEmitter<boolean>();

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
