import Com from "./Com";
import propTypes from 'prop-types';

const Student = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <Com 
            name="Dhruvish" 
            text="Jadio"
        />
    </div>
  )
}

Student.prototype = {
    name : propTypes.number,
    age : propTypes.number,
}
export default Student;