interface IProps {
  time: number; // 时间以毫秒为单位
  text: string;
}
const timeExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export function parseLyrics(lyricsString: string): IProps[] {
  const lines = lyricsString.split('\n');
  const lyrics: IProps[] = [];
  for (const line of lines) {
    const result = timeExp.exec(line);
    if (!result) continue;
    const minutes = parseInt(result[1], 10);
    const seconds = parseInt(result[2], 10);
    const milliseconds = parseInt(result[3], 10);
    const time = minutes * 60 * 1000 + seconds * 1000 + milliseconds;
    const text = line.replace(timeExp, '').trim();
    lyrics.push({ time, text });
  }
  return lyrics;
}
