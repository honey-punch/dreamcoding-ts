{
  // Array
  const fruits: string[] = ['π', 'π'];
  const numbers1: number[] = [1, 2]; // μΌκ΄μ± μκ²!β¨
  const numbers2: Array<number> = [1, 2];
  // readonlyλ‘ λ³κ²½ λΆκ°λ₯νκ² λ§λ€ μ μμ
  function printArray(fruits: readonly string[]) {
    
  }
  
  // Tuple
  // μ¬λ¬ νμμ κ°μ§ μ μλ λ°°μ΄
  // μ¬μ©μ κΆμ₯νμ§ μμ π©
  // interface, type alias, classλ‘ λμ²΄ν΄μ μ¬μ©
  let student: [string, number];
  student = ['name', 123];
  student[0] // name
  student[1] // 123
  const [name, age] = student;
  console.log(name);
  
  // tuple μ¬μ© μμ 
  // λ¦¬μ‘νΈ useState()
}