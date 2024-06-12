import React, {useRef} from 'react';
import {firestore} from "../firebase";
import {addDoc, collection} from "@firebase/firestore";
import "../styles/home.css"

const Home = () => {
    const messageRef = useRef();
    const nameRef = useRef();
    const bidRef = useRef();
    const picRef = useRef();


    const ref = collection (firestore, "store");

    const handleSave = async (e) =>{
        e.preventDefault();
        console.log(messageRef.current.value);
        //console.log(nameRef.current.value);
        console.log(bidRef.current.value);
        console.log(picRef.current.value);

        let data = {
            message : messageRef.current.value,
            //nom : nameRef.current.value,
            bid : bidRef.current.value,
            pic : picRef.current.value,
    };

    try {
        addDoc (ref, data);
       } catch (e) {
        console.log(e); 
       }
    };
    

    return (
        <div className='box'>
            <h1>Home</h1>
            <form onSubmit={handleSave}>
                <label>Enter message (optional)</label>
                <input type='text' ref= {messageRef}/>
                <br/>
                {/*<label>Enter name</label>
                <input type='text' ref= {nameRef}/>
                */}
                <label>Enter bid</label>
                <input type='number' ref= {bidRef}/>
                <label>Enter pic</label>
                <input type='file' ref= {picRef}/>
                <button type='submit'>save</button>
            </form>
        </div>
    );
};

export default Home;