import {
  FormInnerItem,
  FormInnerItemAction,
  FormInnerItemLabel,
  FormInnerItemValue,
  FormItem,
  FormItemContent,
  FormItemLabel,
  FormItemSecondaryInnerItem,
  FormItemSecondaryInnerItemAction,
  FormRadioLabel,
  FormRadioWrapper,
  FormWrapper,
} from './ProductForm.styles';
import {
  addProduct,
  removeProduct,
  updateProduct,
} from '../../redux/slices/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Delete from '../../assets/icons/delete.svg';
import { useRouter } from 'next/router';

const productTypes = [
  { key: 'onlineLicence', label: 'Online Licence' },
  { key: 'standard', label: 'Standard' },
];

const ProductForm = ({}) => {
  const router = useRouter();
  const [productType, setProductType] = useState('');
  const [productName, setProductName] = useState('');
  const [productBarcode, setProductBarcode] = useState('');
  const [isAddButtonDisable, setIsAddButtonDisable] = useState(true);
  const [displaySubmitButton, setDisplaySubmitButton] = useState(false);
  const products = useSelector((state) => state.products.newAddedProducts);
  const dispatch = useDispatch();

  //gerekli alanlar sağlanana kadar add butonu disable
  useEffect(() => {
    if (productType !== '' && productName != '' && productBarcode !== '') {
      setIsAddButtonDisable(false);
    } else {
      setIsAddButtonDisable(true);
    }
  }, [productType, productName, productBarcode]);

  useEffect(() => {
    if (products && products.length > 0) {
      checkSubmitButton(products);
    } else {
      setDisplaySubmitButton(false);
    }
  }, [products]);

  const onClickAdd = () => {
    const product = {
      productType,
      productName,
      productBarcode,
    };

    dispatch(addProduct(product));

    setTimeout(() => {
      setProductType('');
      setProductName('');
      setProductBarcode('');
    }, 200);
  };

  const onClickDelete = () => {
    dispatch(removeProduct(productName));
  };

  const addAdditionalInfos = (value, productName, key) => {
    const data = {
      value,
      productName,
      key,
    };
    dispatch(updateProduct(data));
  };

  const onSubmit = () => {
    let existingEntries = JSON.parse(localStorage.getItem('products'));

    const newList = [...existingEntries, ...products];
    localStorage.setItem('products', JSON.stringify(newList));

    setTimeout(() => {
      router.push('/');
    }, 200);
  };

  //tüm kurallar sağlanan kadar submit butonun görünmemesi için
  const checkSubmitButton = (items) => {
    if (items && items.length > 0) {
      items.forEach((product) => {
        if (
          product.productType === 'onlineLicence' &&
          (product.licenceCode === '' || product.licenceCode === undefined)
        ) {
          setDisplaySubmitButton(false);
        } else if (
          product.productType === 'standard' &&
          (product.productDescription === '' ||
            product.productDescription === undefined)
        ) {
          setDisplaySubmitButton(false);
        } else {
          setDisplaySubmitButton(true);
        }
      });
    }
  };

  return (
    <FormWrapper>
      <FormItem>
        <FormItemLabel>Product Type</FormItemLabel>
        <FormItemContent>
          {productTypes &&
            productTypes.length > 0 &&
            productTypes.map((type) => {
              return (
                <FormRadioWrapper key={type.key}>
                  <input
                    type="radio"
                    value={type.key}
                    name="productType"
                    checked={productType === type.key}
                    onChange={(e) => setProductType(e.target.value)}
                  />
                  <FormRadioLabel>{type.label}</FormRadioLabel>
                </FormRadioWrapper>
              );
            })}
        </FormItemContent>
      </FormItem>
      <FormItem>
        <FormItemLabel>Add Product</FormItemLabel>
        <FormItemContent column>
          <FormInnerItem column>
            <FormInnerItemLabel>Name</FormInnerItemLabel>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </FormInnerItem>
          <FormInnerItem column>
            <FormInnerItemLabel>Barcode</FormInnerItemLabel>
            <input
              type="text"
              value={productBarcode}
              onChange={(e) => setProductBarcode(e.target.value)}
            />
          </FormInnerItem>
          <FormInnerItem column>
            <FormInnerItemAction
              onClick={onClickAdd}
              disabled={isAddButtonDisable}>
              Add
            </FormInnerItemAction>
          </FormInnerItem>
        </FormItemContent>
      </FormItem>
      {products && products.length > 0 ? (
        <>
          <FormItem>
            <FormItemLabel>Products</FormItemLabel>
            <FormItemContent column>
              {products &&
                products.length > 0 &&
                products.map((item) => {
                  return (
                    <FormItemSecondaryInnerItem key={item.productName}>
                      {item.productName} - {item.productBarcode}
                      <FormItemSecondaryInnerItemAction onClick={onClickDelete}>
                        <Delete></Delete>
                      </FormItemSecondaryInnerItemAction>
                    </FormItemSecondaryInnerItem>
                  );
                })}
            </FormItemContent>
          </FormItem>
          <FormItem>
            <FormItemLabel>Product Details </FormItemLabel>
            <FormItemContent column>
              {products &&
                products.length > 0 &&
                products.map((item) => {
                  return (
                    <div key={item.productBarcode}>
                      <FormInnerItem>
                        <FormInnerItemLabel>Name:</FormInnerItemLabel>
                        <FormInnerItemValue>
                          {item.productName}
                        </FormInnerItemValue>
                      </FormInnerItem>
                      <FormInnerItem>
                        <FormInnerItemLabel>Barcode:</FormInnerItemLabel>
                        <FormInnerItemValue>
                          {item.productBarcode}
                        </FormInnerItemValue>
                      </FormInnerItem>
                      {item.productType === 'onlineLicence' && (
                        <FormInnerItem column>
                          <FormInnerItemLabel>License Code:</FormInnerItemLabel>
                          <input
                            type="text"
                            value={item.licenceCode || ''}
                            onChange={(e) =>
                              addAdditionalInfos(
                                e.target.value,
                                item.productName,
                                'licenceCode'
                              )
                            }
                          />
                        </FormInnerItem>
                      )}
                      <FormInnerItem column>
                        <FormInnerItemLabel>Description:</FormInnerItemLabel>
                        <textarea
                          value={item.productDescription || ''}
                          rows="5"
                          onChange={(e) =>
                            addAdditionalInfos(
                              e.target.value,
                              item.productName,
                              'description'
                            )
                          }
                        />
                      </FormInnerItem>
                    </div>
                  );
                })}
            </FormItemContent>
          </FormItem>
        </>
      ) : null}
      {displaySubmitButton && (
        <FormItem>
          <FormInnerItemAction onClick={onSubmit}>Submit</FormInnerItemAction>
        </FormItem>
      )}
    </FormWrapper>
  );
};

export default ProductForm;
