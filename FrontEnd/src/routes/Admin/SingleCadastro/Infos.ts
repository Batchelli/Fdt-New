export interface Trilha {
    readonly value: string;
    readonly label: string;
  }

  export const Trilhas: readonly Trilha[] = [
      {value:"Líder", label:'Trilha Lider'},
      {value:"Engenharia", label:'Trilha Engenharia'},
      {value:"Qualidade", label:'Trilha Qualidade'},
    ]