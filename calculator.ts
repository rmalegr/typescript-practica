const operations = ['multiplicar', 'add', 'divide'];
const calculator = (a: number, b: number, op: string) => {
  if (!operations.includes(op)) {
    console.log('Operacion no definida');
  }

  if (op == 'multiplicar') return a * b;
  if (op === 'add') return a + b;
  if (op == 'divide') {
    if (b === 0) return 'no se puede divider por cero';
    return a / b;
  }
};

const result = calculator(1, 3, 'add');
console.log(result);
