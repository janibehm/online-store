import axios from "axios"
import { useEffect } from "react"

export const useFetchData: any = () => {
    useEffect(()=> {
        const fetchDataFromApi = async () => {
           
                try{
                    const response = await axios.get('https://fakestoreapi.com/product')
                    const data = response.data
                    console.log(data)
                }
                
                catch(error){
                    console.log(error)
                }    
                };
            
            fetchDataFromApi()
            },[])
        }
    
       

