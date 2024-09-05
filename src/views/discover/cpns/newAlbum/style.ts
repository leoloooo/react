import styled from 'styled-components';
//拿箭头精灵图
import arrow from '@/assess/imgs/main_sprite.png';

export const AlbumWrapper = styled.div`
  .content {
    width: 688px;
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 28px 0 37px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }
    .arrow-left {
      //引入图片
      background: url(${arrow}) no-repeat -260px -75px;
      //hover的时候精灵图变成另一张
      &:hover {
        background-position: -280px -75px;
      }
    }
    .arrow-right {
      background: url(${arrow}) no-repeat -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }
    .banner {
      overflow: hidden;
      flex: 1;
    }
    .album-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
