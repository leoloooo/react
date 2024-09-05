import hyRequest from '@/service';

export function getSongDetail(ids: number) {
  return hyRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  });
}
//歌词
export function getLyric(id: number) {
  return hyRequest.get({
    url: '/lyric',
    params: {
      id
    }
  });
}
