const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;


app.use(express.json());


app.get('/', require('./routes/root'));
app.use('/api', require('./routes/api/crud'));


 app.listen(PORT, ()=> console.log(`Server running at PORT ${PORT}`));