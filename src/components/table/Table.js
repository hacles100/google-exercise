import './Table.css'

function Table(props) {

    return(
        <div>
            <h1>Tabelas</h1>
            <table>
  <tr>
    <th>Id</th>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Gender</th>
    <th>City</th>
  </tr>
  <tr>
    <td>{props.id[0]}</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>

</table>

        </div>
    )
}

export default Table