import styled from 'styled-components'

const Button = styled.button`
  padding: 11px 21px;
  background: #ef5b63;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 767.98px) {
    display: ${({ hiddenSm }) => (hiddenSm ? 'none' : 'block')};
  }
`

export default Button
