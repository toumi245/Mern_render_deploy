import bcrypt from 'bcryptjs'

const users=[
    {
        name:'admin user',
        email:'chedli@gmail.com',
        password:bcrypt.hashSync('12345678',10),
        isAdmin:true
    },
    {
        name:'Ahmed Ali',
        email:'Ahmed@gmail.com',
        password:bcrypt.hashSync('12345678',10),
    },
    {
        name:'rami',
        email:'rami@gmail.com',
        password:bcrypt.hashSync('12345678',10),
    },
]  
export default users