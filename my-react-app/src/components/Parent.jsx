import React from 'react'
const studentContext = createContext()
const Parent = () =>{
    const student = {
        name :"XYZ",
        age : 21,

    }
    return (
        <div>
            <studentContext.Provider value={student}>
                <h1>Parent Component</h1>
                <Child/>
            </studentContext.Provider>
        </div>
    )
}
export default Parent
export {studentContext}