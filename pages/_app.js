import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Layout from '../components/layout/layout'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../redux/reducers'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}

export default MyApp
