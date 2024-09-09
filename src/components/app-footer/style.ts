import styled from 'styled-components';
import img from '@/assess/imgs/footIcon.png';

export const FooterWrapper = styled.div`
  background-color: #f2f2f2;
  border-top: 1px solid #d3d3d3;
  height: 325px;
  overflow: hidden;
  .content {
    .top {
      margin-top: 33px;
      display: flex;
      font-size: 14px;
      color: rgb(102, 102, 102);
      .item {
        display: flex;
        margin-left: 32px;
        .subitem {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-right: 75px;
          .icon {
            display: inline-block;
            height: 45px;
            width: 45px;
            background-image: url(${img});
            background-position: -155px -105px;
            background-repeat: no-repeat;
            background-size: 450%;
            color: transparent;
            margin-bottom: 5px;
            &:hover {
              background-position: -155px -135px;
            }
          }
          .desc {
            display: inline-block;
            color: rgb(123, 121, 121);
            font-size: 12px;
          }
        }
      }
    }
    .bottom {
      padding-top: 50px;
      .desc {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .top {
          margin-bottom: 5px;
          > span {
            margin-right: 5px;
          }
        }
        .middle {
          font-size: 14px;
          color: rgb(123, 121, 121);
          //第一个span
          > span:first-child {
            margin-right: 10px;
          }
        }
        .middle2 {
          font-size: 13px;
          color: rgb(123, 121, 121);
          margin-top: 5px;
        }
        .bot{
          font-size: 13px;
          color: rgb(123, 121, 121);
          margin-top: 5px;
          > span {
            margin-right: 5px;
        }
      }
    }
  }
`;
