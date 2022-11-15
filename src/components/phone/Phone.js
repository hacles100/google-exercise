
import { useRef, useState } from "react";
import './Phone.css';


function Phone() {

    const nameRef = useRef();
    const phoneRef = useRef();
    const searchRef = useRef();
    const [phoneBookList, setPhoneBookList] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [resultActive, setResultActive] = useState([]);
    


   function add() {

         
        const name = nameRef.current.value;
        const phone = phoneRef.current.value;
        // const date = dateRef.current.value;

        const foundContact = phoneBookList.find(newContact => newContact.name === name)

        if(foundContact!==undefined){
            alert('contact exist in list')
            return
        }

        const newContact = {
            name: name,
            phone: phone,
            createdAt: new Date()
        }

        phoneBookList.push(newContact);

        // phoneBookList.sort((a,b) => 
        // a.name.toLowerCase()>b.name.toLowerCase()?1:-1);


        // console.log(phoneBookList);

        setPhoneBookList([...phoneBookList.sort])
    }




        const editar = i => {
            const editContact = phoneBookList[i]
            nameRef.current.value = editContact.name
            phoneRef.current.value = editContact.phone
            removeFromList()
        }




    function search() {
        let results = [];
        const searchValue = searchRef.current.value;
        
        for (let contact of phoneBookList) {

    if(contact.name.toLowerCase().includes(searchValue.toLowerCase())) {
                results.push(contact);
            }
        }
        setSearchResult(results);
        setResultActive(true)
    }


    function clear() {
        
      searchRef.current.value = null
      setSearchResult([])
      setResultActive(false)
    
    }

    const removeFromList = i => {
        phoneBookList.splice(i, 1);
        // console.log(list);
        const newList = [...phoneBookList];
        setPhoneBookList(newList);
    }




    return <div className="wrapper">

     {phoneBookList.map((item, i) => <div
            key={i}
            name={item.name}
            phone={item.phone}

        />)}

        <div className="left">
            <div>
                <label>
                    Name:
                    <input ref={nameRef} type="text" />
                </label>
            </div>
            <div>
                <label>
                    Phone:
                    <input ref={phoneRef} type="tel" />
                </label>
                <button onClick={add}>Add</button>
            </div>

            <h4>My contact list:</h4>

            {phoneBookList.length===0 && <span>No contact in your phonebook!</span>}
        
            {phoneBookList.map((contact, i)=>
                <div key={i} className="contact-item">
                    Name: {contact.name}<br/>
                    Phone: {contact.phone} <br/>
                    createdAt: {contact.createdAt.toLocaleString()} <br/>
                    <button onClick={(e)=> removeFromList(i)}>Eliminar</button>
                    <button onClick={(e)=> editar(i)}>Editar</button>
                </div>
            )}
        </div>

        <div className="right">
            <input ref={searchRef} type="text" />
            <button onClick={search}>Search</button>
            <button onClick={clear}>Clear</button>

            <h4>Search result:</h4>
            
            <span>{resultActive}</span>
            {searchResult.map((contact, i)=>
                <div key={i} className="contact-item">
                    Name: {contact.name}<br/>
                    Phone: {contact.phone}
                </div>
            )}
            
        </div>
    </div>
}

export default Phone;