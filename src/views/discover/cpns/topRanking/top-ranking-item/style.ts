import styled from 'styled-components';
//引入遮盖层图片
import coverImg from '@/assess/imgs/cover_sprite.png';
export const RankingWrapper = styled.div`
  width: 230px;
  //最后一个228px
  &:last-child {
    width: 228px;
  }
  .header {
    display: flex;
    .image {
      position: relative;
      margin: 20px 0 0 21px;
      //字透明,蒙版
      .image_cover {
        position: absolute;
        color: transparent;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${coverImg});
        background-repeat: no-repeat;
        background-position: -259px -76px;
      }
    }
    .info {
      position: relative;
      margin: 30px 0 0 10px;
      font-size: 12px;
      font-weight: 600;
      .btn {
        margin-right: 10px;
        width: 22px;
        height: 22px;
      }
      .play {
        position: absolute;
        top: 30px;
        left: 0;
        background-position: -267px -205px;
        //hover换图片
        &:hover {
          background-position: -267px -235px;
        }
      }
      .favor {
        position: absolute;
        top: 30px;
        left: 30px;
        background-position: -300px -205px;
        //hover换图片
        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }
  .footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;

      .more {
          color: #000;
          font-size: 12px;
          padding-right: 20px;

          &:hover {
              text-decoration: underline;
          }
      }
  }

  .list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .item {
      display: flex;
      text-align: center;
      align-items: center;
      margin-left: 10px;
      height: 32px;
      ////前三个红色
      &:nth-child(-n + 3) span {
        color: #c10d0c;
      }

      .info{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        //移动到item后operate的display变成block
        &:hover .operate {
          display: block;
        }

      .index {
        margin-right: 10px;
      }
      .name {
        font-size: 12px;
        position: relative;
        margin-top: 3px;
        margin-left: 5px;
        text-align: left;
        width: 110px;
        //超出部分隐藏..
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .operate {
        width: 82px;
        display: none;
        margin-top: 5px;
        .btn {
          margin-left: 8px;
          width: 17px;
          height: 17px;
        }
        .play {
          background-position: -267px -268px;
          &:hover {
            background-position: -267px -288px;
          }
        }
        .addto {
          background-position: 0 -698px;
          &:hover {
            background-position: -22px -698px;
          }
        }
        .favor {
          background-position: -297px -268px;
          &:hover {
            background-position: -297px -288px;
          }
        }
      }
    }
  }

`;
