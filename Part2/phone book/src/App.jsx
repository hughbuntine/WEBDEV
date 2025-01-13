import { useState, useEffect} from 'react'
import PersonsService from './services/persons'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }

    PersonsService.create(personObject).then(response => {
      setPersons(persons.concat(response))
      setNewName('')
      setNewNumber('')
  }
  )
  }

  const deletePerson = (id) => {
    if (window.confirm('Do you really want to delete this person?')){
      PersonsService.deletePerson(id).then(response => {
      setPersons(persons.filter(person => person.id !== id))
    })
    }
    
  }


  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const person = persons.find(person => person.name === newName)
        const changedPerson = {...person, number: newNumber}
        PersonsService.update(person.id, changedPerson).then(response => {
          setPersons(persons.map(person => person.id !== changedPerson.id ? person : response))
          setNewName('')
          setNewNumber('')
        })
      }
      return
    }
    addPerson(event)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  // on startup, fetch data from the server
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={search} handleFilterChange={handleSearch}/>
      <h2>Add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handlePersonChange} handleNumberChange={handleNumberChange} addPerson={handleSubmit}/>
      <h2>Numbers</h2>
      <Persons persons={persons} deletePerson={deletePerson} search={search}/>
    </div>
  )

}
export default App