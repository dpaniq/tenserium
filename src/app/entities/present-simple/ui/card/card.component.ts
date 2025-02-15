import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-present-simple-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  providers: [],
})
export class CardComponent {
  private readonly router = inject(Router);

  navigateToLearnPage() {
    this.router.navigate(['/', 'present-simple', 'learn']);
  }
}
