import styled, { css } from 'styled-components';

export const ItemContainer = styled.div`
  width: 100%;
`;

export const ItemName = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

export const ItemBarcode = styled.span`
  margin-left: 24px;
  font-size: 14px;
`;

export const ItemHeader = styled.div`
  height 88px;
  background: #E9E9E9;
  border-radius: 4px 4px 0px 0px;
  padding:24px 16px;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

export const ItemContent = styled.div`
  background: #ffffff;
  border: 1px solid #c2c2c2;
  border-radius: 0px 0px 4px 4px;
  height: 147px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
`;

export const Action = styled.div`
  cursor: pointer;
  width: 42px;
  height: 42px;
  background: #c4c4c4;
  border-radius: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const ItemHeaderLeft = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const ItemHeaderRightInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemHeaderRightInfoTitle = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export const ItemHeaderRightInfoText = styled.span`
  font-size: 16px;
`;
