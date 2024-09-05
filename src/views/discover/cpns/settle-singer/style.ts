import styled from 'styled-components';
import btnBg from '@/assess/imgs/btn_sprite.png';
export const SetterSingerWrapper = styled.div`
  padding: 20px;
  .artist {
    display: flex;
    align-items: center;
    margin-top: 13px;
    border: 1px solid #e9e9e9;
    height: 62px;
    background-color: #fafafa;
    //hover颜色变深
    &:hover {
      background-color: #f4f4f4;
    }
    img {
      width: 62px;
      height: 62px;
      object-fit: cover;
    }
    .info {
      margin-left: 10px;
      .name {
        font-size: 12px;
        font-weight: bold;
      }
      .alia {
        font-size: 10px;
      }
    }
  }
  .apply {
    position: relative;
    margin-top: 20px;
    background: url(${btnBg}) no-repeat 0 -59px;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: url(${btnBg}) no-repeat;
    }
    &::before {
      background-position: -40px -181px;
      top: -1px;
      left: -1px;
      z-index: 1;
    }

    a {
      color: #333;
      font-size: 12px;
      //文字居中
      display: inline-block;
      height: 31px;
      line-height: 31px;
      margin-left: 45px;
      z-index: 999;
      position: relative;
    }
  }
`;
