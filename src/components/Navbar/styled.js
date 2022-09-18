import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  /* margin-top: 22px; */
  padding: 1.375em 0;
  background-color: ${({ theme }) => theme.colors.bgelement };
`;

const TelLink = styled.a`
  font-family: Rubik, sans-serif;
  font-size: 1em;
  font-weight: 700;
  /* color: var(--font-color); */
  color: ${({ theme }) => theme.colors.text };
  text-decoration: none;
  & :hover {
    color: var(--font-color);
  }
`

const Controls = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > * {
    margin-left: 2em;
    /* & :first-child {
      margin-left: 0;
    } */
    @media (max-width: 540px) {
      margin-left: 0.5em;
    }
  }
`

export { Header, TelLink, Controls }
