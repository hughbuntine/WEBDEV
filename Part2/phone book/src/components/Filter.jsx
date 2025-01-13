const Filter = ({ filter, handleFilterChange }) => {
    return (
        <div>
        filter shown with <input placeholder="Search" value={filter} onChange={handleFilterChange}/>
        </div>
    )
    }

export default Filter