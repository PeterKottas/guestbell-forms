import * as React from 'react';
import Basic from './pages/basic/Basic';
import ValidationPage from './pages/validationPage/ValidationPage';
import Header from './components/header/Header';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from '../../lib/index';
import { Schedule } from './pages/schedule/Schedule';

const App = () => (
  <div>
    <Header />
    <ThemeProvider
      theme={{
        overrides: {
          openingHoursWeek: {
            props: {
              translations: {
                monday: 'Bla bla',
              },
            },
          },
        },
      }}
    >
      {false && <Schedule />}
      {true && <Basic />}
      {false && <ValidationPage />}
    </ThemeProvider>
  </div>
);

export default hot(module)(App);
