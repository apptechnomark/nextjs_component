import React, { useRef, useState } from "react";
import ChevronDown from "./icons/ChevronDown";
import ChevronRight from "./icons/ChevronRight";
import SortIcon from "./icons/SortIcon";

interface AComponentProps {
  children: string;
}

interface BComponentProps {
  children: string;
}

interface ExpandableStyle {
  columns?: string;
  rows?: string;
}

interface Column {
  header: any;
  accessor: string;
  sortable: boolean;
  colStyle?: string;
  rowStyle?: string;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  align?: "left" | "center" | "right";
  expandable?: boolean;
  isExpanded?: boolean;
  expandableStyle?: ExpandableStyle;
  sticky?: boolean;
  hoverEffect?: boolean;
  noHeader?: boolean;
}

const DataTable = ({
  columns,
  data,
  align = "left",
  expandable,
  isExpanded = false,
  expandableStyle,
  sticky,
  hoverEffect,
  noHeader,
}: DataTableProps) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "" });
  const [expandedRows, setExpandedRows] = useState(new Set());

  const handleSort = (columnKey: any) => {
    let direction = "asc";
    if (sortConfig.key === columnKey && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: columnKey, direction });
  };

  const handleRowToggle = (rowIndex: any) => {
    const isRowExpanded = expandedRows.has(rowIndex);
    const newExpandedRows = new Set(expandedRows);

    if (isRowExpanded) {
      newExpandedRows.delete(rowIndex);
    } else {
      newExpandedRows.add(rowIndex);
    }

    setExpandedRows(newExpandedRows);
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;

    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (React.isValidElement(aValue) && React.isValidElement(bValue)) {
        const aProps = aValue.props as AComponentProps;
        const bProps = bValue.props as BComponentProps;
        const aPropValue = aProps.children;
        const bPropValue = bProps.children;

        console.log(aPropValue, bPropValue);

        if (typeof aPropValue === "string" && typeof bPropValue === "string") {
          return sortConfig.direction === "asc"
            ? aPropValue.localeCompare(bPropValue)
            : bPropValue.localeCompare(aPropValue);
        } else if (
          typeof aPropValue === "number" &&
          typeof bPropValue === "number"
        ) {
          return sortConfig.direction === "asc"
            ? aPropValue - bPropValue
            : bPropValue - aPropValue;
        }
      } else if (typeof aValue === "string" && typeof bValue === "string") {
        return sortConfig.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        return sortConfig.direction === "asc"
          ? aValue - bValue
          : bValue - aValue;
      } else {
        // Handle other data types here if needed
        return 0;
      }
    });

    return sorted;
  }, [data, sortConfig]);

  const getAlignment = (align: string) => {
    switch (align) {
      case "left":
        return "start";
        break;
      case "center":
        return "center";
        break;
      case "right":
        return "end";
        break;
      default:
        return "start";
        break;
    }
  };

  return (
    <div className="h-full overflow-auto">
      <table className="w-full">
        <thead>
          <tr
            className={`top-0 z-[1] bg-[#f2f2f2] ${
              sticky ? "shadow-md sticky" : "static"
            } ${noHeader ? "hidden" : ""}`}
          >
            {expandable && (
              <th className={`w-5 ${expandableStyle?.columns}`}></th>
            )}
            {columns?.map((column, colIndex) => (
              <th
                className={`${
                  column.colStyle
                } h-12 text-sm font-bold p-2 whitespace-nowrap ${
                  column.sortable ? "cursor-pointer" : "cursor-default"
                }`}
                key={colIndex}
                onClick={() => column.sortable && handleSort(column.accessor)}
              >
                {column.sortable ? (
                  <span
                    className={`flex items-center justify-${getAlignment(
                      align
                    )} gap-2`}
                  >
                    {column.header}
                    <SortIcon
                      order={
                        sortConfig.key === column.accessor &&
                        sortConfig.direction
                      }
                    />
                  </span>
                ) : (
                  <span
                    className={`flex items-center justify-${getAlignment(
                      align
                    )}`}
                  >
                    {column.header}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr className={`${hoverEffect ? "hover:bg-[#f2f2f2]" : ""}`}>
                {expandable && (
                  <td
                    className={`${expandableStyle?.rows} h-12 pl-2 border-b border-b-[#ccc] cursor-pointer`}
                    onClick={() => handleRowToggle(rowIndex)}
                  >
                    {expandedRows.has(rowIndex) || isExpanded ? (
                      <ChevronDown />
                    ) : (
                      <ChevronRight />
                    )}
                  </td>
                )}
                {columns?.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`${row?.style} ${column.rowStyle} h-12 text-xs p-2 border-b border-b-[#ccc] break-all`}
                  >
                    <span
                      className={`flex items-center justify-${getAlignment(
                        align
                      )}`}
                    >
                      {row[column.accessor]}
                    </span>
                  </td>
                ))}
              </tr>
              {(expandedRows.has(rowIndex) || isExpanded) && (
                <tr>
                  <td colSpan={columns.length + 1}>
                    {row.details ? (
                      row.details
                    ) : (
                      <div className={`m-3 ${expandableStyle?.rows}`}>
                        No data to display
                      </div>
                    )}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
