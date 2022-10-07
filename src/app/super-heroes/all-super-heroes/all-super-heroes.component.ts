import { Component, OnInit } from '@angular/core';
import { SuperHeroes } from '../super-heroes';
import { SuperHeroesService } from '../super-heroes.service';

declare var window: any;

@Component({
  selector: 'app-all-super-heroes',
  templateUrl: './all-super-heroes.component.html',
  styleUrls: ['./all-super-heroes.component.css']
})
export class AllSuperHeroesComponent implements OnInit {

  constructor(private superHeroService: SuperHeroesService) { }

  superHeroes: SuperHeroes[] = [];
  itemIdToDelete: string = '';
  deleteModal: any;

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(document.getElementById('deleteModal'));

    this.getAll();
  }

  getAll() {
    this.superHeroService.get()
      .subscribe((data) => {
        this.superHeroes = data;
      });
  }

  openDeleteModal(id: string) {
    this.itemIdToDelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.superHeroService.delete(this.itemIdToDelete).subscribe(() => {
      this.superHeroes = this.superHeroes.filter(
        (_) => _._id !== this.itemIdToDelete
      );
      this.deleteModal.hide();
    });
  }

}
