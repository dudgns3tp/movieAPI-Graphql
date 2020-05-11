import {people, getById} from './people_db';

const resolvers = {
    Query:{ 
        people : () => people,
        person : (_, {id}) => getById(id)
    }
};

export default resolvers;