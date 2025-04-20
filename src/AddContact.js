import React, { useState } from 'react'

export default function AddContact({ addContactHandler }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name === "" || formData.email === "") {
            alert("Please fill required fields")
        }
        addContactHandler(formData)
        setFormData({ name: "", email: "" })
        console.log("clikc", formData)
    }
    return (
        <>
            <div className=''>
                <h4>Add Contact</h4>
                <form className='col-6 mx-auto border-solid' onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Name</label>
                        <input type="text" name='name' class="form-control" id="exampleInputPassword1" value={formData.name} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" class="btn btn-primary" >Submit</button>
                </form>
            </div>
        </>
    )
}
