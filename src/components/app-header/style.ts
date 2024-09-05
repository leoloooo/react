import styled from 'styled-components';
import sprite from '@/assess/imgs/topbar_sprite.png';
//开始
export const HeaderWrapper = styled.div`
  width: 100%;
  text-align: center;
  height: 75px;
  background-color: #242424;
  color: #fff;
  border-bottom: red 2px solid;
  .content {
    display: flex;
    justify-content: space-between;
    //混入先定义然后themeprovider包裹index.tsx
    ${(props) => props.theme.mixin.wrapV1}
  }
`;
export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .title-list {
    display: flex;
    line-height: 70px;
    text-align: center;
    align-items: center;
    font-size: 14px;
    div:last-child {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 28px;
        height: 19px;
        background-image: url(${sprite});
        background-position: -190px 0;
        top: 20px;
        right: -15px;
      }
    }
    .item {
      position: relative;
      a {
        //开了block才可以用绝对定位
        display: block;
        padding: 0 16px;
        color: #ccc;
      }
      a:hover {
        color: #fff;
        background-color: #000;
        text-decoration: none;
      }
      .active {
        color: #fff;
        background-color: #000;
        text-decoration: none;
        &::after {
          content: '';
          position: absolute;
          //向上的三角形
          border-left: 7px solid transparent; /* 更宽 */
          border-right: 7px solid transparent; /* 更宽 */
          border-bottom: 7px solid red; /* 更高且红色 */
          left: 45%;
          bottom: -4px;
        }
      }
    }
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search {
    border-radius: 32px;
    width: 158px;
    height: 32px;
    input {
      text-align: center;
      display: block;
      margin-bottom: 3px;
      &::placeholder {
        font-size: 12px;
        text-align: center;
      }
    }
  }
  .center {
    font-size: 11px;
    width: 88px;
    height: 28px;
    line-height: 28px;
    margin: 0 10px;
    border: rgba(255, 255, 255, 0.3) 1px solid;
    border-radius: 16px;
    cursor: pointer;
    &:hover {
      border: #fff 1px solid;
    }
  }
  .login {
    cursor: pointer;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.6);
  }
`;
