import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../redux/slices/contactSlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

function ContactList() {

    const contacts = useSelector((state) => state.contactSlice.contacts);

    const [contactData, setcontactData] = useState([])
    const [editedContact, setEditedContact] = useState({ id: '', name: '', phone: '', email: "" });
    const dispatch = useDispatch()
    useEffect(() => {
        setcontactData(contacts)
    }, [contacts]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setEditedContact({ id: item.id, name: item.name, phone: item.phone, email: item.email });
        setShow(true);
    };


    const handleEdit = () => {
        dispatch(editContact({ id: editedContact.id, updatedData:editedContact }))
        setEditedContact({ id: '', name: '', phone: '', email: "" })
        handleClose()
    }

    return (
        <>
            <div className="container w-100 mt-5">
                <div className='container w-75 '>
                   
                    {contactData.length > 0 ?
                        <div>

                            <div className="row text-center bg-light shadow border p-5">
                                {contactData.map((item) => (
                                    
                                <Table  className='border-light' hover>
                                <thead>
                                  <tr>
                                    <th></th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th></th>

                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td><button className='btn btn-outline-light' ><i className="fa-solid fa-pen ms-2" style={{color: "blue",}} onClick={() => { handleShow(item) }} /></button></td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td><button className='btn btn-outline-light' >Delete<i className="fa-solid fa-trash ms-2" style={{color: "red",}} onClick={() => { dispatch(deleteContact(item.id)) }} /></button>
                                    </td>
                                  </tr>
                                  
                                </tbody>
                              </Table>

                        ))}
                            </div>
                        </div>
                        :
                        <div >
                            <div >
                                <h6 className='d-flex justify-content-center align-items-center'>No contacts available</h6>
                            </div>
                        </div>
                    }
                </div>

            </div >


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='img-fluid d-flex justify-content-center' >
                        <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" alt="" style={{height:"200px ",width:"200px"}}/>
                    </div>
                    <Form.Control  value={editedContact.id}></Form.Control>
                    <FloatingLabel controlId="floatingName" label="Name" className="mb-3"  >
                        <Form.Control type="text" placeholder="Name" value={editedContact.name}
                            onChange={(e) => setEditedContact({ ...editedContact, name: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea" label="Mobile" className="mb-3">
                        <Form.Control as="textarea" placeholder="Mobile Number" value={editedContact.phone}
                            onChange={(e) => setEditedContact({ ...editedContact, phone: e.target.value })} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea" label="Email" className="mb-3">
                        <Form.Control as="textarea" placeholder="Email" value={editedContact.email}
                            onChange={(e) => setEditedContact({ ...editedContact, email: e.target.value })} />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEdit} >Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ContactList

