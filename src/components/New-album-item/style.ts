import styled from 'styled-components';

export const NewAblumItemWrapper = styled.div`
  margin-left: 11px;
  .top {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;

    img {
      width: 100px;
      height: 100px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-position: 0 -570px;
    }
  }

  .bottom {
    font-size: 12px;
    width: 100px;
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .artist {
      color: #666;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;
