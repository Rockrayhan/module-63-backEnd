const express = require('express'); // 1
const app = express();   //1
const cors = require('cors') // 3  use cors



app.use(cors()); // 3
app.use(express.json());    // 5 make string to json


const port = 5000 ; //1


app.get('/', (req, res) => {   //1
    res.send('request has been hitted well');    //1
})

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },   //2 make api
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' }
]

app.get('/users', (req, res) =>{               // 2  send api & use query paramiter
    const search = req.query.search;
    if (search) {
        const searchResult =  users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send (searchResult)
    }
    else{
        res.send(users)
    }
});


// app.METHOD(POST)         
app.post('/users', (req, res) => {              // 4 get data

    const newUser = req.body ;    // 6 add data
    newUser.id = users.length ;   // 6  
    users.push(newUser);          // 6

    console.log('hitting the post',req.body);   // 4
    // res.send('post get hited')               // 4
    res.json(newUser);                  // 6
})

// dynamic api
app.get('/users/:id',(req, res) =>{     // 2 get users by id
    const id = req.params.id ;
    const user = users[id] 
    res.send(user)
})


app.listen(port, ()=>{  //1
    console.log('listeninig to port', port);    //1
})