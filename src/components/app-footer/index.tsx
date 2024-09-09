import React, { memo, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { FooterWrapper } from '@/components/app-footer/style';
import Idata from '@/assess/data/footer-data.json';
import { FloatButton } from 'antd';

interface IPositionData {
  name: string;
  link: string;
  positionNormal: string;
  positionHover: string;
}
interface IProps {
  children?: ReactNode;
}

const AppFooter: FC<IProps> = () => {
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  return (
    <FooterWrapper>
      <div className="content wrapv2">
        <div className="top">
          <div className="item">
            {Idata.map(({ name, positionNormal, positionHover, link }) => {
              return (
                <div className="subitem" key={name}>
                  <a
                    className="icon"
                    href={link}
                    style={{
                      backgroundPosition: hoverItem === name ? positionHover : positionNormal
                    }}
                    onMouseEnter={() => setHoverItem(name)} //悬停设置hover
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    {name}
                  </a>
                  <span className="desc">{name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="floatBtn">
          <FloatButton.BackTop visibilityHeight={50} />
        </div>
        <div className="bottom">
          <div className="desc">
            <div className="top">
              <span>服务条款 |</span>
              <span>隐私政策 |</span>
              <span>儿童隐私政策 |</span>
              <span>版权投诉 |</span>
              <span>投资者关系 |</span>
              <span>广告合作 |</span>
              <span>联系我们</span>
            </div>
            <div className="middle">
              <span>廉政举报</span>
              <span>不良信息举报邮箱: 429024233@qq.com 客服热线: 95163298</span>
            </div>
            <div className="middle2">
              互联网宗教信息服务许可证：浙（2022）0000120 增值电信业务经营许可证：浙B2-20150198
              粤B2-20090191-18 工业和信息化部备案管理系统网站
            </div>
            <div className="bot">
              <span>
                网易公司版权所有©1997-2021杭州乐读科技有限公司运营:浙网文[2021]1186-054号
              </span>
              <span>浙公网安备 33010802013307号 算服务公示信息</span>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default memo(AppFooter);
