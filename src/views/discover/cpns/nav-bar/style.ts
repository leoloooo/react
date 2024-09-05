import styled from 'styled-components';

export const NavWrapper = styled.div`
  width: 100%;
  height: 35px;
  background-color: ${(props) => props.theme.color.primaryColor};
  line-height: 35px;
  .nav {
    display: flex;
    padding-left: 300px;
    text-align: center;
    align-items: center;
    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 15px;
        margin: 0 10px;
        font-size: 11px;
        color: white;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: rgb(155, 9, 9);
          border-radius: 16px;
        }
      }
    }
  }
`;