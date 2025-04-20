import React from 'react'

export default function contactCard(props) {
    console.log("contactCard",props.contact)
    const {id, name, email} = props.contact
    console.log(props)
    
    const handleDelete =(id) => {
        console.log("id",id)
        props.onDelete(id);
    }
    return (
        <div>
            <div className='content p-2 flex w-100'>
                <img src='img.png' className='h-15 rounded-5'/>
                <div className='ml-2'>    
                <div className='header font-bold'>{name}</div>
                <div className='header'>{email}</div>
                </div>
                <button className='btn btn-danger' onClick={() => props.clickHander(id)}>Delete</button> 

            </div>
        </div>
    )
}
