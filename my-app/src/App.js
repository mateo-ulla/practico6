import React from "react";
import "./App.css";
function App() {
  const subjects = [
    {
      name: "Matemática",
      teacher: "Carlos González",
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
      teacher: "Ana Martínez",
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

  const filteredSubjects = subjects.filter((subject) => {
    const sumMarks = subject.marks.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    const averageMarks = sumMarks / subject.marks.length;
    return averageMarks > 6;
  });

  return (
    <div>
      <header className="App-header">
        <h3>Materias ciclo lectivo 2023</h3>
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
