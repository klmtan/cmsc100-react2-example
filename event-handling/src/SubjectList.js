import { useState } from "react";

export function SubjectList(props) {
  const SubjectList = props.list;
  const [subjects, setSubjects] = useState(SubjectList);

  function addSubject() {
    setSubjects((subjects) => {
      const nval = [...subjects, { code: "CMSC 22", desc: "OOP" }]
      return nval;
    })
  }

  return (
    <>
      <p> Show list: </p>
      <ol>
        {
          subjects.map((subject) => {
            return <li key={subject.code}>{subject.code} - {subject.desc}</li>
          })
        }
      </ol>
      <button onClick={addSubject}>Add Subject</button>
    </>
  );
}