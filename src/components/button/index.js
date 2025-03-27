import {ButtonContainer} from './styles';


const Button = ({label, onClick,  isEqualsButton = false}) => {
    return (
      <ButtonContainer onClick={onClick} isEqualsButton={isEqualsButton}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  