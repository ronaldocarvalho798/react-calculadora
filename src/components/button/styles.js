    import styled from 'styled-components';

    export const ButtonContainer = styled.button`
        padding: 13px 25px;
        border: none;
        background-color: ${({ isEqualsButton }) => isEqualsButton ? 'rgb(87, 182, 254)' : 'rgba(154, 154, 154, 0.19)'};
        border-radius:5px;
        color: #ffff;
        font-size:20px;
        font-weight:500;
        flex: 1;
        cursor:pointer;

        &:hover {
            background-color: ${({ isEqualsButton }) => isEqualsButton ? 'rgba(100, 188, 255, 0.89)' : 'rgba(102, 102, 102, 0.19)'};
        }
    `