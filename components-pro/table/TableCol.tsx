import React, { FunctionComponent, useContext, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { get } from 'mobx';
import { pxToRem } from 'choerodon-ui/lib/_util/UnitConvertor';
import { ElementProps } from '../core/ViewComponent';
import TableContext from './TableContext';
import { ColumnProps, columnWidth, minColumnWidth } from './Column';

export interface TableColProps extends ElementProps {
  column: ColumnProps;
  last: boolean;
}

const TableCol: FunctionComponent<TableColProps> = function TableCol(props) {
  const { column, last } = props;
  const { tableStore, prefixCls } = useContext(TableContext);
  const width = last && !tableStore.hasEmptyWidthColumn ? undefined : tableStore.overflowX ? columnWidth(column, tableStore) : get(column, 'width');
  const minWidth = minColumnWidth(column, tableStore);
  const style = useMemo(() => ({
    width: pxToRem(width, true),
    minWidth: pxToRem(minWidth, true),
  }), [width, minWidth]);
  return (
    <col
      className={`${prefixCls}-col`}
      style={style}
    />
  );
};

TableCol.displayName = 'TableCol';

export default observer(TableCol);
