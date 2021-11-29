import { Component } from '@angular/core';
import { map, Observable, shareReplay, timer } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Book Rating!';

  time: Observable<Date> = timer(0, 1000).pipe(
    map(() => new Date()),
    shareReplay(1)
  );
  
  // https://stackoverflow.com/questions/54289078/display-time-clock-in-angular
}
