import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { UserLoginWrapper } from '@/views/discover/cpns/user-login/style';

interface IProps {
  children?: ReactNode;
}

const UserLogin: FC<IProps> = () => {
  return (
    <UserLoginWrapper>
      <div className="content sprite_02">
        <p className="desc">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        <div className="pic">
          <a href="/todo">立即登录</a>
        </div>
      </div>
    </UserLoginWrapper>
  );
};

export default memo(UserLogin);
