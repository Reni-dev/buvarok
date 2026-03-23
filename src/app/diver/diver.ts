import { Component, inject } from '@angular/core';
import { DiverService } from '../shared/diver-service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl  } from '@angular/forms';
import { DiverFilterPipe } from '../shared/diver-filter-pipe';

@Component({
  selector: 'app-diver',
  imports: [
    CommonModule,
    DiverFilterPipe,
    ReactiveFormsModule 
  ],
  templateUrl: './diver.html',
  styleUrl: './diver.css',
  standalone: true,
})
export class Diver {

  diverService = inject(DiverService)
  divers:any 
  searchControl = new FormControl('', { nonNullable: true })

  ngOnInit(){
    this.divers = this.diverService.getDivers()
  }

}
