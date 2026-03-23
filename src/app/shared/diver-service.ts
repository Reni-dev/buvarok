import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiverService {
    smartDiverDevices = [
    { 
      id: 1,
      name: "Berta Evelin",
      age: 28,
      gender: "nő",
      height: 170
    },
    { 
      id: 2,
      name: "Tingó Lajos",
      age: 32,
      gender: "férfi",
      height: 183
    },
    { 
      id: 3,
      name: "Csaló Ferenc",
      age: 28,
      gender: "férfi",
      height: 178
    },
    { 
      id: 4,
      name: "Csadi Borbála",
      age: 31,
      gender: "nő",
      height: 168
    },
  ]

  getDivers(){
    return this.smartDiverDevices
  }
}
