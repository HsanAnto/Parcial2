export class Equipo {
  country: string;
  goals: number;
  name: string;
  penalties: number;

  constructor(pais: string, goles: number, nombre: string, penales: number) {
    this.country = pais;
    this.goals = goles;
    this.name = nombre;
    this.penalties = penales;
  }
}

