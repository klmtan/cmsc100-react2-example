import React from "react";
function SubjectList(props) {
    let subjects = props.data
    return (
        <>
            <h1>This will return a list</h1>
            <h2>{props.title}</h2>
            <ol>
                {
                    (() => {
                        const listItem = []
                        for (let i = 0; i < subjects.length; i++) {
                            listItem.push(<li key={subjects[i].id}>{subjects[i].code} - {subjects[i].desc}</li>)
                        }
                        return listItem
                    })()
                }

            </ol>
        </>
    );
}

export default SubjectList;