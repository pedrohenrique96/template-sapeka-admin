import styled from 'styled-components';

export const Container = styled.div``;

export const Table = styled.table`
  flex: 1;
  width: 100%;
  thead {
    margin-bottom: 10px;
    tr {
      th {
        font-size: 16px;
        color: #444;
        text-align: start;
      }
    }
  }
  tbody {
    tr {
      height: 50px;
      width: 100%;
      td {
        font-size: 16px;
        color: #999;
        border-bottom: 1px solid #eee;

        img {
          max-height: 70px;
          padding: 5px;
        }
      }
    }
  }
`;
