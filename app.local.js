const app = require('./app.js');
const PORT = (process.env.PORT || 1337)

app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`)
})