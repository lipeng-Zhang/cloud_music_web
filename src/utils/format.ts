export function formatCount(count: number) {
  if (count >= 100000) {
    return Math.floor(count / 10000) + 'w';
  } else {
    return count;
  }
}

export function getImageSize(imgUrl: string, width: number, height: number = width) {
  return imgUrl + `?${width}*${height}`;
}
