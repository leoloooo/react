import styled from 'styled-components';
import moreIcon from '@/assess/imgs/moreIcon.png';
import catelistbox from '@/assess/imgs/chooseBox.png';
import iconAll from '@/assess/imgs/iconall_sprite.png';
export const SongsWrapper = styled.div`
  background-color: rgb(245, 245, 245);
  padding: 25px;
`;
interface IProps {
  position?: string;
}
export const HeaderWrapper = styled.div<IProps>`
  position: relative;
  display: flex;
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  justify-content: space-between;
  align-items: center;

  > .left {
    display: flex;
    align-items: center;
    .choose {
      position: relative;
      display: inline-block;
      height: 21px;
      line-height: 21px;
      font-size: 10px;
      color: rgb(12, 115, 206);
      cursor: pointer;
      padding: 1px 13px;
      margin-left: 10px;
      border: 1px solid rgb(215, 215, 215);
      margin-bottom: 5px;
      border-radius: 5px;
      background-color: rgb(245, 245, 245);
      &:hover {
        background-color: white;
      }
      &::after {
        position: absolute;
        bottom: -17px;
        left: 25px;
        content: '';
        display: inline-block;
        width: 24px;
        height: 11px;
        background-image: url(${moreIcon});
        background-position: -48px 0;
        z-index: 99;
      }
    }

    .title {
      position: relative;
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 5px;
    }
  }
  .cateListBox {
    position: absolute;
    top: 29px;
    left: -27px;
    .top {
      height: 22px;
      background-position: 0 0;
      background-image: url(${catelistbox});
      z-index: 9;
    }
    .body {
      width: 700px;
      padding: 0 10px;
      background-position: -720px 0;
      background-image: url(${catelistbox});
      background-repeat: repeat-y;
      h3 {
        .title {
          display: inline-block;
          padding: 0 10px;
          height: 21px;
          line-height: 21px;
          font-size: 10px;
          border: 1px solid rgb(190, 190, 190);
          border-radius: 5px;
          margin-left: 33px;
          margin-bottom: 10px;
          background-color: rgb(245, 245, 245);
          font-weight: 400;
          &:hover {
            text-decoration: underline;
          }
        }
        border-bottom: 1px solid rgb(190, 190, 190);
      }
      .content {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        text-align: center;
        position: relative;
        .left {
          width: 70px;
          padding: 12px 13px;
          display: flex;
          justify-content: right;
          position: relative;
          .desc {
            display: block;
            font-size: 12px;
            font-weight: bold;
          }
          // &::before {
          //   position: absolute;
          //   content: '';
          //   display: inline-block;
          //   width: 23px;
          //   height: 23px;
          //   bottom: 10px;
          //   left: 30px;
          //   background-color: rgb(190, 190, 190);
          //   background-image: url(${iconAll});
          //   background-position: -20px -735px;
          //   border-radius: 50%;
          // }
        }
        .right {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          align-items: center;
          padding: 12px 15px 0 5px;
          line-height: 20px;
          font-size: 12px;
          border-left: 1px solid rgb(230, 230, 230);
          min-height: 28px;
          .item {
            display: inline-block;
            cursor: pointer;
            padding: 0 5px;
            margin: 0 10px;
            position: relative;
            color: rgb(51, 51, 51);
            border: transparent solid 1px; /* 默认透明边框 防止抖动*/
            &:hover {
              text-decoration: underline;
              border: #cccccc solid 1px;
              background-color: rgb(167, 167, 167);
              color: white;
            }
            &::after {
              position: absolute;
              content: '';
              display: inline-block;
              width: 1px;
              height: 12px;
              background-color: rgb(230, 230, 230);
              right: -10px;
              top: 5px;
            }
          }
        }
      }
    }
    .bottom {
      height: 20px;
      background-image: url(${catelistbox});
      background-position: -1440px -12px;
    }
  }
  .right {
    cursor: pointer;

    .desc {
      display: inline-block;
      padding: 4px 6px 4px 6px;
      border: 1px solid red;
      background-color: ${(props) => props.theme.color.primaryColor};
      color: white;
      font-weight: 300;
      font-size: 10px;
      border-radius: 5px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
export const LeftStyledDiv = styled.div<IProps>`
  position: relative;

  &::after {
    position: absolute;
    content: '';
    display: inline-block;
    width: 23px;
    height: 23px;
    bottom: 10px;
    left: 30px;
    background-color: rgb(190, 190, 190);
    background-image: url(${iconAll});
    background-position: ${(props) => props.position};
    border-radius: 50%;
  }
`;