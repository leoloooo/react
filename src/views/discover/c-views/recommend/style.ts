import styled from 'styled-components';
//引入content背景图
import wrapbg from '@/assess/imgs/main_bg.png';

export const RecommendWrapper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;
    display: flex;
    //这个背景图会随着内容增加变长
    background-image: url(${wrapbg});
    > .left {
      width: 729px;
      padding: 20px;
      box-sizing: border-box;
    }
    > .right {
      width: 250px;
      margin-left: 1px;
    }
  }
`;
export const RecommendContent = styled.div``;
