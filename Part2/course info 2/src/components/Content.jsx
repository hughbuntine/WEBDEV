import Part from './Part'
import Total from './Total'

const Content = ({ parts }) => (
    <>
        {parts.map((part) => (
            <Part key={part.id} part={part} />
        ))}
    <Total parts={parts} />
    </>
);

  export default Content