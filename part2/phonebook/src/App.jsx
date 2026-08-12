import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personService from './service/person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      const person = persons.find(person => person.name === newName)
      if (window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )) {
        handleModify(person, newNumber)
      }
      return
    }
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    personService.create(personObject)
      .then(response => {
        console.log('response', response)
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleChange = (setter) => (event) => setter(event.target.value)

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.erase(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          console.error('Error deleting person:', error)
        })
    }
  }

  const handleModify = (person, newNumber) => {
    const updatedPerson = { ...person, number: newNumber }
    personService.update(person.id, updatedPerson)
      .then(response => {
        setPersons(persons.map(p => p.id === person.id ? response : p))
      })
      .catch(error => {
        console.error('Error updating person:', error)
      })
  }

  const personsToShow = newSearch === '' ?
    persons :
    persons.filter(person =>
      person.name.toLowerCase().includes(newSearch.toLowerCase())
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={newSearch} handler={handleChange(setNewSearch)}/>
      <h3>Add a new</h3>
      <PersonForm
        name={newName}
        number={newNumber}
        handleName={handleChange(setNewName)}
        handleNumber={handleChange(setNewNumber)}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} handleDelete={handleDelete}/>
    </div>
  )
}

export default App
