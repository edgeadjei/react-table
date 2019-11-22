// React Modules
import styled, {css} from "styled-components";

const Container = styled.main`
  position: relative;
  box-sizing: border-box;
`;
const Table = styled.main`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  border: 1px solid ${props => props.theme.borderColor};
  overflow: auto;
  select, input{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0px 4px;
    border: 1px solid ${props => props.theme.borderColor};
    box-sizing: border-box;
  }
  input[type=checkbox] { 
    height: auto;
    width: auto;
    padding: 0;
  }
`;
const Thead = styled.main`
  user-select: none;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.secondaryColor};
  ${props => props["data-height"] && css`
    overflow-y: scroll;
  `}
  button {
    display: inline-block;
    width: auto;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    cursor: pointer;
    white-space: nowrap;
    font: inherit;
    color: inherit
  }
`;
const Th = styled.div`
  border-right: 1px solid ${props => props.theme.borderColor};
  min-width: 28px;
  position: relative;
  padding: 2px 6px;
  :last-child {
    border-right: 0;
  }
  button {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    text-transform: capitalize;
  }
  ${props => props.index && css`
    text-align: center;
  `}
`;
const Resizer = styled.div`
  display: inline-block;
  position: absolute;
  width: 36px;
  top: 0;
  bottom: 0;
  right: -18px;
  cursor: col-resize;
  z-index: 10;
`;
const Body = styled.main`
  position: relative;
  ${props => props.height && css`
    overflow-y: scroll;
  `}
`;
const Tr = styled.main`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  :not(.active):hover {
    background-color: ${props => props.theme.secondaryColor}
  }
  ${props => props.activeRow && css`
    background: ${props => props.theme.secondaryColor}
  `}
  &.active .index {
    background-color: ${props => props.theme.primaryColor};
    color: #fff;
  }
`;
const Td = styled.div`
  border-right: 1px solid ${props => props.theme.borderColor};
  min-width: 28px;
  position: relative;
  padding: 2px 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :last-child {
    border-right: 0;
  }
  ${props => props.index && css`
    background-color: ${props => props.theme.secondaryColor};
    text-align: center;
  `}
`;
const Tfoot = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 6px;
  border-top: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.secondaryColor};
  select {
    width: auto;
  }
`;
const Pagination = styled.button`
  display: inline-block;
  margin: 0;
  border-color: ${props => props.theme.borderColor};
  ${props => props.active && css`
    background: ${props => props.theme.primaryColor};
    border-color: ${props => props.theme.primaryColor};
    color: #fff
  `}
`;
const Overlay = styled.main`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1px;
  bottom: 1px;
  left: 1px;
  right: 1px;
  background: rgba(255, 255, 255, .8);
  z-index: 1;
`;
const Message = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  color: #00000099;
`;
const NoData = styled.main`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, .8);
`;

export {
  Container,
  Table,
  Thead,
  Th,
  Resizer,
  Body,
  Tr,
  Td,
  Tfoot,
  Pagination,
  Overlay,
  Message,
  NoData
};