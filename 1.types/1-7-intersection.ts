{
  // Intersection types: AND
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    id: number;
    work: () => void;
  }

  function internWork(person: Student & Worker) {
    console.log(person.name, person.id, person.work());
  }
  internWork({
    name: 'jicheol',
    score: 1,
    id: 123,
    work: () => {},
  })
}