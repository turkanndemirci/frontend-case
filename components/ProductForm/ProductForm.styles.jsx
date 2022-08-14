import styled, { css } from 'styled-components';

export const FormWrapper = styled.div`
  width: 500px;
  padding: 24px;
  box-shadow: 0 16px 24px 0 rgba(17, 17, 19, 0.08);
`;

export const FormItem = styled.div`
  margin-bottom: 48px;
`;

export const FormItemLabel = styled.span`
  margin-bottom: 24px;
  font-weight: bold;
`;

export const FormItemContent = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`;

export const FormRadioWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    appearance: none;
    position: relative;
    width: 143px;
    height: 36px;
    background-color: #adadad;
    margin-right: 12px;
    width: 143px;
    height: 36px;
    cursor: pointer;
    &:checked:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #252525;
    }
  }
`;

export const FormRadioLabel = styled.span`
  position: absolute;
  color: #fff;
`;

export const FormInnerItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  margin-bottom: 24px;

  input {
    margin-top: 4px;
    height: 32px;
    border-radius: 4px;
  }
  textarea {
    margin-top: 4px;
    border-radius: 4px;
  }
`;

export const FormInnerItemLabel = styled.span`
  font-size: 16px;
  color: #000000;
`;

export const FormInnerItemValue = styled.span`
  font-size: 16px;
  color: #000000;
  margin-left: 4px;
`;

export const FormInnerItemAction = styled.div`
  cursor: pointer;
  margin-top: 24px;
  height: 32px;
  background-color: #828282;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      border: transparent;
      background-color: #bebebe;
      color: #828282;
    `}
`;

export const FormItemSecondaryInnerItem = styled.div`
  width: 100%;
  height: 32px;
  border: 1px solid #bebebe;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 8px;
  color: #626262;
  font-size: 16px;
`;

export const FormItemSecondaryInnerItemAction = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 15px;
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
