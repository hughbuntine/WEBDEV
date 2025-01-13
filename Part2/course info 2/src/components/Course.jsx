import Header from "./Header"
import Content from "./Content"

const Course = ({ courses }) => {
    return (
        <>
            {courses.map((courses) => (
                <div key={courses.id}>
                    <Header course={courses.name} />
                    <Content parts={courses.parts} />
                </div>
            ))}
        </>
    )
}

export default Course