import Table from "../../components/table/Table"


function TablePage() {

    const lista = ([

        {
            id: 1,
            FirstName: 'Sim',
            LastName: 'Rohan',
            Gender: 'male',
            city: 'Emelieville'
        },

        {
            id: 2,
            FirstName: 'Hericles',
            LastName: 'Rocha',
            Gender: 'male',
            city: 'New York'
        },

        {
            id: 3,
            FirstName: 'Idileine',
            LastName: 'Barros',
            Gender: 'female',
            city: 'New York'
        },

    ])

    return(
        <div>
            <h1>Table Page</h1>
            <Table />
        </div>
    )
}

export default TablePage