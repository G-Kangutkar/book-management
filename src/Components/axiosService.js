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

    const deleteData =useCallback(async(id)=>{
        try {
            const response = await api.delete(`/books/${id}.json`);
            setData(prev=>prev.filter(item=>item.id !== id));
            return response.data
            
        } catch (error) {
            console.log(error)
        }

    },[]);
    return {data, getData, addData,deleteData}
}
export default axiosService;