
import { useState } from "react"
import Table from "../../components/table/Table"
import Time from "../../components/time/Time";


function TablePage() {

    const [listOfPersons, setListOfPerson] = useState([
        {
           firstName:'Bruno',
           lastName:'Cardoso',
           gender:'Male',
        },
        {
           firstName:'Joana',
           lastName:'Fernandes',
           gender:'Female',
        },
        {
           firstName:'Pedro',
           lastName:'Garcia',
           gender:'Male',
        },
        {
           firstName:'Ilda',
           lastName:'Barbosa',
           gender:'Female',
        },
        {
           firstName:'Mira',
           lastName:'Sanches',
           gender:'Female',
        }
    ])

    
    function removeFromList(i) {
        listOfPersons.splice(i, 1);

        const newList = [...listOfPersons];
        setListOfPerson(newList);
    }

    return <>
        <h1>My table page</h1>  <br/>

        <Time/>
        <br/>
        <Table list={listOfPersons} rm={removeFromList}/>

    </>
}

export default TablePage;