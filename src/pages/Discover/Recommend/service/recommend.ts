import myRequest from '@/service';

export function getBanners() {
  return myRequest.get({
    url: '/banner'
  });
}

export function getHotRecommend(limit = 30) {
  return myRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  });
}

export function getNewAlbum() {
  return myRequest.get({
    url: '/album/newest'
  });
}
