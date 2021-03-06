import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import {ThemeProvider} from 'styled-components';
import {useState} from 'react';
import {lightTheme, darkTheme, GlobalStyles} from '../public/Theme';

function MyApp({Component, pageProps}) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme}>Switch Theme</button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
