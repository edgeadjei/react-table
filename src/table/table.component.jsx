// React Modules
import React, {useState, useEffect, useLayoutEffect} from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

// Application Modules
import Tr from "./tr.component.jsx";
import Thead from "./thead.component.jsx";
import Tfoot from "./tfoot.component.jsx";
import Util from "../helpers/util.js";
import * as Styles from "./table.stylesheet.js";

const Theme = {primaryColor: "#c0392b", secondaryColor: "#fafafa", borderColor: "#f0f0f0"};

const Table = (props) => {
  const { data, manual, noDataText, loading, loadingText, activeRow, dynamicFooter, height, hideHeader, showIndex, selectable, count, theme} = props;
  const [state, setState] = useState({
    sort: props.defaultSort,
    sortable: props.sortable || true,
    filter: props.defaultFilter,
    filterable: props.filterable || false,
    page: props.defaultPage || 1,
    pageSize: props.defaultPageSize || 25,
    pageSizeOptions: [25, 50, 100]
  });
  const { sortable, sort, filterable, filter, pageSize, pageSizeOptions, page } = state;

  // Use state for internal table state
  const [table, setTable] = useState({columns: props.columns});

  // Use effect to handle state change events
  useEffect(() => {
    if (props.onStateChange) props.onStateChange({...state, columns: table.columns})
  }, [sort, filter, page, pageSize]);

  // Use effect to generate table
  useLayoutEffect(() => {
    generateTable();
  }, [data, sort, filter, page, pageSize]);

  // Generate table
  const generateTable = () => {
    if(!data || !data.length) return null;
    var columns = table.columns;
    if (!columns || !columns.length) columns = Util.generateTableColumns(data);
    const { rows, processedTable } = new Util(data, columns, manual).filter(filter).sort(sort).limit(pageSize, page);
    setTable({...table, rows, processedTable, columns});
  }

  // Resize table event handler
  const resizeTable = ({column, width}) => {
    const columns = table.columns.map((currentColumn) => {
      if(currentColumn.id === column) {
        currentColumn.width = width;
        currentColumn.maxWidth = width;
      }
      return currentColumn
    })
    const update = {...table, columns}
    setTable(update);
  }

  // On sort action handler
  const onSortAction = ({target}) => {
    var update = {...state, page: 1, sort: JSON.parse(target.value)};
    if (props.onSortChange) props.onSortChange(update.sort)
    setState(update);
  }

  // On filter action handler
  const onFilterAction = ({target}) => {
    const value = (target.value ? target.value : undefined);
    // Set filter value
    var filter;
    if (state.filter && value) filter = {...state.filter, [target.name]: value }
    else if (state.filter && !value) { 
      delete state.filter[target.name]
      filter = {...state.filter}
    }
    else filter = { [target.name]: value };

    const update = { ...state, page: 1, filter};
    if (props.onFilterChange) props.onFilterChange(update.filter)

    setState(update);
  }

  // On page size action handler
  const onPageSizeAction = ({target}) => {
    var update = {...state, page: 1, pageSize: parseInt(target.value)};
    if (props.onPageSizeChange) props.onPageSizeChange(update.pageSize)
    setState(update);
  }

  // On paginate action handler
  const onPaginateAction = ({target}) => {
    if (state.page === parseInt(target.value)) return;
    var update = {...state, page: parseInt(target.value)};
    if (props.onPageChange) props.onPageChange(update.page)
    setState(update);
  }

  const selectAllRows = () => {
    if (props.onSelectAllRows) props.onSelectAllRows(table.rows)
  }

  const selectRow = (row) => {
    if(props.onRowSelection) props.onRowSelection(row)
  }

  const renderNoData = () => {
    if (!table.rows && !loading || table.rows && !table.rows.length && !loading) return (
      <Styles.NoData className="tc-no-data">
        <Styles.Message className="tc-message-text">{noDataText ? noDataText : "No records found"}</Styles.Message>
      </Styles.NoData>
    )
  }

  const renderLoader = () => {
    if (loading) return (
      <Styles.Overlay className="tc-overlay">
        <Styles.Message className="tc-message-text">{loadingText ? loadingText : "Loading..."}</Styles.Message>
      </Styles.Overlay>
    )
  }

  const renderTr = () => {
    if (!table.rows || !table.rows.length) return;
    return table.rows.map((row, index) => {
      const hasActiveRow = activeRow && activeRow.id && activeRow.value;
      const activeRowValue = hasActiveRow && row[activeRow.id];
      const isActiveRow = hasActiveRow && activeRow.value === activeRowValue;
      return <Tr
        columns={table.columns}
        key={index}
        row={row}
        index={(pageSize ? ((page - 1) * pageSize) + index : index)}
        showIndex={showIndex}
        selectable={selectable}
        selectRow={selectRow}
        activeRow={isActiveRow}/>
    })
  }

  return(
    <ThemeProvider theme={{...Theme, ...theme}}>
      <Styles.Container className="react-table">
        <Styles.Table className="tc-table" style={{height}}>
          {!hideHeader ?
            <Thead
              columns={table.columns}
              showIndex={showIndex}
              selectable={selectable}
              filter={filter}
              filterable={filterable}
              filterTable={onFilterAction}
              sort={sort}
              sortable={sortable}
              sortTable={onSortAction}
              resizeTable={resizeTable}
              height={height}
              selectAllRows={selectAllRows}/>
          : null }
          <Styles.Body className="tc-tbody" height={height}>
            {renderNoData()}
            {renderTr()}
          </Styles.Body>
          <Tfoot
            columns={table.columns}
            count={count || table.processedTable && table.processedTable.length || 0}
            setPageSize={onPageSizeAction}
            page={page}
            pageSize={pageSize}
            pageSizeOptions={pageSizeOptions}
            paginateTable={onPaginateAction}
            dynamicFooter={dynamicFooter}/>
        </Styles.Table>
        {renderLoader()}
      </Styles.Container>
    </ThemeProvider>
  );
}

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  defaultFilter: PropTypes.object,
  filterable: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  defaultSort: PropTypes.object,
  sortable: PropTypes.array,
  // Events
  onSortChange: PropTypes.func,
  onFilterChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
  onPageChange: PropTypes.func,
  onSelectAllRows: PropTypes.func,
  onRowSelection: PropTypes.func,
  // Other Props
  showIndex: PropTypes.bool,
  activeRow: PropTypes.object,
  manual: PropTypes.bool,
  count: PropTypes.number,
  defaultPageSize: PropTypes.number,
  defaultPage: PropTypes.number,
  dynamicFooter: PropTypes.bool,
  noDataText: PropTypes.string,
  theme: PropTypes.object
}

export default Table;
