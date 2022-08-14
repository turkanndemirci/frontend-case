import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import ProductList from '../components/ProductList/ProductList';
import { setExistingProducts } from '../redux/slices/productsSlice';

const Home = () => {
  const existingProducts = useSelector(
    (state) => state.products.existingProducts
  );
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    let existingEntries = JSON.parse(localStorage.getItem('products'));
    setProducts(existingEntries);
    dispatch(setExistingProducts(existingEntries));
  }, []);

  useEffect(() => {
    if (existingProducts && existingProducts.length > 0) {
      setProducts(existingProducts);
    }
  }, [existingProducts]);

  return (
    <>
      <DefaultLayout>
        <ProductList items={products}></ProductList>
      </DefaultLayout>
    </>
  );
};

export default Home;
