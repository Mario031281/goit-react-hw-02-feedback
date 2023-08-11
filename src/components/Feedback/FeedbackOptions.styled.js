import styled from 'styled-components';
export const Btn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 1px;
  margin: 0 15px 15px 0;
  outline: none;
  border: 1px solid #f18230;
  border-radius: 25px;
  height: 46px;
  line-height: 0;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  vertical-align: top;
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;

  :hover,
  :focus {
    cursor: pointer;
    background-color: #444;
    color: #fff;
  }
`;
export const BtnSpan = styled.span`
  display: block;
  box-sizing: border-box;
  padding: 0 25px;
  height: 42px;
  line-height: 38px;
  border: 1px solid #f18230;
  border-radius: 25px;
  font-size: 14px;
  color: #ffffff;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #f18230;
  text-align: center;
  font-weight: 600;
`;
