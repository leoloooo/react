import React, { memo, useEffect, useState, useRef, useCallback } from 'react';
import { dj } from '@/views/discover/c-views/Dj';
import { throttle } from 'lodash';

const ITEM_HEIGHT = 220; // 每行项目的高度
const CONTAINER_HEIGHT = 500; // 容器可视高度
const ITEMS_PER_ROW = 4; // 每行显示 4 个项目

const Djradio: React.FC = () => {
  const [role] = useState('user'); // 假设用户角色从上下文或状态中获取
  const [songList, setSongList] = useState<dj[]>([]);
  const [visibleStart, setVisibleStart] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 获取数据

  // 计算可见行数（每行4个项目）
  const visibleRowCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT) + 1; // 加1行作为缓冲

  // 滚动事件处理函数
  const throttledHandleScroll = useCallback(
    throttle(() => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        console.log('scrollTop', scrollTop);
        console.log(containerRef.current);
        const startRow = Math.floor(scrollTop / ITEM_HEIGHT);
        setVisibleStart(startRow);
      }
    }, 300),
    []
  );

  const handleScroll = useCallback(() => {
    throttledHandleScroll();
  }, [throttledHandleScroll]);
  useEffect(() => {
    async function fetchData() {
      const data = await dj.fetchDjList();
      setSongList(data);
      console.log(data);
    }
    fetchData();
    // getAllRank().then((res) => {
    //   console.log(res);
    // });
  }, []);
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  // 计算当前可见的项目范围
  const visibleItems = songList.slice(
    visibleStart * ITEMS_PER_ROW,
    (visibleStart + visibleRowCount) * ITEMS_PER_ROW
  );
  const handleDelete = async () => {
    try {
      await dj.deleteWithAuthorization(1, 'user'); // 传入要删除的项 ID
      alert('Item deleted successfully!');
    } catch (error: any) {
      alert(error.message); // 如果没有权限，将显示错误信息
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        border: '2px solid blue',
        padding: '20px',
        overflowY: 'auto',
        height: `${CONTAINER_HEIGHT}px`,
        position: 'relative'
      }}
    >
      <div
        style={{
          height: `${Math.ceil(songList.length / ITEMS_PER_ROW) * ITEM_HEIGHT}px`,
          position: 'relative'
        }}
      >
        {visibleItems.map((item, index) => (
          <div
            key={item.id}
            style={{
              position: 'absolute',
              top: `${Math.floor((visibleStart * ITEMS_PER_ROW + index) / ITEMS_PER_ROW) * ITEM_HEIGHT}px`,
              left: `${(index % ITEMS_PER_ROW) * (100 / ITEMS_PER_ROW)}%`,
              width: `${100 / ITEMS_PER_ROW}%`,
              height: `${ITEM_HEIGHT}px`,
              padding: '10px',
              boxSizing: 'border-box',
              textAlign: 'center',
              border: '1px solid #ddd'
            }}
          >
            <div>{item.name}</div>
            <div>
              <img src={item.coverImgUrl} alt="#" style={{ width: '150px', height: '150px' }} />
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>试试类删除办法</h2>
        <button onClick={handleDelete}>Delete Item</button>
      </div>
    </div>
  );
};

export default memo(Djradio);
