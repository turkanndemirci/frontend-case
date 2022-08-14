import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  padding-left: 32px;
  padding-right: 64px;
`;

export const RightContent = styled.div`
  display: flex;
  padding-right: 32px;
`;

export const RightContentItem = styled.div`
  color: #000;
  font-weight: ${(props) => (props.active ? 'bold' : '400')};
  &:first-child {
    margin-right: 12px;
  }
`;
