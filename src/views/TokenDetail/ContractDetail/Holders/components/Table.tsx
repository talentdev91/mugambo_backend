import React from 'react'
//material-ui components
import { TableRow, Box, Paper, TableContainer } from '@material-ui/core'
import { Link } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'
import TablePaginationActions from './TablePagination'
//style
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableControlBox,
  StyledLink,
  useStyles,
  StyledTablePagination,
} from '../../TableStyle'

interface CustomizedTableProps {
  tableInfo: () => void
  rowsPerPage: number
  page: number
  rows: any
  columns: { id: string; name: string }[]
  //   emptyRows: number
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void
}

const Holder: React.FC<CustomizedTableProps> = ({ tableInfo, rowsPerPage, page, rows, columns, handleChangePage }) => {
  const classes = useStyles()

  const onPageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    handleChangePage(event, newPage)
  }

  return (
    <div>
      <StyledTableControlBox mb="20px">
        <Box>{tableInfo}</Box>
        <Box>
          <StyledTablePagination
            colSpan={3}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onPageChange}
            ActionsComponent={TablePaginationActions}
          />
        </Box>
      </StyledTableControlBox>
      <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
        <StyledTable aria-label="custom pagination table">
          <StyledTableHead>
            <TableRow>
              {columns.map((column) => {
                if (column.name === 'Rank')
                  return <StyledTableCell key={column.id} style={{ textAlign: 'center' }}>{column.name}</StyledTableCell>
                else
                  return <StyledTableCell key={column.id}>{column.name}</StyledTableCell>
              })}
            </TableRow>
          </StyledTableHead>
          <StyledTableBody>
            {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(
              (row: any, key: any) => (
                <TableRow key={key}>
                  <StyledTableCell style={{ textAlign: 'center' }}>{key + 1}</StyledTableCell>
                  <StyledTableCell>
                    <StyledLink to={`/address/${row.address}`}>
                      {row.address}
                    </StyledLink>
                    {/* <StyledLink to={`/address/${row.address}`}>{row.address}</StyledLink> */}
                  </StyledTableCell>
                  <StyledTableCell>{row.balance}</StyledTableCell>
                  <StyledTableCell>
                    {row.percent}%
                    <LinearProgress variant="determinate" value={row.percent} className={classes.linearProgress} />
                  </StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>
                    <StyledLink to="/txs">
                      <span className={classes.analytic}>
                        <i className="fas fa-chart-line"></i>
                      </span>
                    </StyledLink>
                  </StyledTableCell>
                </TableRow>
              ),
            )}
          </StyledTableBody>
        </StyledTable>
      </TableContainer>
      <StyledTableControlBox my="12px">
        <Box></Box>
        <Box>
          <Box>
            <StyledTablePagination
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onPageChange}
              ActionsComponent={TablePaginationActions}
            />
          </Box>
          <Box className={classes.tooltipdown}>
            [Download&nbsp;
            <span>
              <Link to="#" style={{ textDecoration: 'none', color: '#e84142' }}>
                CSV Exoort&nbsp;
              </Link>
              <i className="fas fa-download"></i>
            </span>
            ]
          </Box>
        </Box>
      </StyledTableControlBox>
    </div>
  )
}

export default Holder
