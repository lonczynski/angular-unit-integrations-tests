import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Person } from 'src/app/models/person';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {
  public people: Person[] = [];
  public peopleSubscription: Subscription;

  constructor(private peopleService: PeopleService) {
    this.onPeopleChangeHandler();
  }

  public ngOnDestroy() {
    this.peopleSubscription.unsubscribe();
  }

  private onPeopleChangeHandler() {
    this.peopleSubscription = this.peopleService.people$.subscribe((people) => {
      this.people = people;
    });
  }
}
