import { MainContextProvider } from '../context';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <Component {...pageProps} />
    </MainContextProvider>
  );
}

export default MyApp;
