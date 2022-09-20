import styled from 'styled-components'

const Button = styled.button`
  display: ${({ display }) => display || 'flex'};
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  padding: ${({ padding }) => padding || '11px 21px'};
  margin: ${({ margin }) => margin || null};
  background: ${({ bgcolor }) => bgcolor || '#EF5B63'};
  border-radius: 10px;
  border: ${({ border }) => border || 'none'};
  cursor: pointer;
  color: ${({ color }) => color || '#FFFFFF'};
  font-family: 'Rubik';
  font-weight: ${({ weight }) => weight || 700};
  font-size: ${({ size }) => size || '18px'};
  line-height: ${({ lheight }) => lheight || '100%'};
  text-align: center;
  text-transform: uppercase;
  transition: all .3s linear; 
  :hover {
    /* background-color: #F5F6F9;
    border: none;
    color: #FFFFFF; */
    transform: scale(102%);
    box-shadow: 0px 0px 5px 4px rgba(230, 28, 58, 0.2);
  }
  @media (max-width: 767.98px) {
    display: ${({ hiddenSm }) => (hiddenSm ? 'none' : 'inline-block')};
  }
`


export default Button


