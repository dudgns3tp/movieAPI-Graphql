const dudgns = {
    name:"Choi younghoon",
    age:26,
    gender:"male"
};

const resolvers = {
    Query:{
        person: ()=> dudgns
    }
};

export default resolvers;