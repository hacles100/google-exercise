import { useState } from "react"

import './Pagination3.css'

function Pagination3(){

    const person = ([

        {
            name: 'Abel',
            age: 22,
            bio: 'likes to go to the beach',
            email: 'abel@gmail.com'
        },

        {
            name: 'Suzana',
            age: 23,
            bio: 'likes to go to the beach',
            email: 'Suzanna@gmail.com'
        },

        {
            name: 'Luiz',
            age: 24,
            bio: 'likes to go to the beach',
            email: 'Luiz@gmail.com'
        },

        {
            name: 'Arcy',
            age: 25,
            bio: 'likes to go to the beach',
            email: 'Arcy@gmail.com'
        },

        {
            name: 'Joao',
            age: 26,
            bio: 'likes to go to the beach',
            email: 'Joao@gmail.com'
        },
    ])

    let [pos, setPos] = useState(0)


    function next() {

        setPos(pos+1)
    }


    function previous() {

        setPos(pos-1)
    }

    return(
        <div>

            <div className="top-menu">
                 {person.map((item, i)=> 
                    <div key={i}>{item.name}</div>
                 )}
            </div>


            <div className="display-info">
                <button onClick={previous}>Previous</button>
                <div>
                    Name: {person[pos].name}
                    Age: {person[pos].age}
                    Bio: {person[pos].bio}
                    Email: {person[pos].email}
                </div>
                <button onClick={next}>Next</button>
            </div>


        </div>

       
    )
}

export default Pagination3