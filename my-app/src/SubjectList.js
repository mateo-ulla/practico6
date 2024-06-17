import React from "react";
function SubjectList(props) {
  const subjets = props.list;
  return (
    <ul>
      {subjets.map((subject) => (
        <li key={subject.id}>{subject.name}</li>
      ))}
    </ul>
  );
}
export default SubjectList;
