import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateOrUpdateSuperHero } from '../create-or-update-super-hero';
import { SuperHeroesService } from '../super-heroes.service';

@Component({
  selector: 'app-edit-super-heroes',
  templateUrl: './edit-super-heroes.component.html',
  styleUrls: ['./edit-super-heroes.component.css']
})
export class EditSuperHeroesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private superHeroService: SuperHeroesService
  ) { }

  itemId: string = '';
  superHeroes: CreateOrUpdateSuperHero = {
    name: '',
    franchise: '',
    imageUrl: '',
    powers: '',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.itemId = param.get('id') ?? '';
      this.getById();
    });
  }

  getById(){
    this.superHeroService.getById(this.itemId)
    .subscribe((data) => {
      this.superHeroes.franchise = data.franchise;
      this.superHeroes.imageUrl = data.imageUrl;
      this.superHeroes.powers = data.powers;
      this.superHeroes.name = data.name;
    } );
  }

  update() {
    this.superHeroService
      .update(this.itemId, this.superHeroes)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

}
