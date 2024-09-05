import styled from 'styled-components';
import btnColor from '@/assess/imgs/btn_sprite.png';

export const UserLoginWrapper = styled.div`
  .content {
    background-position: 0 0;
    padding: 16px 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .desc {
      font-size: 12px;
      color: #666;
    }
    .pic {
      margin-top: 20px;
      a {
        display: block;
        width: 100px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        color: #fff;
        background-image: url(${btnColor});
        background-position: 0 -2857px;
        &:hover {
          background-position: 0 -2927px;
        }
        text-decoration: none;
  }
`;
