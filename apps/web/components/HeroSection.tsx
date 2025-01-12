"use client"

import React from 'react';
import Button from './Button';
import clientLogger from '@/lib/clientLogger';

const HeroSection = () => {
    const [data, setData] = React.useState(null)
    const callAPIHandler = async () => {
       try{
        const response = await fetch("/api/public")
         const data = await response.json()
         console.log("data", data)
        setData(data)
       }catch(error){
        console.log("error", error)
       }
    }
    return (
        <div>
            <div className='flex gap-3 mt-5'>
            <Button className='bg-red-500 text-white py-2 px-4' onClick={()=> clientLogger.error("New Error occurred")}>Info</Button>
            <Button className='bg-green-500 text-white py-2 px-4' onClick={()=> clientLogger.info("This is the info log")}>info</Button>
            <Button className='bg-blue-500 text-white py-2 px-4' onClick={()=>callAPIHandler()}>API Call</Button>
        </div>

        <div className='mt-5'>
            {data && <p>{JSON.stringify(data)}</p>}
        </div>
        </div>
    );
};

export default HeroSection;