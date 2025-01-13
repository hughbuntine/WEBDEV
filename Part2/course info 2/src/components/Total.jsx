const Total = ({ parts }) => {
    let sum = 0;
    sum = parts.reduce((acc, part) => acc + part.exercises, 0);

    return <p style={{ fontWeight: 'bold' }}>total of exercises {sum}</p>;
};

export default Total;