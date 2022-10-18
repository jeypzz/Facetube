import React, {useState, useEffect} from "react";
import { v4 as uuid } from "uuid";
import WorkLogger from "./WorkLogger";
import PersonalList from "./PersonalList";
import WorkList from "./WorkList";
import "../assets/css/contactList.css";

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [personal, setPersonal] = useState(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
        );
    const [work, setWork] = useState(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
        );
    
    const addPersonalHandler = (contact) => {
        setPersonal([...personal, { id: uuid(), ...contact }]);
    }
    const removePersonalHandler = (id) => {
        const newPersonalList = personal.filter((contact) => {
          return contact.id !== id;
        });
        setPersonal(newPersonalList);
    };

    const addWorkHandler = (contact) => {
        setWork([...work, { id: uuid(), ...contact }]);
    }
    const removeWorkHandler = (id) => {
        const newWorkList = work.filter((contact) => {
          return contact.id !== id;
        });
        setWork(newWorkList);
    };

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(personal));
    },[personal]);

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(work));
    },[work]);
    
  return (
    <div className='container'>
        <WorkLogger addPersonalHandler={addPersonalHandler} addWorkHandler={addWorkHandler}/>
        <div className="row">
            <PersonalList contacts={personal} getContactId={removePersonalHandler}/>
            <WorkList contacts={work} getContactId={removeWorkHandler}/>
        </div>
        
    </div>
  );
}

export default App;