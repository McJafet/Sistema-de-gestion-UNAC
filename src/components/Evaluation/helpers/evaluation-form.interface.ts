interface IInformationUser {
  codigo: string;
  fullname: string;
  facultad: string;
  escuela: string;
  cursos: string;
  evaluations: string;
}

interface IInformationEvaluation {
  evaluation: string[];
}

interface IInformationFormUser {
  codigo: string;
  fullname: string;
  facultad: string[];
  escuela: string[];
  cursos: string[];
  evaluations: string[];
}
