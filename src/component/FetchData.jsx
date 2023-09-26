import React from 'react'
import { useEffect,useState } from "react";
import axios from 'axios'
import Table from 'react-bootstrap/Table';

function FetchData() {
    const [records,setRecords] =useState([])
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => (setRecords(res.data)))
        .catch(err => console.log(err))
    },[])
   
  return (
    <div className='container-fluid'>
        <div className="container mt-5">
        <Table responsive className='table table-hover table-dark border border-5 border-dark mt-5'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Zipcode</th>
                    
                </tr>
            </thead>
            <tbody className='table-info'>
                {records.map((r,i)=>(
                    <tr key={i}>
                        <td>{r.name}</td>
                        <td>{r.email}</td>
                        <td>{r.address.city}</td>
                        <td>{r.address.zipcode}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
    </div>

  )
}

export default FetchData;