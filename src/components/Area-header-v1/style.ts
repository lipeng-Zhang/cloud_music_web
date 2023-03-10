import styled from 'styled-components';

export const AreaHeaderV1Wraper = styled.div`
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #c10d0c;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    .title {
      float: left;
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }

    .keywords {
      display: flex;
      align-items: center;
      margin: 2px 0 0 20px;

      .item {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
        .divider {
          margin: 0 15px;
          color: #ccc;
        }

        &:last-child {
          .divider {
            display: none;
          }
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    .more {
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px; 
    }
  }
`;
