// 获取轮播图数据
import hyRequest from '@/service';

export function getTopBanners() {
  return hyRequest.get({
    url: '/banner'
  });
}
// 获取热门推荐数据
export function getHotRecommends(limit: number = 30) {
  return hyRequest.get({
    url: '/personalized',
    params: {
      limit: 8
    }
  });
}
// 获取新碟上架数据
export function getNewAlbums(limit: number = 10) {
  return hyRequest.get({
    url: '/album/newest',
    params: {
      limit
    }
  });
}
//获取榜单数据
export function getRankingList(idx: number) {
  return hyRequest.get({
    url: '/playlist/detail',
    params: {
      id: idx
    }
  });
}
// 获取入驻歌手数据
export function getSettleSingers(limit: number = 5) {
  return hyRequest.get({
    url: '/artist/list',
    params: {
      limit
    }
  });
}
// 获取播放歌曲
export function getSongDetail(ids: string) {
  return hyRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  });
}
//获取播放歌曲地址
export function getSongPlayUrl(id: string) {
  return hyRequest.get({
    url: '/song/url',
    params: {
      id
    }
  });
}