import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private router: Router) {}

  public navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
