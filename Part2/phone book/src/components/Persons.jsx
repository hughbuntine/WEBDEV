const Persons = (props) => {
    const { persons, search } = props;

    const filteredPersons = persons.filter(person => {
        return person.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>
            {filteredPersons.map(person => (
                <p key={person.id}>
                    {person.name && person.name.toLowerCase()} {person.number}
                </p>
            ))}
        </div>
    );
};

export default Persons;