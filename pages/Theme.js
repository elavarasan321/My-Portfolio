import {createGlobalStyle} from 'styled-components';

export const theme = {
  colors: {
    background: '#f4f5f8',
    border: '#e0e0e0',
    danger: '#eb5757',
    dangerButtonActive: '#cc5454',
    dangerButtonHover: '#ff8787',
    darkBorder: '#c9c9c9',
    darkDanger: '#d64727',
    lighterDanger: '#ffe1e1',
    lighterPrimary: '#ecf6ff',
    lightDanger: '#ebc6be',
    lightPrimary: '#cfe7ff',
    lightText: '#8a8c94',
    placeholder: '#c0c0c0',
    primary: '#40a1ff',
    text: '#3d4457',
  },
};
export const lightTheme = {
  colors: {
    background: '#f4f5f8',
    border: '#e0e0e0',
    danger: '#eb5757',
    dangerButtonActive: '#cc5454',
    dangerButtonHover: '#ff8787',
    darkBorder: '#c9c9c9',
    darkDanger: '#d64727',
    lighterDanger: '#ffe1e1',
    lighterPrimary: '#ecf6ff',
    lightDanger: '#ebc6be',
    lightPrimary: '#cfe7ff',
    lightText: '#8a8c94',
    placeholder: '#c0c0c0',
    primary: '#40a1ff',
    text: '#3d4457',
  },
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',

  colors: {
    background: '#f4f5f8',
    border: '#e0e0e0',
    danger: '#eb5757',
    dangerButtonActive: '#cc5454',
    dangerButtonHover: '#ff8787',
    darkBorder: '#c9c9c9',
    darkDanger: '#d64727',
    lighterDanger: '#ffe1e1',
    lighterPrimary: '#ecf6ff',
    lightDanger: '#ebc6be',
    lightPrimary: '#cfe7ff',
    lightText: '#8a8c94',
    placeholder: '#c0c0c0',
    primary: '#40a1ff',
    text: '#3d4457',
  },
};

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`;
// eslint-disable-next-line import/no-anonymous-default-export
export default {GlobalStyles, theme, darkTheme, lightTheme};
