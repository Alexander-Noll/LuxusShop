import express from 'express'
import cors from 'cors';


// defining app as express application
const app = express();

// allows request from 4200 to the the backend 5000
app.use(cors({
    credentials:true,
    origin:["https://localhost:4200"]
}));

app.get("/api", (req,res) => {
    res.send("backend is online!");
});







const port = process.env.PORT || 5000;
app.listen(port, () =>{
    //called when listening is finished
    console.log("Website served on https://localhost:" + port);
}); 