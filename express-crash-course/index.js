const express = require('express');

const app = express();





//middleware

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// const logger = (req, res, next) => {
//     console.log('Hello');
//     next();
// };

// const logger = (req, res, next) => {
//     console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// };

//Init middleware
// app.use(logger);

// INITIAL TEST ROUTE//
// app.get('/', (req,res) => {
//     res.send("Hola Care-bola!");
// });


//Members API routes
app.use('/api/members', require('./routes/api/members'));

//ROUTES//






const PORT = process.env.PORT || 3000;

app.listen(PORT, () => 
    console.log(`Server is running on port ${PORT}`
));