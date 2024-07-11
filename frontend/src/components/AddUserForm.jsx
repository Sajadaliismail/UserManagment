import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBInput,
  MDBModal,
  MDBValidation,
  MDBValidationItem
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { setClose, setOpen } from '../features/usersSlice';
import { addUser } from '../features/userAsyncThunks';

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');

  // Redux state to manage modal open/close
  const { open } = useSelector((state) => state.users);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!firstName || !lastName || !email || !age || !gender) {
      setError('Please fill in all fields.');
      return;
    }

    // Dispatch action to add user (using async thunk)
    dispatch(addUser({ first_name: firstName, last_name: lastName, email, age, gender }));
    dispatch(setClose());

    // Clear form fields and error state
    setFirstName('');
    setLastName('');
    setEmail('');
    setAge(null);
    setGender('');
    setError('');
  };

  // Function to toggle modal open/close state
  function toggleModal() {
    dispatch(setOpen());
  }

  return (
    <MDBModal open={open} onClose={toggleModal} tabIndex='-1'>
      <MDBValidation>
        <MDBCard className="bg-dark text-white m-4 mx-auto mt-5 p-3" style={{ width: "500px", maxWidth: "90vw" }}>
          <MDBIcon
            icon="close"
            onClick={toggleModal}
            className="mx-3 my-2"
            style={{ cursor: "pointer", position: "absolute", right: "0", top: "0" }}
          />
          <MDBCardBody className="px-5">
            <h4 className="text-uppercase text-center mb-3">
              Add a User
            </h4>
            {/* First Name input with validation */}
            <MDBValidationItem tooltip feedback="Please type first name." invalid={error}>
              <MDBInput
                onChange={(e) => setFirstName(e.target.value)}
                className="text-white bg-dark"
                wrapperClass="mb-4"
                value={firstName}
                labelClass="text-white"
                label="First Name"
                size="lg"
                id="form1"
                type="text"
                required
              />
            </MDBValidationItem>
            {/* Last Name input with validation */}
            <MDBValidationItem tooltip feedback="Please type last name." invalid={error}>
              <MDBInput
                onChange={(e) => setLastName(e.target.value)}
                className="text-white bg-dark"
                wrapperClass="mb-4"
                value={lastName}
                labelClass="text-white"
                label="Last Name"
                size="lg"
                id="form2"
                type="text"
                required
              />
            </MDBValidationItem>
            {/* Email input with validation */}
            <MDBValidationItem tooltip feedback="Mail id is needed." invalid={error}>
              <MDBInput
                onChange={(e) => setEmail(e.target.value)}
                className="text-white bg-dark"
                wrapperClass="mb-4"
                value={email}
                labelClass="text-white"
                label="Email address"
                size="lg"
                id="form3"
                type="email"
                required
              />
            </MDBValidationItem>
            {/* Age input with validation */}
            <MDBValidationItem tooltip feedback="Please enter the age." invalid={error}>
              <MDBInput
                onChange={(e) => setAge(e.target.value)}
                className="text-white bg-dark"
                wrapperClass="mb-4"
                value={age}
                labelClass="text-white"
                label="Age"
                size="lg"
                id="form4"
                type="number"
                required
              />
            </MDBValidationItem>
            {/* Gender select with validation */}
            <MDBValidationItem tooltip feedback="Please choose a gender." invalid={error}>
              <Form.Select
                className="text-white bg-dark mb-4"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                aria-label="Select Gender"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Select>
            </MDBValidationItem>
           
            {/* Display error message if there is an error */}
            {error && <p className="text-danger">{error}</p>}
            
            {/* Submit button */}
            <MDBBtn
              type="submit"
              onClick={handleSubmit}
              className="mb-4 w-100 gradient-custom-4"
              size="lg"
            >
              Add User
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBValidation>
    </MDBModal>
  );
};

export default AddUserForm;
