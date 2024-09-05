import styled from 'styled-components';
//引入图片
import main_sprite from '@/assess/imgs/main_sprite.png';
export const HeaderWrapper = styled.div`
  display: flex;
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 4px 34px;
  justify-content: space-between;
  align-items: center;

  > .left {
    display: flex;
    align-items: center;

    .title {
      position: relative;
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      //title前面有一个精灵图的小圆点
      &::before {
        position: absolute;
        content: ''; /* 你想要的文本 */
        left: -20px;
        top: 8px;
        width: 15px;
        height: 15px;
        background-image: url(${main_sprite});
        background-repeat: no-repeat;
        background-position: -235px -163px;
      }
    }

    .keyword {
      display: flex;
      align-items: center;
      font-size: 12px;
      .item {
        margin: 7px 0 0 20px;
        position: relative;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
        //加一条竖线每个item后面,除了最后一个
        &:not(:last-child)::after {
          content: '|';
          position: absolute;
          right: -10px;
          color: #d3d3d3;
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .more {
      color: #666;
      font-size: 12px;
      margin-right: 10px;

      //hover时显示下划线
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
      //添加一精灵图
      &::after {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url(${main_sprite});
        background-position: 8px -231px;
    }
  }
`;
