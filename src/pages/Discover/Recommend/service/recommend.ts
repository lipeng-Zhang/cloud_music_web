import myRequest from '@/service';

export function getBanners() {
  return myRequest.get({
    url: '/banner'
  });
}
