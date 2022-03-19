"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Th = exports.Td = exports.Tr = exports.Tbody = exports.Thead = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const Table = ({ data, columns }) => {
    // console.log(data);
    return (react_1.default.createElement(TableWrapper, null,
        react_1.default.createElement(exports.Thead, null,
            react_1.default.createElement(exports.Tr, null, columns.map(({ title, dataIndex }) => {
                return react_1.default.createElement(exports.Th, { key: dataIndex }, title);
            }))),
        react_1.default.createElement("tbody", null, data.map((item) => {
            return (react_1.default.createElement(exports.Tr, { key: item.id }, columns.map(({ value, dataIndex }) => {
                return react_1.default.createElement(exports.Td, { key: dataIndex }, value(item));
            })));
        }))));
};
exports.default = Table;
const TableWrapper = styled_components_1.default.table `
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;
exports.Thead = styled_components_1.default.thead ``;
exports.Tbody = styled_components_1.default.tbody ``;
exports.Tr = styled_components_1.default.tr `
  &:hover {
    td {
      background-color: #f3f3f3;
    }
  }
`;
exports.Td = styled_components_1.default.td `
  margin: 0;
  padding: 13px 14px;
  border-bottom: 1px solid #eee;
`;
exports.Th = (0, styled_components_1.default)(exports.Td).attrs({
    as: "th",
}) `
  border-block: 2px solid #29367c;
  border-bottom-width: 1px;
`;
