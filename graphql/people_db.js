export const people = [
    {
        id:"0",
        name:"choi Young hoon",
        age:"26",
        gender:"male"
    },
    {
        id:"1",
        name:"Jason",
        age:"20",
        gender:"male"
    },
    {
        id:"2",
        name:"JinKyung",
        age:"28",
        gender:"female"
    },
    {
        id:"3",
        name:"Ju yong",
        age:"26",
        gender:"male"
    },
    {
        id:"4",
        name:"Andy",
        age:"61",
        gender:"female"
    },
    {
        id:"5",
        name:"Steive",
        age:"21",
        gender:"male"
    },
    {
        id:"6",
        name:"Joy",
        age:"22",
        gender:"female"
    },
    {
        id:"7",
        name:"pretty Girl",
        age:"22",
        gender:"female"
    }
]

export const getById = id =>{
    const filteredPeople = people.filter(person => person.id === String(id) );
    return filteredPeople[0];
}