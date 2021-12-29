import React from 'react'
import IconButton from '@mui/material/IconButton'
import TablePagination from '@mui/material/TablePagination'

interface ITableProps {
  headerName: Array<any>
  data: Array<any>
  linkClicked: any
  actionList: Array<IActionButton>
}

export interface IActionButton {
  icon: any
  label?: string
  action: any
  route: string
}

export default function CommonTable(props: ITableProps): JSX.Element {
  const [page, setPage] = React.useState(2)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {props.headerName.map((item, i) => {
                    return (
                      <th
                        scope="col"
                        key={i}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {item.displayName}
                      </th>
                    )
                  })}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.data.map((tableData, index) => (
                  <tr key={'tr' + index}>
                    {props.headerName.map((item, i) => {
                      if (item.displayName === 'Action') {
                        return (
                          <td
                            key={'tr' + index + 'td' + i}
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium"
                          >
                            {props.actionList.map((actionItem, actionIndex) => {
                              return (
                                <IconButton
                                  key={'tr' + index + 'td' + i + 'btn' + actionIndex}
                                  onClick={() => {
                                    props.linkClicked(tableData, actionItem)
                                  }}
                                >
                                  {actionItem.icon}
                                </IconButton>
                              )
                            })}
                          </td>
                        )
                      } else {
                        return (
                          <td
                            key={'tr' + index + 'td' + i}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {tableData[item.parameterName]}
                          </td>
                        )
                      }
                    })}
                  </tr>
                ))}
                <tr>
                  <td colSpan={props.headerName.length}>
                    <TablePagination
                      component="div"
                      count={100}
                      page={page}
                      onPageChange={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
