import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { HeaderWrapper, LeftStyledDiv, SongsWrapper } from './style';
import cattleBox from '@/assess/data/cattleBox.json';
import { DownOutlined } from '@ant-design/icons';

interface IProps {
  children?: ReactNode;
}

const ranking: FC<IProps> = () => {
  //添加一个监听器
  return (
    <SongsWrapper className="wrapv2">
      <HeaderWrapper>
        <div className="left">
          <h3 className="title">全部</h3>
          <span className="choose">
            选择分类
            <DownOutlined
              style={{ marginLeft: '5px', fontSize: '8px', transform: 'translateY(1px)' }}
            />
          </span>
        </div>
        <div className="cateListBox isShow">
          <div className="top"></div>
          <div className="body">
            <h3>
              <a className="title" href="https://music.163.com/#/discover/playlist/?order=hot">
                全部风格
              </a>
            </h3>

            {cattleBox.map((item) => {
              return (
                <div className="content" key={item.name}>
                  {' '}
                  {/* 将 key 放在外层 */}
                  <LeftStyledDiv className="left" position={item.position}>
                    <div>
                      <span className="desc">{item.name}</span>
                    </div>
                  </LeftStyledDiv>
                  <div className="right">
                    {item.data.map((sub) => {
                      return <div className="item">{sub.cat}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bottom"></div>
        </div>
        <div className="right">
          <span className="desc">热门</span>
        </div>
      </HeaderWrapper>
    </SongsWrapper>
  );
};

export default memo(ranking);
