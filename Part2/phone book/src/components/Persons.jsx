const Persons = (props) => {
    const { persons, deletePerson, search} = props;

    const filteredPersons = persons.filter(person => {
        return person.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>
            {filteredPersons.map(person => (
                <p key={person.id}>
                    {person.name && person.name.toLowerCase()} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button>
                </p>
            ))}
        </div>
    );
};

export default Persons;