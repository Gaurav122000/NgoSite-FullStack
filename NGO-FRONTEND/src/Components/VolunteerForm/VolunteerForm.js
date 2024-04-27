import Form from 'react-bootstrap/Form';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import "./VolunteerForm.css"
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function VolunteerForm() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let data = await fetch('http://127.0.0.1:3001/volunteer-form', { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, email, contact, age, gender, address }) })
            // console.log(data); 
        }
        catch (error) {
            console.log(error);
        }
    }

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [contact, setContact] = useState()
    const [age, setAge] = useState()
    const [gender, setGender] = useState()
    const [address, setAddress] = useState()



    return (
        <>
            <Header />
            <div className="volunteer">
                <div className="VolunteerForm">
                    <form className='form-volunteer' onSubmit={handleSubmit}>
                        <h2>Volunteer Form</h2>
                        <Form.Floating>
                            <Form.Control
                                id="name"
                                type="name"
                                placeholder="Full Name"
                                size='lg'
                                name='name'
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <label htmlFor="name">Full Name</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                size='lg'
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="email">Email address</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                id="contact"
                                type="text"
                                placeholder="Contacts"
                                size='lg'
                                name='contact'
                                onChange={(e) => setContact(e.target.value)}
                            />
                            <label htmlFor="contact">Mobile Number</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                id="age"
                                type="text"
                                placeholder="Age"
                                size='lg'
                                name='age'
                                onChange={(e) => setAge(e.target.value)}
                            />
                            <label htmlFor="age">Age</label>
                        </Form.Floating>
                        <FloatingLabel controlId="floatingSelect" label="Select Your Gender">
                            <Form.Select onChange={(e) => setGender(e.target.value)} name='gender' aria-label="Gender">
                                <option>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select>
                        </FloatingLabel>
                        <Form.Floating>
                            <Form.Control
                                id="address"
                                type="text"
                                placeholder="Address"
                                size='lg'
                                name='address'
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <label htmlFor="address">Address</label>
                        </Form.Floating>
                        <Button className='btn' type='submit' size='lg' variant="success">Be a Volunteer</Button>
                    </form>
                </div>
            </div>
            
            <Footer />
        </>
    );
}

export default VolunteerForm