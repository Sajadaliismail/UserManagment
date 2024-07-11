import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { setOpen } from '../features/usersSlice';

export default function Navbar() {
    const dispatch = useDispatch()
  const [openNavSecond, setOpenNavSecond] = useState(false);

  function toggleModal(){
    dispatch(setOpen())
  }

  return (
    <MDBNavbar   expand='lg' dark  bgColor='dark'>
      <MDBContainer   >
        <MDBNavbarBrand  className='mx-auto'>Finzie - User Management System</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        
      </MDBContainer>
      <MDBBtn onClick={toggleModal} className='me-5'>Add user</MDBBtn>
    </MDBNavbar>
  );
}