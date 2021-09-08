const express = require('express');
const PORT = process.env.PORT || 3001;
const htmlroutes = require ('./routes/htmlroutes')
const app = express();
const apiroutes = require ('./routes/apiroutes')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

app.use(express.static('public'));
app.use(apiroutes)
app.use('/' , htmlroutes)


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
