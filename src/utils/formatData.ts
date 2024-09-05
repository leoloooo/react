// utils/numberFormatter.ts
export function formatNumber(number: number): string {
  if (number >= 10000) {
    return (number / 10000).toFixed(0) + '万';
  }
  return number.toString();
}

export function formatPicSize(imgUrl: string, width: number, height?: number): string {
  const finalHeight = height !== undefined ? height : width; // 如果 height 未定义，则使用 width
  return `${imgUrl}?param=${width}x${finalHeight}`;
}

//处理毫秒数据例如100000 => 01:40
export function formatMinuteSecond(time: number): string {
  const totalSeconds = Math.floor(time / 1000); // 将毫秒转换为秒
  const minute = Math.floor(totalSeconds / 60); // 计算分钟
  const second = totalSeconds % 60; // 计算剩余的秒数
  return `${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
}
export function formatTime(time: number): string {
  const minutes = Math.floor(time / 60); // 获取分钟数
  const remainingSeconds = Math.floor(time % 60); // 获取剩余秒数

  // 格式化为两位数字，确保前面有零
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
