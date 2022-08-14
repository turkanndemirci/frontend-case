import { ItemWrapper, Wrapper } from './ProductList.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import ProductListItem from '../ProductListItem/ProductListItem';

const ProductList = ({ items }) => {
  const [formattedList, setFormattedList] = useState(null);

  useEffect(() => {
    if (items && items.length > 0) {
      setFormattedList(items);
    } else {
      let existingEntries = JSON.parse(localStorage.getItem('products'));
      setFormattedList(existingEntries);
    }
  }, []);

  useEffect(() => {
    if (items && items.length > 0) {
      setFormattedList(items);
    }
  }, [items]);
  return (
    <Wrapper>
      {formattedList &&
        formattedList.length > 0 &&
        formattedList.map((item) => {
          return (
            <ItemWrapper key={item.productName}>
              <ProductListItem {...item}></ProductListItem>
            </ItemWrapper>
          );
        })}
    </Wrapper>
  );
};

export default ProductList;
