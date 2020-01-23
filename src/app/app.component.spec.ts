import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ChildComponent } from './child/child.component';


describe('AppComponent', () => {
  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [
      ChildComponent
      // MockComponent(ChildComponent)
    ]
  });

  let spectator: Spectator<AppComponent>;
  beforeEach(() => spectator = createComponent());

  it('should create the app', () => {
    const app = spectator.component;
    expect(app).toBeTruthy();

    const service = spectator.query<DataService>(ChildComponent, { read: DataService });
    console.log(service);
  });

  it('should render the app', () => {
    expect(spectator.query('span.pub'))
      .toHaveText('child component service has value: 1');
    expect(spectator.query('span.sub'))
      .toHaveText('child component service has subValue: 999');
  });
});
