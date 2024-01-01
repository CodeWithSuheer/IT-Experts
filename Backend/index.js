// app.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Db/db');
const path = require('path')
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors')
const routes = require('./Routes/ContactRoutes');
const AdminRoutes = require('./Routes/AdminAuthRoute');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
connectDB();


// app.use(express.static('dist'));
// app.get('*',(req,res)=>{
//   res.sendFile(path.join(__dirname,'dist/index.html'))
// });


app.use('/contact', routes);
app.use('/AdminAuth',AdminRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

