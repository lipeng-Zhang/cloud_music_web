import styled from 'styled-components';

export const NewAlbumWrapper = styled.div`
  margin-top: 35px;

  & > .content {
    position: relative;
    height: 186px;
    margin: 20px 0 37px 0;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;

    .arrow {
      position: absolute;
      top: 70px;
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      left: 5px;
      background-position: -260px -75px;

      &:hover {
        background-position: -280px -75px;
      }
    }

    .arrow-right {
      right: 5px;
      background-position: -300px -75px;

      &:hover {
        background-position: -320px -75px;
      }
    }

    .banner {
      position: absolute;
      top: 32px;
      left: 20px;
      width: 645px;

      .newalbum_list {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
