{
  type ToDo = {
    title: string;
    description: string;
  }

  // Readonly등 다양한 유틸리티 클래스들은 타입스크립트 개발자들이 이미 만들어 놓음
  // 하단처럼 사용하면 됨!
  function display(todo: Readonly<ToDo>) {
    // todo.title = 'jaja'; // error
  }
}