import styled from 'styled-components';

export const SongItemWrapper = styled.div`
  width: 140px;
  margin: 15px 0;

  .top {
    position: relative;

    img {
      width: 140px;
      height: 140px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-position: 0 0;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 120px;
        height: 24px;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        background-position: 0 -537px;
        color: #ccc;

        .headset {
          display: inline-block;
          margin-right: 5px;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
        }

        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
        }
      }
    }
  }

  .bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }
`;
