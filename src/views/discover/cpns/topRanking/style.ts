import { styled } from 'styled-components';
//引入背景图片
import topRankingBg from '@/assess/imgs/rank_bg.png';

export const RankingWrapper = styled.div`
  .content {
    margin-top: 20px;
    margin-left: 10px;
    height: 472px;
    background-image: url(${topRankingBg});
    background-size: 100% 100%;
    display: flex;
  }
`;
