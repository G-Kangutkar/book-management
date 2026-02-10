import { useCallback, useState } from "react";
import api from "./axiosInstance";

function axiosService(){
    const [data,setData]=useState([]);

    const getData=useCallback(async()=>{

        try {
            const response = await api.get(`/books.json`);
            if(response.data && typeof response.data === 'object'){
                const booksArray = Object.keys(response.data).map(key=>({
                    id:key,
                    ...response.data[key]
                }));
                setData(booksArray);
                return booksArray;
            }
            else{
                setData([]);
                return [];
            }
        } catch (error) {
            console.log(error)
            
        }

    },[]);

    const addData = useCallback(async(newData)=>{
        try {
            const response =await api.post(`/books.json`,newData);
            const newBookWithId = {
            id:response.data.name,
            ...newData
        }
        setData(prev=>[...prev,newBookWithId]);
        return newBookWithId;
            
        } catch (error) {
            console.log(error)
        }

    },[]);

    const updateData = useCallback(async(id, updatedFields)=>{
        try {
            // Use PATCH to update only specific fields
            const response = await api.patch(`/books/${id}.json`, updatedFields);
            
            // Update local state
            setData(prev => prev.map(item => 
                item.id === id ? { ...item, ...updatedFields } : item
            ));
            
            return response.data;
            
        } catch (error) {
            console.log('Update error:', error);
        }
    },[]);

     const toggleStatus = useCallback(async(id)=>{
        try {
            // First, get the current book data
            const currentBook = data.find(book => book.id === id);
            if (!currentBook) return;
            
            // Toggle the status
            const newStatus = currentBook.status === 'Available' ? 'Unavailable' : 'Available';
            
            // Update in Firebase
            const response = await api.patch(`/books/${id}.json`, { status: newStatus });
            
            // Update local state
            setData(prev => prev.map(book => 
                book.id === id ? { ...book, status: newStatus } : book
            ));
            
//             setData(prev =>
//   prev.map(book =>
//     book.id === id
//       ? {
//           ...book,
//           status: newStatus,
//           count: newStatus === "Available" ? book.count + 1 : book.count - 1
//         }
//       : book
//   )
// );

            return response.data;
            
        } catch (error) {
            console.log('Toggle status error:', error);
        }
    },[data]);

    const deleteData = useCallback(async(id)=>{
        try {
            console.log('id',id)
            const response = await api.delete(`/books/${id}.json`);
            setData(prev=>prev.filter(item=>item.id !== id));
            return response.data
            
        } catch (error) {
            console.log(error)
        }

    },[]);

    return {data,setData, getData, addData,deleteData,updateData,toggleStatus}
}
export default axiosService;