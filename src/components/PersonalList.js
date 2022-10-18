import React from 'react';
import "../assets/css/contactList.css";
import PersonalCard from './PersonalCard';

const PersonalList = (props) => {
    var total=0;
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) =>{
        total += (JSON.parse(contact.duration));
        return(
            <PersonalCard 
                
                contact={contact} 
                clickHandler={deleteContactHandler} 
                key={contact.id}
            />
            
        );
    });
    return (
        <div className="List">
            <h1>Personal <p className='total'>{total} mins</p></h1>
            {renderContactList}
        </div>
    );
}

export default PersonalList;