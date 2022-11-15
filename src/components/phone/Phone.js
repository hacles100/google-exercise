
import { useRef, useState } from "react";
import './Phone.css';


function Phone() {

    const nameRef = useRef();
    const phoneRef = useRef();
    const searchRef = useRef();
    const [phoneBookList, setPhoneBookList] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    console.log(phoneBookList);


    function add() {
        const name = nameRef.current.value;
        const phone = phoneRef.current.value;

        const newContact = {
            name: name,
            phone: phone
        }

        phoneBookList.push(newContact);

        console.log(phoneBookList);

        setPhoneBookList([...phoneBookList]);
    }

    function search() {
        let results = [];
        const searchValue = searchRef.current.value;
        
        for (let contact of phoneBookList) {

    if(contact.name.toLowerCase() == searchValue.toLowerCase()) {
                results.push(contact);
            }
        }
        setSearchResult(results);
    }


    function clear() {
        
      searchRef.current.value = null
      setSearchResult([])
    
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
            // remove={() => removeFromList(i)}
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
            {phoneBookList.map((contact, i)=>
                <div key={i} className="contact-item">
                    Name: {contact.name}<br/>
                    Phone: {contact.phone} <br/>
                    <button onClick={(e)=> removeFromList(i)}>Eliminar</button>
                </div>
            )}
        </div>

        <div className="right">
            <input ref={searchRef} type="text" />
            <button onClick={search}>Search</button>
            <button onClick={clear}>Clear</button>

            <h4>Search result:</h4>

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