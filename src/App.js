import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Practice from "./Practice";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">

      <div  className="min-h-screen lg:ml-2 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 lg:p-10 md:p-10  sm:p-0 flex justify-center">
        <div className={`w-full max-w-6xl ${contacts.length > 0 ? "flex flex-col md:flex-row gap-10" : ""}`}>

          {/* Add Contact Form */}
          <div className={`transition-all duration-700 ease-in-out ${contacts.length > 0 ? "md:w-1/2" : "w-full"
            }`}>
            <div className="bg-white rounded-xl shadow-lg lg:p-8 animate-slide-in">
              {/* <h2 className="text-2xl font-bold text-center mb-6">Add Contact</h2> */}
              <AddContact addContactHandler={addContactHandler} />
            </div>
          </div>

          {/* Contact List */}
          {contacts.length > 0 && (
            <div className="md:w-1/2 space-y-4 animate-fade-in">
              <ContactList contacts={contacts} getContactId={removeContactHandler} />
            </div>
          )}

        </div>
      </div>


      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    </div>

    // <Practice />
  );
}

export default App;
