import styled from 'styled-components';
//引入遮盖层图片
import coverImg from '@/assess/imgs/cover_sprite.png';
export const AlbumWrapper = styled.div`
  width: 118px;
  .top {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;
    img {
      width: 100px;
      height: 100px;
    }
    .cover {
      color: transparent;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${coverImg});
      background-repeat: no-repeat;
      background-position: 0 -569px;
      text-indent: -9999px;
    }
  }
  .bottom {
    font-size: 12px;
    width: 100px;
    .name {
      color: #000;
      ${(props) => props.theme.mixin.textNoWrap}
    }
  }
`;
