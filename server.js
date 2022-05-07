import createApp from "./app.js"

const app = createApp()

//start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}.`) })
