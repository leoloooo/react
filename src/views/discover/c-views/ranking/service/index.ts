// 获取轮播图数据
import hyRequest from '@/service';

export function getAllRank() {
  return hyRequest.get({
    url: '/toplist/detail'
  });
}
//拿歌单详情评论数量收藏数量
export function getMusicListDetail(id: number) {
  return hyRequest.get({
    url: '/playlist/detail/dynamic',
    params: {
      id
    }
  });
}
