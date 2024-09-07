import React, { memo, useEffect, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { FooterWrapper, HeaderWrapper, LeftStyledDiv, SongsWrapper } from './style';
import cattleBox from '@/assess/data/cattleBox.json';
import { DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { fetchHotmusicListAction } from '@/views/discover/c-views/recommend/store';
import { AppDispatch } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import SongItem from '@/components/song-item/songItem';
import { RootState } from '@/store/rootReducer';
import musicIcon from '@/assess/imgs/musicIcon.png';
import musicIcon2 from '@/assess/imgs/start.png';
import { Pagination, PaginationProps } from 'antd';

interface IProps {
  children?: ReactNode;
}

const Song: FC<IProps> = () => {
  const totalPage = 150;
  //数组存图片
  const imgArr = [musicIcon, musicIcon2];
  //当前页
  const [curPage, setCurPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  // 获取 Redux 中的 HotmusicList
  const { HotmusicList } = useSelector((state: RootState) => ({
    HotmusicList: state.recommend.HotmusicList
  }));
  //挂载的时候监控用户滚动情况,快到底底部的时候缓存下一页数据避免等待
  useEffect(() => {
    const handleScroll = async () => {
      //window.innerHeight用户可以看到的高度,window.scrollY用户滚动的距离,加起来就是一共滚动的距离
      const scrollPostion = window.innerHeight + window.scrollY;
      console.log('scrollPostion', scrollPostion);
      const threshold = document.body.offsetHeight - 100; // 距离底部100像素时触发
      if (scrollPostion >= threshold) {
        //触发加载下一页
        if (curPage < totalPage) {
          dispatch(fetchHotmusicListAction({ offset: curPage * 35 }));
          setCurPage(curPage + 1);
          // 回到顶部
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    //卸载
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [curPage, totalPage, dispatch]);
  //获取bottom实际宽度
  useEffect(() => {
    // 等组件挂载后再访问 ref.current.scrollWidth
    if (Refbottom.current) {
    }
  }, []); // 空数组表示仅在组件挂载时执行
  // 在组件挂载时获取热门音乐列表
  useEffect(() => {
    dispatch(fetchHotmusicListAction({}));
  }, [dispatch]);
  //挂载分页数据
  useEffect(() => {
    //触发一下onchange加载
    onchange(1);
  }, []);
  // 添加一个监听器来检测点击事件是否发生在特定 DOM 之外
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 获取 cateListBoxRef 的 ref 拿到元素的 DOM
  const usecateListBoxRef = useRef<HTMLDivElement>(null);
  // 获取 spanChoose 的 ref
  const refSpanChoose = useRef<HTMLSpanElement>(null);
  //获取底部的ref
  const Refbottom = useRef<HTMLDivElement>(null);

  // 创建一个 useState 存储 cateListBox 的状态
  const [visible, setVisible] = useState(false);

  // 判断点击是否发生在 refSpanChoose 和 usecateListBoxRef 之外
  const handleClickOutside = (e: MouseEvent) => {
    if (
      usecateListBoxRef.current &&
      refSpanChoose.current &&
      !refSpanChoose.current.contains(e.target as Node) &&
      !usecateListBoxRef.current.contains(e.target as Node)
    ) {
      setVisible(false);
    }
  };

  // 控制 cateListBox 的显示和隐藏
  const showClick = () => {
    setVisible((prevVisible) => !prevVisible);
  };
  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return (
        <div
          className="btn"
          style={{
            borderRadius: '3px',
            transform: 'translateY(-1px)',
            padding: '0 10px',
            border: '1px solid rgb(220,220,220)',
            backgroundColor: 'rgb(250,250,250)'
          }}
        >
          <LeftOutlined style={{ position: 'relative', bottom: '-1px' }} />
          <span style={{ display: 'inline-block', padding: '1px 3px' }}>上一页</span>
        </div>
      );
    }
    if (type === 'next') {
      return (
        <div
          className="btn"
          style={{
            borderRadius: '3px',
            transform: 'translateY(-1px)',
            padding: '0 10px',
            border: '1px solid rgb(220,220,220)',
            backgroundColor: 'rgb(250,250,250)'
          }}
        >
          <span style={{ display: 'inline-block', padding: '1px 3px' }}>下一页</span>
          <RightOutlined style={{ position: 'relative', bottom: '-2px' }} />
        </div>
      );
    }
    if (type === 'page') {
      return (
        <div
          className="btn-pagenation"
          style={{
            borderRadius: '3px'
          }}
        >
          {originalElement}
        </div>
      );
    }
    return originalElement;
  };
  const onchange = (page: number, pageSize?: number) => {
    console.log('page', page);
    //更新列表
    dispatch(fetchHotmusicListAction({ offset: (page - 1) * 35 }));
    // 回到顶部
    window.scrollTo(0, 0);
  };

  return (
    <SongsWrapper className="wrapv2">
      <HeaderWrapper>
        <div className="left">
          <h3 className="title">全部</h3>
          <span className="choose" onClick={showClick} ref={refSpanChoose}>
            选择分类
            <DownOutlined
              style={{ marginLeft: '5px', fontSize: '8px', transform: 'translateY(1px)' }}
            />
          </span>
        </div>

        {/* 根据 visible 控制 cateListBox 的显示 */}
        {visible && (
          <div ref={usecateListBoxRef} className="cateListBox">
            <div className="top"></div>
            <div className="body">
              <h3>
                <a className="title" href="https://music.163.com/#/discover/playlist/?order=hot">
                  全部风格
                </a>
              </h3>

              {cattleBox.map((item, index) => (
                <div className="content" key={item.name}>
                  <LeftStyledDiv className="left" position={item.position}>
                    <div>
                      <span className="desc">{item.name}</span>
                    </div>
                  </LeftStyledDiv>
                  <div className={`right ${index === cattleBox.length - 1 ? 'last-item' : ''}`}>
                    {item.data.map((sub) => (
                      <div className="item" key={sub.cat}>
                        {sub.cat}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="bottom"></div>
          </div>
        )}

        <div className="right">
          <span className="desc">热门</span>
        </div>
      </HeaderWrapper>
      {/* 渲染热门歌曲列表 */}
      <div className="musicList">
        {HotmusicList.map((item) => {
          // 随机抽取图片
          const randomImg = imgArr[Math.floor(Math.random() * imgArr.length)];
          return (
            <div className="item" key={item.id}>
              {/* 使用 item.id 作为整个 item 的 key */}
              <SongItem
                key={item.id}
                itemData={{ ...item, picUrl: item.coverImgUrl, isShow: false }}
              />
              <div className="desc">
                <div className="top">{item.name}</div>
                <div className="bottom" ref={Refbottom}>
                  by {item.creator.nickname}
                </div>
                <img className="img" src={randomImg} alt="description" />
              </div>
            </div>
          );
        })}
      </div>
      <FooterWrapper>
        <div className="pagination">
          <Pagination total={500} itemRender={itemRender} onChange={onchange} pageSize={35} />
        </div>
      </FooterWrapper>
    </SongsWrapper>
  );
};

export default memo(Song);
