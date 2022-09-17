import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

// const ContactFormContainer = styled.form`
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     /* box-sizing: border-box; */

// `;

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

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-32px, -50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 509px;
  padding: 26px 36px;

  background: #232f3c;
  border-radius: 20px;
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

  color: #ffffff;
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
