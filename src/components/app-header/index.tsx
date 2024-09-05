import React, { memo, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderLeft, HeaderRight, HeaderWrapper } from '@/components/app-header/style';
//导入json文件拿到titles 数据
import headerTitles from '@/assess/data/header-titles.json';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

interface IProps {
  children?: ReactNode;
}

const AppHeader: FC<IProps> = () => {
  // 组件展示逻辑保留选中

  useEffect(() => {}, []);
  function showItem(item: { title: string; link: string; type: string }) {
    //判断类型
    if (item.type === 'path') {
      return <NavLink to={item.link}>{item.title}</NavLink>;
    } else {
      return (
        <a rel="noreferrer" target="_blank" href={item.link}>
          {item.title}
        </a>
      );
    }
  }
  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <a href="https://www.example.com" className="logo topbar_sprite">
            网易云音乐
          </a>
          {/*//遍历titles数据*/}
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div key={item.title} className="item">
                  {showItem(item)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <span className="input">
            <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          </span>
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
    </HeaderWrapper>
  );
};

export default memo(AppHeader);
