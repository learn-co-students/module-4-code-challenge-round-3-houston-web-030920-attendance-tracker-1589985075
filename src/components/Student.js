import React from "react";

const Student = (props) =>{

return (
  <tr style={{ textAlign: "center" }}>
    <td>{props.student.name}</td>
    <td>{props.student.class_year}</td>
    <td>{props.student.percentage}</td>
    <td>
      <input
        type="checkbox"
        checked={null /* if true, this checkbox will be checked! */}
        onClick={() => props.handleClick()}
      />
    </td>
  </tr>
);
}

export default Student;
