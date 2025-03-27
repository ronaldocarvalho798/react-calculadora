import Input from '../src/components/input';
import Button from '../src/components/button';
import { Container, Content, Row} from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber(null);
    setOperation(null);
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => (prev === '0' ? num : prev + num));
  };

  const handleSetOperation = (op) => {
    if (currentNumber === '0') return;

    if (firstNumber === null) {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation(op);
    } else {
      // Se já há uma operação, resolve antes de continuar
      handleEquals();
      setOperation(op);
    }
  };

  const handleEquals = () => {
    if (firstNumber !== null && operation !== null && currentNumber !== '0') {
      let result;
      const num1 = Number(firstNumber);
      const num2 = Number(currentNumber);

      switch (operation) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num2 !== 0 ? num1 / num2 : 'Erro';
          break;
        default:
          return;
      }

      setCurrentNumber(String(result));
      setFirstNumber(null);
      setOperation(null);
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="%" />
          <Button label="V" />
          <Button label="C" onClick={handleOnClear} />
          <Button label="/" onClick={() => handleSetOperation('/')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={() => handleSetOperation('*')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => handleSetOperation('-')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={() => handleSetOperation('+')} />
        </Row>
        <Row>
          <Button label="|" />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="=" onClick={handleEquals} isEqualsButton={true}/>
        </Row>
      </Content>
    </Container>
  );
};

export default App;
