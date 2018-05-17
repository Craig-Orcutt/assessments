# Quick Assess
---
Quick Assess is a proof of concept application designed to provide therapists with a quick and easy way to supply outreach coordinators at substance abuse treatment centers with simple demographics for a potential client seeking treatment.

---
## Overview of Application
---
Users are presented with a login screen and are instructed to login or register

<img src="https://media.giphy.com/media/ZcVY9daWca7XRBPaC5/giphy.gif"/>

---
If the user is a therapist, they are present with a form to provide the basic demographic needed by outreach. Selections have differents weights. Those selections are then added up and multiplied and sent off with the form to outreach


<img src='https://media.giphy.com/media/Qf5M9nrsS2S1SgP0fW/giphy.gif'/>

---
If the user is an outreach coordinator, user logs in and is presented with a list of inquiries submitted. User can expand info on potential client and view all demographics supplied by therapist as well as points scored from form submitted, recommendation for treatment and the ability to add comments for the patient.

<img src='https://media.giphy.com/media/5WJ0agqX9v8uDziFfY/giphy.gif' />

---
## Steps to run locally

To run locally
* clone the repository
* have react, npm, yarn, postgresql and sequelize installed.
---
* In terminal, ```psql``` at the root of folder
  * Create Database "assessments" in postgres
  * ```\c assessments``` to open the database
  * ```\d``` to view all tables
* ```npm install``` at the root of project
---

* ```npm install``` inside the client folder
* ```node create-db``` at the root of project
* ```yarn dev``` at the root of the folder.


Thats it! Enjoy! Thanks for taking a look!