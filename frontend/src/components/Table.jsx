import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TableFooter, TablePagination, TableSortLabel, Paper
} from '@mui/material';
import {MDBInput} from 'mdb-react-ui-kit'; 
import { getUsers } from '../features/userAsyncThunks';

const UserTable = () => {

const dispatch = useDispatch()
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const {users,columns} = useSelector((state)=>state.users)

  useEffect(()=>{
    dispatch(getUsers())
  },[dispatch])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrderBy(property);
    setOrder(isAsc ? 'desc' : 'asc');
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = () => {
    if (searchQuery) {
      return users.filter(user =>
        Object.values(user).some(value =>
          typeof value === 'string' && value.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
    return users;
  };

  const sortedUsers = () => {
    const sorted = [...filteredUsers()].sort((a, b) => {
      if (order === 'asc') {
        return a[orderBy] < b[orderBy] ? -1 : 1;
      } else {
        return a[orderBy] > b[orderBy] ? -1 : 1;
      }
    });
    return sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  };

  return (
    <div style={{ height: 400, width: '100%', backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <MDBInput 
        type="text"
        label="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '10px' }}
      />
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field} style={{ backgroundColor: '#e0e0e0', color: '#333', fontSize: '16px' }}>
                  <TableSortLabel
                    active={orderBy === column.field}
                    direction={orderBy === column.field ? order : 'asc'}
                    onClick={() => handleRequestSort(column.field)}
                  >
                    {column.headerName}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedUsers().map((user) => (
              <TableRow key={user.id}>
                {columns.map((column) => (
                  <TableCell key={column.field} style={{ color: '#333', fontSize: '14px' }}>
                    {user[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, { label: 'All', value: -1 }]}
                colSpan={columns.length}
                count={filteredUsers().length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTable;
