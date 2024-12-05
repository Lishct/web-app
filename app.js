const express = require('express');
const bodyParser = require('body-parser');
const monsterRoutes = require('./routes/monsters');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', monsterRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});