import React, { useState } from "react";
import "./App.css";

function App() {
  const subjects = [
    {
      name: "Matemática",
      teacher: "Luis Fernández",
      marks: [8, 9, 7, 2],
      year: 2022,
      id: 0,
    },
    {
      name: "Lengua",
      teacher: "María Rodríguez",
      marks: [9, 10, 8],
      year: 2021,
      id: 1,
    },
    {
      name: "Programación II",
      teacher: "Jorge Pérez",
      marks: [10, 9, 10],
      year: 2023,
      id: 2,
    },
    {
      name: "Física",
      teacher: "Luis Fernández",
      marks: [6, 8, 7, 9],
      year: 2020,
      id: 4,
    },
    {
      name: "Informática Aplicada II",
      teacher: "Jorge Pérez",
      marks: [9, 8, 9],
      year: 2024,
      id: 5,
    },
    {
      name: "Química",
      teacher: "Elena Sánchez",
      marks: [7, 2, 3, 6],
      year: 2019,
      id: 6,
    },
  ];

  const [selectedTeacher, setSelectedTeacher] = useState("Jorge Pérez");

  const handleTeacherChange = (event) => {
    setSelectedTeacher(event.target.value);
  };

  const filteredSubjects = subjects.filter(
    (subject) => subject.teacher === selectedTeacher
  );

  return (
    <div>
      <header className="App-header">
        <h3>Materias dictadas por {selectedTeacher} </h3>
        <label>
          Seleccionar profesor:
          <select value={selectedTeacher} onChange={handleTeacherChange}>
            {subjects
              .map((subject) => subject.teacher)
              .map((teacher) => (
                <option key={teacher} value={teacher}>
                  {teacher}
                </option>
              ))}
          </select>
        </label>
        <ul>
          {filteredSubjects.map((subject) => (
            <li key={subject.id}>{subject.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
