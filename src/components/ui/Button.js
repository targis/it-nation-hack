import styled from 'styled-components'

const Button = styled.button`
    height: ${({ height }) => height || 'auto'};
    width: ${({ width }) => width || 'auto'};
    padding: ${({ padding }) => padding || '21px 46px'};
    background: ${({ bgcolor }) => bgcolor || '#EF5B63'};
    border-radius: 10px;
    border: none;
    cursor: pointer;

    color: ${({ color }) => color || '#FFFFFF'};
    font-family: 'Rubik';
    font-weight: ${({ weight }) => weight || 700};
    font-size: ${({ size }) => size || '18px'};
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
`;


export default Button;
//=======
//   padding: 11px 21px;
//   background: #ef5b63;
//   border-radius: 10px;
//   border: none;
//   cursor: pointer;
//   color: #ffffff;
//   font-family: 'Rubik';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 14px;
//   line-height: 18px;
//   text-align: center;
//   text-transform: uppercase;
//   @media (max-width: 767.98px) {
//     display: ${({ hiddenSm }) => (hiddenSm ? 'none' : 'block')};
//   }
// `

// export default Button
// >>>>>>> dea1bc35233e0b8fecc231ddfded77f1c23e8525
