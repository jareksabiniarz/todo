var express = require('express');
var router = require('express').Router();
var i=0;
var taskArray=[];

/*POST the task*/
router.route('/').
	post((req, res) =>{
		if (!req.body.title) res.render('index', {info: 'Title is required!', title: "TODO list"});
		if (req.body.title.length < 10) res.render('index', {info: 'Title is too short!', title: "TODO list"});
		if (req.body.description.length > 255) res.render('index', {info: 'Description is too long!', title: "TODO list"});
		var taskTitle = req.body.title;
		var taskDescription = req.body.description;
		i ++;
		//add the new task from the post route into the array
		//taskArray.push(taskTitle);
		//i++; 
		//var taskC = document.getElementById("taskContainer");
		res.render('index', {info: 'Task added!', title: "TODO list", taskTitle: taskTitle, taskDescription: taskDescription, i: i}); 
		
});

module.exports = router;


