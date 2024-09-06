import React, { memo, useEffect, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { HeaderWrapper, LeftStyledDiv, SongsWrapper } from './style';
import cattleBox from '@/assess/data/cattleBox.json';
import { DownOutlined } from '@ant-design/icons';

interface IProps {
  children?: ReactNode;
}

const Song: FC<IProps> = () => {
  //获取cateListBoxRef的ref拿到元素的dom
  const usecateListBoxRef = useRef<HTMLDivElement>(null);
  //创建一个usestate存储cateListBox的状态
  const [visible, setVisible] = useState(true);
  //是否在外面判断
  const handleClickOutside = (e: MouseEvent) => {
    if (usecateListBoxRef.current && !usecateListBoxRef.current.contains(e.target as Node)) {
      //e.target 在mousedown的时候会捕获我点击的dom 如果这个dom不是目标ref就设置隐藏 usecateListBoxRef是判断是否已经挂载了这个ref
      setVisible(false);
    }
  };
  //添加一个监听器
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <SongsWrapper className="wrapv2">
      <HeaderWrapper>
        <div className="left">
          <h3 className="title">全部</h3>
          <span className="choose" onClick={() => setVisible(true)}>
            选择分类
            <DownOutlined
              style={{ marginLeft: '5px', fontSize: '8px', transform: 'translateY(1px)' }}
            />
          </span>
        </div>
        {/* cateListBox */}
        {visible ? (
          <div ref={usecateListBoxRef} className="cateListBox">
            <div className="top"></div>
            <div className="body">
              <h3>
                <a className="title" href="https://music.163.com/#/discover/playlist/?order=hot">
                  全部风格
                </a>
              </h3>

              {cattleBox.map((item, index) => {
                return (
                  <div className="content" key={item.name}>
                    {/* 将 key 放在外层 */}
                    <LeftStyledDiv className="left" position={item.position}>
                      <div>
                        <span className="desc">{item.name}</span>
                      </div>
                    </LeftStyledDiv>
                    <div className={`right ${index === cattleBox.length - 1 ? 'last-item' : ''}`}>
                      {item.data.map((sub, index) => {
                        return (
                          <div className="item" key={sub.cat}>
                            {sub.cat}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bottom"></div>
          </div>
        ) : null}
        <div className="right">
          <span className="desc">热门</span>
        </div>
      </HeaderWrapper>
    </SongsWrapper>
  );
};

export default memo(Song);
