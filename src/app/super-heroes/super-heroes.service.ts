import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SuperHeroes } from './super-heroes';
import { CreateOrUpdateSuperHero } from './create-or-update-super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroesService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<SuperHeroes[]>("http://localhost:3000/super-heroes")
  }

  create(superHero: CreateOrUpdateSuperHero) {
    return this.http.post<SuperHeroes>('http://localhost:3000/super-heroes', superHero);
  }

  getById(id: string) {
    return this.http.get<SuperHeroes>(
      `http://localhost:3000/super-heroes/${id}`
    );
  }

  update(id: string, superHero: CreateOrUpdateSuperHero) {
    return this.http.put(`http://localhost:3000/super-heroes/${id}`, superHero);
  }

  delete(id:string){
    return this.http.delete(`http://localhost:3000/super-heroes/${id}`)
  }

}
