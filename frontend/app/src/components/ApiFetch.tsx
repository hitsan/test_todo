import React, {useState, useEffect} from 'react'
import { resourceLimits } from 'worker_threads'

const ApiFetch = () => {
    const [response, setResponse] = useState<Object>("")

    const fetchHello = async () => {
        try{
            const a = await fetch("http://localhost:8000")
            const b = await a.json()
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {fetchHello()},[response])

    return (
        <div>
            {Object.keys(response)}
            {Object.values(response)}
        </div>
    )
}

export default ApiFetch