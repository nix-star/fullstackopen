const Persons = ({ persons, handleDelete }) =>
    <ul style={{listStyleType: 'none', padding: 0}}>
      {persons.map(person => <li key={person.id}>
        {person.name} {person.number} &nbsp;
        <button onClick={() => handleDelete(person.id)}>delete</button>
      </li>)}
    </ul>

export default Persons
