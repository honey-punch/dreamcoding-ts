// import 하는 법
// export default로 내보내면 import해올 때 다른 이름으로 받아올 수 있음
// export는 같은 이름으로만 받아올 수 있으며 이름을 바꾸려면 as를 사용 {print as printMessage}
// export가 많다면
// import * as calculator from './/10-3-module1.js' 이렇게 받아와서
// calculator.add 나 calculator.print 이렇게 사용할 수 있음
import add, {print} from './10-3-module1.js';
console.log(add(1, 2));
print();