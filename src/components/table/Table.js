import "./Table.css";

function Table(props) {


  return <table>

      <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender Name</th>
      </thead>
      <tbody>
          {props.list.map((person, i) =>
              <tr key={i}>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.gender}</td>
                  <td><button onClick={() => props.rm(i)}>Remover</button></td>
              </tr>
          )}
      </tbody>

  </table>
}

export default Table;
