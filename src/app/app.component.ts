import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-jest-spectator';
  public childInputData: string;

  @ViewChild(ChildComponent, { static: true })
  public child: ChildComponent;

  constructor() {
    this.childInputData = 'i was initialized!';
  }

}
