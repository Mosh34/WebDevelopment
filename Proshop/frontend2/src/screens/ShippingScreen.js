import React,{ useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FromContainer from '../components/FormContainer'
//import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import FormContainer from '../components/FormContainer'



function ShippingScreen() {
    
  return (
    <FormContainer>
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>

            <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder='Enter address'
                    value={address ? address : ''}
                    onChange={(e) => setAddress(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='city'>
                <Form.Label>City</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder='Enter city'
                    value={city ? city : ''}
                    onChange={(e) => setCity(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='city'>
                <Form.Label>City</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder='Enter city'
                    value={city ? city : ''}
                    onChange={(e) => setCity(e.target.value)}>
                    </Form.Control>
            </Form.Group>

            <Form.Group controlId='postalCode'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder='Enter postal code'
                    value={postalCode ? postalCode : ''}
                    onChange={(e) => setPostalCode(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='country'>
                <Form.Label>Country</Form.Label>
                <Form.Control
                    required
                    type='txt'
                    placeholder='Enter country'
                    value={country ? country : ''}
                    onChange={(e) => setCountry(e.target.value)}
                    ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
                Continue
            </Button>
        </Form>
    </FormContainer>
  )
}

export default ShippingScreen