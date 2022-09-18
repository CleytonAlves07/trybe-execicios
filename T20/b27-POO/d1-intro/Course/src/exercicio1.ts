class School {
  // Atributos
  matricula: number;
  nome: string;
  np1: number;
  np2: number;
  np3: number;
  np4: number;
  nt1: number;
  nt2: number;
  
  //métodos
  constructor(matricula: number,nome: string,np1: number,np2: number,np3: number,np4: number,nt1: number,nt2: number,) {
    this.matricula = matricula;
    this.nome = nome;
    this.np1 = np1;
    this.np2 = np2;
    this.np3 = np3;
    this.np4 = np4;
    this.nt1 = nt1;
    this.nt2 = nt2;
  }

  soma(): void {
    this.np1 + this.np2 + this.np3 + this.np4 + this.nt1 + this.nt2;
  }

  media(): void {
    this.soma() / (this.soma.length -1)
  }
} 