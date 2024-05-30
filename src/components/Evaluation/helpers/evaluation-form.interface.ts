interface IInformationUser {
  codigo: string;
  fullname: string;
  facultad: string;
  escuela: string;
  cursos: string;
  evaluations: string;
}

interface IInformationEvaluation {
  evaluation: Evaluations[];
}

interface IInformationFormUser {
  codigo: string;
  fullname: string;
  facultad: string[];
  escuela: string[];
  cursos: string[];
  evaluations: string[];
}

interface Evaluations {
  name: string;
  items: Item[];
}

interface Item {
  id: string;
  status: string;
}
