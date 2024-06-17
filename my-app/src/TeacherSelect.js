import React from "react";

function TeacherSelect({ selectedTeacher, onChange, teachers }) {
  return (
    <label>
      Seleccionar profesor:
      <select value={selectedTeacher} onChange={onChange}>
        {teachers.map((teacher) => (
          <option value={teacher}>{teacher}</option>
        ))}
      </select>
    </label>
  );
}

export default TeacherSelect;
