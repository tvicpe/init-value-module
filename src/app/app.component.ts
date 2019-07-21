import {Component, OnInit} from '@angular/core';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ridder';
  data$: Observable<string>;

  private observer: Observer<string>;

  ngOnInit(): void {
    this.data$ = new Observable((observer: Observer<string>) => {
      console.log('OOOO', observer);
      this.observer = observer;
    });

    // this.data$.subscribe((data) => {
    //   console.log('DDDDD', data);
    // });

    setTimeout(() => {
      this.observer.next('test value 123');
    }, 3000);
  }
}
