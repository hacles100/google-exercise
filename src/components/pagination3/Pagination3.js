import Pagination from "../pagination/Pagination"

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


    return(
        <div>
            <h1>Pagination3</h1>
            
            {person.map((item)=> <Pagination
            name={item.name}
            age={item.age}
            bio={item.bio} 
            email={item.email}
            />)}


        </div>

       
    )
}

export default Pagination3