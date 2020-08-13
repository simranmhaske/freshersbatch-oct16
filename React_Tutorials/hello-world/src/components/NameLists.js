import React from 'react'

function NameList(){
    const names=[
    {
        name:'Simran',
        age: 21
    },
    {
        name: 'Sakshi',
        age:17
    }
]
const newNames=names.map(names=><h2>I am {names.name} and I am {names.age} years old</h2>)
    return<div>
        {newNames}
    </div>
}
export default NameList