import DefaultLayout from '../../layouts/DefaultLayout';
import ProductForm from '../../components/ProductForm/ProductForm';
import { setEmpty } from '../../redux/slices/productsSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Form = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setEmpty());
  }, []);
  return (
    <>
      <DefaultLayout>
        <ProductForm></ProductForm>
      </DefaultLayout>
    </>
  );
};

export default Form;
