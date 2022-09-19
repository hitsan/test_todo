import React, {useState, useRef, useEffect} from 'react'

const Letter = () => {
    const inputValue = useRef<HTMLInputElement>(null)
    const [name, setName] = useState<string>("")
    const handleClick = async () => {
        if (inputValue.current !== null) {
            setName(inputValue.current.value)
            const requestOptions ={
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({name: inputValue.current.value})
              }
            fetch("http://localhost:8000/send_message", requestOptions)
        }
    }
    return (
        <div>
            <input ref={inputValue} type="text" />
            <button onClick={handleClick}>submit</button>
            <p>{name}</p>
        </div>
    )

}

export default Letter