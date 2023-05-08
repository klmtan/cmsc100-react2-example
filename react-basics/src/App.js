import SubjectList from "./SubjectList";
const CMSCSubjects = [
  { code: "CMSC100", desc: "Web Programming", id: 1 },
  { code: "CMSC23", desc: "Mobile Development", id: 2 },
  { code: "CMSC12", desc: "Foundations of Computer Science", id: 3 }
]
const GESubjects = [
  { code: "HUM3", desc: "Film", id: 1 },
  { code: "MATH 10", desc: "Math in our society", id: 2 },
  { code: "ARTS 1", desc: "Arts", id: 3 }
]
function App() {
  return (
    <>
      <div className="App">
        Hello World!
      </div>
      <h1>Hello UV-2L!</h1>
      <SubjectList data={CMSCSubjects} title={"CMSC Subjects"} />
      <SubjectList data={GESubjects} title={"GE Subjects"} />
    </>
  );
}

export default App;
