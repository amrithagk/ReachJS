import React, { useState } from 'react';
import axios from 'axios';
//import { Form, InputGroup } from 'react-bootstrap';

export default function RegistrationForm(){

        const [fname, setFname] = useState('');
        const [lname, setLname] = useState('');
        const [phno, setphno] = useState('');
        const [location, setLocation] = useState('');
        const [products, setProducts] = useState('');
        const [idproof, setIdproof] = useState('');
        const [idimg, setIdimg] = useState(null);
        
        function submitRegistration(event){
            event.preventDefault();
            const details =
            {
                fname:fname,
                lname:lname,
                phno:phno,
                location:location,
                products:products,
                idproof:idproof
            }

            console.log("details reg form", details)

            axios.post("http://localhost:3000/register", details)   //the port should be same as the server port
                .then(res=>console.log(res.data))
               
            //window.location = "/";

        }
        
        return(
            /*
            <>
            <Form>
                <Form.Group className="mb-3" controlId='email'></Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text"></Form.Control>
                <Form.Group className="mb-3" controlId='email'></Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"></Form.Control>
                <Form.Group className="mb-3" controlId='email'></Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text"></Form.Control>
                
            </Form>
            </>
            */
            <div>
                <div>Owner Details
                    <br/>
                    <form onSubmit={submitRegistration}>
                        <label class="formlabel">First Name</label>
                        <input class="inputbox" type="text" placeholder='First name' required
                        onChange={(e)=>setFname(e.target.value)}></input>
                        <br/>
                        <label class="formlabel">Last Name</label>
                        <input class="inputbox" type="text" placeholder='Last name'
                        onChange={(e)=>setLname(e.target.value)}></input>
                        <br/>
                        <label class="formlabel">Mobile Number</label>
                        <input type="tel" required 
                        onChange={(e)=>setphno(e.target.value)}></input>
                        <br/>
                        <label class="formlabel">Shop Location</label>
                        <textarea onChange={(e)=>setLocation(e.target.value)}></textarea>
                        <br/>
                        <label class="formlabel">Products</label>
                        <textarea onChange={(e)=>setProducts(e.target.value)}></textarea>
                        <br/>
                        <label class="formlabel">ID Proof</label>
                        <select class="select-idproof" name="idproof" onChange={(e)=>setIdproof(e.target.value)}>
                            <option selected>Select ID Proof</option>
                            <option>Aadhar Card</option>
                            <option>PAN Card</option>
                            <option>Voter ID</option>
                        </select>
                        <br/>
                        <input type="file" name="idimg" onChange={(e)=>{setIdimg(e.target.files[0])}}></input>
                        <br/>
                        <input type="checkbox" name="t&c" value="consent"/>
                        <label for="t&c">I agree to the <a href="termsandconditions.html">Terms and Conditions</a></label>
                        <br/>
                        <button type="submit">REGISTER</button>
                    </form>
                </div>            
            </div>
        )
}