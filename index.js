
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
//app.set("view engine", "ejs");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//placeholders for added task
var taskArray = [];
//placeholders for removed task
var complete = [];

//post route for adding new task 
app.post("/addtask", function(req, res) {
    var newTask = req.body.newtask;
    //add the new task from the post route
    taskArray.push(newTask);
    res.redirect("/");
});

app.post("/removetask", (req, res) => {
    var completeTask = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTask === "string") {
        complete.push(completeTask);
        //check if the completed task already exits in the task when checked, then remove it
        taskArray.splice(taskArray.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            taskArray.splice(taskArray.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});

//render the ejs and display added task, completed task
app.get("/", (req, res) =>{
    res.render("index", { taskArray: taskArray, complete: complete });
});

//set app to listen on port 3000
app.listen(3000, () =>{
    console.log("server is running on port 3000");
});