import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateOrUpdateSuperHero } from '../create-or-update-super-hero';
import { SuperHeroesService } from '../super-heroes.service';

@Component({
  selector: 'app-add-super-heroes',
  templateUrl: './add-super-heroes.component.html',
  styleUrls: ['./add-super-heroes.component.css']
})
export class AddSuperHeroesComponent implements OnInit {

  constructor(
    private superHeroesService: SuperHeroesService,
    private router: Router
  ) { }

  superHeroes: CreateOrUpdateSuperHero = {
    name: '',
    franchise: '',
    imageUrl: '',
    powers: '',
  };

  ngOnInit(): void { }

  create() {
    this.superHeroesService.create(this.superHeroes).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
