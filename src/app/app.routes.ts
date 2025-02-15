import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'present-simple',
    loadComponent: () =>
      import('@entities/present-simple').then(
        (m) => m.PresentSimplePageComponent,
      ),
    children: [
      {
        path: 'learn',
        title: 'Present Simple | Learn',
        loadComponent: () =>
          import('@entities/present-simple').then(
            (m) => m.PresentSimpleLearnPageComponent,
          ),
      },
      {
        path: 'exam',
        title: 'Present Simple | Exam',
        loadComponent: () =>
          import('@entities/present-simple').then(
            (m) => m.PresentSimpleExamPageComponent,
          ),
      },
    ],
  },
];
