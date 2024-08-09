import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addContact, } from '../redux/slices/contactSlice';
import ContactList from './ContactList';


function ContactForm() {

    const [contactData, setcontactData] = useState({
        id: '', name: '', phone: '',email:""
    })
    const dispatch = useDispatch();


    const handleAddContact = () => {
        console.log(contactData)
        const {id, name, phone, email } = contactData
        if (!id|| !name || !phone || !email) {
            alert('Enter contact details')
        } else {
            dispatch(addContact(contactData))
            setcontactData({ id: '', name: '', phone: '',email })
            
        }
    }


    return (
        <>
            <div className='container w-50 p-5 shadow mt-5' style={{backgroundColor:"black",borderRadius:'10px'}}>
            <div className='container w-50 p-4' style={{borderRadius:'10px'}}>
                <FloatingLabel controlId="floatingInput" label="ID" className="mb-3">
                        <Form.Control type="text" placeholder="name@example.com" onChange={(e) => { setcontactData({ ...contactData, id: e.target.value }) }}/>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                        <Form.Control type="text" placeholder="name@example.com" onChange={(e) => { setcontactData({ ...contactData, name: e.target.value }) }} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Mobile Number" className="mb-3">
                        <Form.Control type="text" placeholder="Password" onChange={(e) => { setcontactData({ ...contactData, phone: e.target.value }) }} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="E-mail">
                        <Form.Control type="email" placeholder="Password" onChange={(e) => { setcontactData({ ...contactData, email: e.target.value }) }}/>
                </FloatingLabel>
            </div>

            <div className='p-5 text-center d-flex justify-content-center bg-black'>
                <button className='btn btn-outline-info'onClick={handleAddContact}>Add Contact</button>
                
            </div>
            </div>

            <ContactList/>
        </>
    )
}

export default ContactForm
