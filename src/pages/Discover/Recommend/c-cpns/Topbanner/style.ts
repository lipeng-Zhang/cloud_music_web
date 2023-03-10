import styled from 'styled-components';

export const TopBannerWrapper = styled.div`
  height: 270px;
  display: flex;
  position: relative;
`;

export const TopBannerCenter = styled.div`
  margin: 0 auto;
  width: 982px;
  display: flex;
  position: relative;
`;
export const TopBannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`;

export const TopBannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  display: block;
  width: 254px;
  height: 270px;
  background: url(${require('@/assets/img/download.png')});
`;

export const TopBannerButton = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -31px;
  width: 37px;
  height: 63px;
  background-image: url(${require('@/assets/img/banner_sprite.png')});
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
