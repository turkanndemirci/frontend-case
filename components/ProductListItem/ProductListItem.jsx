import {
  Action,
  ItemBarcode,
  ItemContainer,
  ItemContent,
  ItemHeader,
  ItemHeaderLeft,
  ItemHeaderRight,
  ItemHeaderRightInfo,
  ItemHeaderRightInfoText,
  ItemHeaderRightInfoTitle,
  ItemName,
} from './ProductListItem.styles';
import {
  removeExistingProduct,
  setExistingProducts,
} from '../../redux/slices/productsSlice';

import ArrowDown from '../../assets/icons/arrow-down.svg';
import ArrowUp from '../../assets/icons/arrow-up.svg';
import DeleteBig from '../../assets/icons/delete-big.svg';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const ProductListItem = ({
  productName,
  productType,
  productBarcode,
  productDescription,
}) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const removeProduct = () => {
    let existingEntries = JSON.parse(localStorage.getItem('products'));
    existingEntries = existingEntries.filter(
      (item) => item.productName !== productName
    );

    localStorage.setItem('products', JSON.stringify(existingEntries));
    dispatch(removeExistingProduct(productName));
    dispatch(setExistingProducts(existingEntries));
  };
  return (
    <ItemContainer>
      <ItemHeader>
        <ItemHeaderLeft>
          <ItemName>{productName}</ItemName>
          <ItemBarcode>{productBarcode}</ItemBarcode>
        </ItemHeaderLeft>
        <ItemHeaderRight>
          <ItemHeaderRightInfo>
            <ItemHeaderRightInfoTitle>Product Type</ItemHeaderRightInfoTitle>
            <ItemHeaderRightInfoText>
              {productType === 'standard' ? 'Standard' : 'Online Licence'}
            </ItemHeaderRightInfoText>
          </ItemHeaderRightInfo>
          <Action onClick={removeProduct}>
            <DeleteBig></DeleteBig>
          </Action>

          <Action onClick={() => setIsActive(!isActive)}>
            {!isActive ? <ArrowDown></ArrowDown> : <ArrowUp></ArrowUp>}
          </Action>
        </ItemHeaderRight>
      </ItemHeader>

      {isActive && (
        <ItemContent>
          <ItemHeaderRightInfoTitle>Description:</ItemHeaderRightInfoTitle>
          <ItemHeaderRightInfoText>
            {productDescription}
          </ItemHeaderRightInfoText>
        </ItemContent>
      )}
    </ItemContainer>
  );
};

export default ProductListItem;
