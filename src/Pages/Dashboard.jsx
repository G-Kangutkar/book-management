import { useCallback, useEffect, useState } from "react";
import axiosService from "../services/axiosService";
import BookCard from "../Components/BookCard";
import Navbar from "../Components/Navbar";


function Dashboard (){

    const {data,setData, addData, getData, deleteData,updateData,toggleStatus} = axiosService();

    const [formData,setFormData]=useState({
         title:'', author:'',status:'Available'
    });

    useEffect(()=>{
        getData();
    },[getData])

    const handleFormData = useCallback((e)=>{
        e.preventDefault()
        const newBook={
            // id:Date.now(),
            title:formData.title,
            author:formData.author,
            status:formData.status
        };
        addData(newBook);
        setFormData({//id:Date.now(),
             title:'', author:'',status:'Available'})

    },[formData,addData]);

    const handleInput=useCallback((e)=>{
        const {name,value} = e.target 
        setFormData(prev=>({
            ...prev,
            [name]:value
        }))
    },[])

    return(
        <section>
        <Navbar/>
        <div className="flex flex-col lg:flex-row mt-16 sm:mt-20 min-h-screen">
            
            <div className="flex flex-col w-full lg:w-80 xl:w-96 bg-green-500" >
            <div >
           
            <form onSubmit={handleFormData} className="p-4 sm:p-6 md:p-8 m-4 sm:m-6 md:m-8 bg-green-700 rounded-lg">
                <input type="text" name="title" value={formData.title} placeholder="Enter Title" onChange={handleInput} className="p-2 sm:p-3 m-1 bg-amber-50 rounded w-full"  /> <br />
                <input type="text" name="author" value={formData.author} placeholder="Enter Author" onChange={handleInput} className="p-2 sm:p-3 m-1 bg-amber-50 rounded w-full"  />  <br />
                <select name="status" value={formData.status} onChange={handleInput} className="p-2 sm:p-3 m-1 bg-amber-50 rounded w-full" > 
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                </select> <br /> <br />
                <div className="flex justify-center ">
                    <button  type="submit" className="p-2 sm:p-3 m-1 text-white bg-rose-400 rounded w-full sm:w-auto px-6 hover:bg-rose-500 transition-colors">Add Book</button>
                </div>
                
            </form>
            </div>
            <div className="p-3 sm:p-4 m-3 sm:m-4 text-justify text-white">
                <h2 className="text-lg sm:text-xl font-semibold mb-3">Books Collection</h2>
                {data.map(book=>(
                    <div key={book.id} className="mt-2 text-sm sm:text-base">
                        <p> {book.title}</p> 
                    </div>
                ))}
               </div> 
          </div>
          <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                            {data.map(book=><BookCard key={book.id} data={book} deleteData={deleteData} setData={setData} updateData={updateData} toggle={toggleStatus} />)}
                            
            
                        </div>
                </div>         
        </div>
        </section>



        

                    

    )

}
export default Dashboard;