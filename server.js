import app from './app.js'
import {ENV} from './config/env.js'

//port
const PORT = ENV.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})

