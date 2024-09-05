import styled from 'styled-components';
//引入遮盖层图片
import coverImg from '@/assess/imgs/cover_sprite.png';
//引入info的精灵图
import info from '@/assess/imgs/icon_sprite.png';

export const SongItemWrapper = styled.div`
  width: 140px;
  margin: 15px 0;

  .top {
    position: relative;
    & > img {
      width: 140px;
      height: 140px;
    }
    .cover {
      //遮盖层蒙住图片
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${coverImg});
      background-repeat: no-repeat;
      background-position: 0 0;
      //信息部分包括播放次数和播放按钮(打算用伪元素添加)
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 27px;
        color: #fffdef;
        font-size: 12px;
        //信息部分的精灵覆盖图
        background-image: url(${coverImg});
        background-repeat: no-repeat;
        background-position: 0 -537px;
        .count {
          position: relative;
          margin-left: 25px;
          //添加播放的精灵图标
          &::before {
            content: '';
            display: inline-block;
            width: 20px;
            height: 20px;
            background-image: url(${info});
            background-repeat: no-repeat;
            background-position: 5px -16px;
            position: absolute;
            top: -3px;
            left: -25px;
          }
          //播放按钮精灵图标
          &::after {
            content: '';
            display: inline-block;
            width: 20px;
            height: 20px;
            background-image: url(${info});
            background-repeat: no-repeat;
            background-position: 3px 3px;
            position: absolute;
            top: -3px;
            left: 90px;
          }
        }
      }
    }
  }
  .bottom {
    font-size: 12px;
    margin-top: 5px;
  }
`;
