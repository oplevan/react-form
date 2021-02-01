import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
   height: 100%;
  }

  body {
   font-family: Arial, Helvetica, sans-serif;
   background: linear-gradient(to bottom right, #E8ECF5, #C4D0E6);
   height: 100%;
   margin: 0;
   padding: 0;
  }

  a,
  a:visited {
    color: #000
  }
`;

const shake = keyframes`
  0% { transform: translate(0,0) }
  0.89283% { transform: translate(5px,0) }
  1.78571% { transform: translate(0,0) }
  2.26757% { transform: translate(5px,0) }
  3.57143% { transform: translate(0,0) }
  4.46428% { transform: translate(5px,0) }
  5.35714% { transform: translate(0,0) }
  100% { transform:translate(0,0) }
`;

const fadeIn = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-top: 0;
  padding-bottom: 15px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 1px;
    background-color: #ccc;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 40px;
  background-color: #fff;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: 0px 30px 30px 5px rgba(150, 170, 200, 0.5);
`;

export const Group = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  ${({ terms }) =>
    terms ? 'flex-direction: row;align-items: top;line-height: 16px' : ''};
`;

export const Label = styled.label`
  font-size: 11px;

  & a {
    color: blue;
  }
  & span {
    color: red;
  }
`;

export const Input = styled.input`
  background-color: #fff;
  border-radius: 5px;
  height: 30px;
  border: solid 1px #999;
  margin: 5px 0 25px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 12px;
  transition: all 0.2s ease-in-out;
  color: #000;
  ${({ error }) =>
    error === 'error'
      ? 'border: solid 1px rgb(238,157,164);box-shadow: 0 0 1px 1px rgba(238,157,164, 0.5);'
      : ''};

  &:focus {
    outline: none;
    border: solid 1px rgb(166, 203, 253);
    box-shadow: 0 0 1px 1px rgba(166, 203, 253, 0.5);
    color: #000;
  }

  &[type='checkbox'] {
    margin: 0 5px 25px 0;
    width: auto;
    height: 15px;
  }

  &[type='checkbox']:focus {
    border: none;
    box-shadow: none;
  }
`;

export const ErrorText = styled.span`
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  color: red;
  font-size: 11px;
  animation: 9.44s ${shake} ease infinite 4.72s;
`;

export const ErrorIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 23px;
  color: red;
  animation: 0.8s ${fadeIn} ease;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #ec5990;
  color: #fff;
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 10px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
  box-sizing: border-box;
  cursor: pointer;
  transition: ease-in-out 0.25s;
  margin-top: 15px;

  &:hover {
    background-color: #bf1650;
  }
  &:visited {
    border: solid 1px red;
    outline: none;
  }
`;
