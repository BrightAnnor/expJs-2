const http = require('http');

const dotenv =require('dotenv');

// configure .dotenv
dotenv.config();

// express app
const app = express();

// port
const port = process.env.PORT || 2000;

app.get('/',(req,res)=>{
    res.send('Worked')
});

app.listen(port,()=>{
    console.log(`Server is runinng on http://localhost:${port}`)
});
