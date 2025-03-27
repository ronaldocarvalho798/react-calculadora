import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 130px;
    display:flex;
    align-items:flex-end;
    justify-content:flex-end;
    font-size:24px;
    font-family:'Roboto';
    
    input{
        width:100%;
        height:75px;
        background-color: transparent;
        color:#ffff;
        border:none;
        text-align:right;
        font-size: 40px;
        font-weight:500;
        padding: 0 1rem;
        border-radius:5px;

    }
    input:focus {
  outline: 1px solid rgb(149, 178, 237); /* Borda azul */
}
` 