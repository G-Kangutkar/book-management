import { useCallback, useEffect, useState } from "react";
import axiosService from "../Components/axiosService";


function Dashboard (){

    const {data, addData, getData, deleteData} = axiosService();

    const [formData,setFormData]=useState({
        id:Date.now(), title:'', author:'',status:'available'
    });

    useEffect(()=>{
        getData();
    },[getData])

    const handleFormData = useCallback((e)=>{
        e.preventDefault()
        const newBook={
            id:Date.now(),
            title:formData.title,
            author:formData.author,
            status:formData.status
        };
        addData(newBook);
        setFormData({id:Date.now(), title:'', author:'',status:'available'})

    },[formData,addData]);

    const handleInput=useCallback((e)=>{
        const {name,value} = e.target 
        setFormData(prev=>({
            ...prev,
            [name]:value
        }))
    },[])

    return(
        <div>
            <form onSubmit={handleFormData}>
                <input type="text" name="title" value={formData.title} placeholder="Enter Title" onChange={handleInput} /> <br />
                <input type="text" name="author" value={formData.author} placeholder="Enter Author" onChange={handleInput} />  <br />
                <select name="status" value={formData.status} onChange={handleInput}>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select> <br />
                <button type="submit">Add</button>
            </form>
            <div>
                {data.map(book=>(
                    <div key={book.id}>
                        <p>Title: {book.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Dashboard;