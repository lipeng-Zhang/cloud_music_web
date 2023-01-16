import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  height: 30px;
  background: ${(props) => props.theme.color.primary};
`;

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  top: -4px;

  .item {
    a {
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;

      :hover,
      &.active {
        background-color: #9b0909;
        border-radius: 20px;
      }
    }
  }
`;
