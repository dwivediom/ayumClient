import '../styles/globals.css'
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store/store'
import Navbar from '../comonents/Navbar';
function MyApp({ Component, pageProps }) {
  return(
    <ReduxProvider store={store}>
      <Navbar/>
      <Component {...pageProps} />
    </ReduxProvider>
  )
}

export default MyApp
