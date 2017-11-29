import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personne= {
    title : 'liste des scientifiques',
    nom : 'Eistein',
    prenom : 'Albert',
    description : ' Il publie sa théorie de la relativité restreinte en 1905 et sa théorie de la gravitation dite relativité ' +
      'générale en 1916. Il contribue largement au développement de la mécanique quantique et de la cosmologie, et reçoit le ' +
      'prix Nobel de physique de 1921 pour son explication de l’effet photoélectrique2. Son travail est notamment connu ' +
      'du grand public pour l’équation E=mc2, qui établit une équivalence entre la matière et l’énergie d’un système',
    travail : 'Genius',
  };

}
