import { useCallback, useEffect, useState } from "react";
import axiosService from "../services/axiosService";
import BookCard from "../Components/BookCard";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";


function Dashboard (){

    const {data,setData, addData, getData, deleteData,updateData,toggleStatus} = axiosService();

    const [formData,setFormData]=useState({
         title:'', author:'',status:'Available',
        //   count:''
    });

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        getData();
    },[getData])

    const handleFormData = useCallback((e)=>{
        e.preventDefault()
        const newBook={
            // id:Date.now(),
            title:formData.title,
            author:formData.author,
            status:formData.status,
            // count: formData.count
        };
        addData(newBook);
        toast.success('📚 Book added successfully!')
        setFormData({//id:Date.now(),
             title:'', author:'',status:'Available',
            //  count:''
            })

    },[formData,addData]);

    const handleInput=useCallback((e)=>{
        const {name,value} = e.target 
        setFormData(prev=>({
            ...prev,
            [name]:value
        }))
    },[]);

     const filteredBooks = data.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <section>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className="flex flex-col lg:flex-row mt-16 sm:mt-20 min-h-screen">
            
            <div className="flex flex-col w-full lg:w-80 xl:w-96 bg-green-500" >
            <div>
           
            <form onSubmit={handleFormData} className="p-4 sm:p-6 md:p-8 m-4 sm:m-6 md:m-8 bg-green-700 rounded-lg ">
                <input type="text" name="title" value={formData.title} placeholder="Enter Title" onChange={handleInput} className="p-2 sm:p-3 m-1 bg-amber-50 rounded w-full"  /> <br />
                <input type="text" name="author" value={formData.author} placeholder="Enter Author" onChange={handleInput} className="p-2 sm:p-3 m-1 bg-amber-50 rounded w-full"  />  <br />
                <select name="status" value={formData.status} onChange={handleInput} className="p-2 sm:p-3 m-1 bg-amber-50 rounded w-full" > 
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                </select> <br /> 
                {/* <input type="text" name="count" value={formData.count} placeholder="Enter Count of books" onChange={handleInput} className="p-2 sm:p-3 m-1 bg-amber-50 rounded w-full"  /> */}
                <div className="flex justify-center ">
                    <button  type="submit" className="p-2 sm:p-3 m-1 text-white bg-rose-400 rounded w-full sm:w-auto px-6 hover:bg-rose-500 transition-colors">Add Book</button>
                </div>
                
            </form>
            </div>
            <div className="p-3 sm:p-4 m-3 sm:m-4 text-justify text-white">
                <h2 className="text-lg sm:text-xl font-semibold mb-3">Books Collection ({filteredBooks.length}/{data.length})</h2>
                {/* {data.map(book=>(
                    <div key={book.id} className="mt-2 text-sm sm:text-base">
                        <p> {book.title}</p> 
                    </div>
                ))} */}
                 <div className="max-h-96 overflow-y-auto">
                            {/* MODIFIED - Show filtered books */}
                            {filteredBooks.map(book => (
                                <div key={book.id} className="mt-2 text-sm sm:text-base bg-green-600 p-2 rounded flex justify-between">
                                    <p className="truncate">{book.title}</p> 
                                    {/* <span>{book.count}</span> */}
                                </div>
                            ))}
                            {/* ADDED - Show message when no results */}
                            {filteredBooks.length === 0 && (
                                <p className="text-center text-amber-100 mt-4">No books found</p>
                            )}
                        </div>
                     </div>
             </div>      
                        {/* Right Content - Book Cards Grid */}
                {/* <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-50"> */}
                    <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10">
                    {/* ADDED - Search info */}
                    {searchTerm && (
                        <div className="mb-4 p-3 bg-blue-100 border border-blue-300 rounded-lg">
                            <p className="text-sm sm:text-base text-blue-800">
                                Showing {filteredBooks.length} result(s) for "<span className="font-semibold">{searchTerm}</span>"
                                <button 
                                    onClick={() => setSearchTerm('')}
                                    className="ml-3 text-blue-600 hover:text-blue-800 underline text-xs sm:text-sm"
                                >
                                    Clear search
                                </button>
                            </p>
                        </div>
                    )}
                    {/* MODIFIED - Display filtered books */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                        {filteredBooks.map(book => (
                            <BookCard 
                                key={book.id} 
                                data={book} 
                                deleteData={deleteData} 
                                updateData={updateData} 
                                toggle={toggleStatus}
                            />
                        ))}

                    </div>
                     {/* ADDED - Empty state */}
                    {filteredBooks.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-xl text-gray-500">
                                {searchTerm 
                                    ? `No books found matching "${searchTerm}"`
                                    : 'No books available. Add your first book!'
                                }
                            </p>
                        </div>
                    )}
               </div> 
          </div>
          {/* <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                            {data.map(book=><BookCard key={book.id} data={book} deleteData={deleteData} setData={setData} updateData={updateData} toggle={toggleStatus} />)}
                            
            
                        </div> */}
        
        </section>



        

                    

    )

}
export default Dashboard;