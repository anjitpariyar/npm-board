import React from "react";
import styled from "styled-components";

const Table = ({ data, columns }: { data: any[]; columns: any[] }) => {
  // console.log(data);

  return (
    <TableWrapper>
      {/* header loop */}
      <Thead>
        <Tr>
          {columns.map(({ title, dataIndex }) => {
            return <Th key={dataIndex}>{title}</Th>;
          })}
        </Tr>
      </Thead>
      {/* body loop */}
      <tbody>
        {data.map((item) => {
          return (
            <Tr key={item.id}>
              {columns.map(({ value, dataIndex }) => {
                return <Td key={dataIndex}>{value(item)}</Td>;
              })}
            </Tr>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

export default Table;

const TableWrapper = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr`
  &:hover {
    td {
      background-color: #f3f3f3;
    }
  }
`;
export const Td = styled.td`
  margin: 0;
  padding: 13px 14px;
  border-bottom: 1px solid #eee;
`;
export const Th = styled(Td).attrs({
  as: "th",
})`
  border-block: 2px solid #29367c;
  border-bottom-width: 1px;
`;
