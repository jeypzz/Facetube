import React from 'react';
import "../assets/css/contactList.css";
import WorkCard from './WorkCard';

const WorkList = (props) => {
    var total=0;
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) =>{
        total += (JSON.parse(contact.duration));
        return(
            <WorkCard 
                contact={contact} 
                clickHandler={deleteContactHandler} 
                key={contact.id}
            />
        );
    });
    return (
        <div className="List">
            <h1>Work <p className='total'>{total} mins</p></h1>
            {renderContactList}
        </div>
    );
}

export default WorkList;