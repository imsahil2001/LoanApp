import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'personal',
    component: PersonalComponent,
  },

  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: '',
    component: LandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
