import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FormContainer = styled.div`
  width: 100%;
  max-width: 509px;
  padding: 26px 36px;
  background: ${({ light }) => (light ? 'none' : '#232f3c')};
  border-radius: 20px;
  @media (max-width: 576px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const TitleForm = styled.h3`
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 300;
  font-size: 42px;
  line-height: 1.3;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #333333;
  white-space: nowrap;
  @media (max-width: 576px) {
    font-size: 34px;
  }

  & > b {
    font-weight: 700;
  }
`

const TitleTextModal = styled.p`
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #333333;
`

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`

const FormHeaderText = styled.h4`
  font-family: 'Rubik';
  font-weight: 300;
  font-size: 44px;
  line-height: 132%;

  letter-spacing: 4px;
  text-transform: uppercase;

  color: #ffffff;
  color: ${({ light }) => (light ? '#333' : '#fff')};
  & > b {
    font-weight: 700;
  }
`

const FormText = styled.p`
  margin-bottom: 26px;

  font-family: 'IBM Plex Mono';
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: ${({ light }) => (light ? '#333' : '#fff')};
`

const InputSC = styled.input`
  background: #ffffff;
  mix-blend-mode: normal;
  border: 1px solid #606060;
  border-radius: 10px;
  padding: 21px 19px;
  margin-bottom: 16px;
  width: 100%;
  &::placeholder {
    color: #333333;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1;
    text-transform: uppercase;
  }
`

const Error = styled.div`
  position: absolute;
  bottom: 21px;
  font-size: 12px;
  color: #ef5b63;
  right: 0;
  padding-right: 19px;
  font-weight: 700;
`

const FormControl = styled.div`
  position: relative;
`

const Label = styled.label`
  span {
  }
`

export {
  Form,
  TitleForm,
  TitleTextModal,
  FormContainer,
  FormHeader,
  FormHeaderText,
  FormText,
  InputSC,
  Error,
  FormControl,
  Label,
}
