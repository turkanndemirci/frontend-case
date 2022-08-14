import '../styles/globals.css';

import { Products } from './api/products.mock';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { setExistingProducts } from '../redux/slices/productsSlice';
import { store } from '../redux/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(Products));

    dispatch(setExistingProducts(JSON.parse(localStorage.getItem('products'))));
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
