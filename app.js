/*
 * Title: Start File
 * Description: Projects main or starting file
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 03/02/2022
 */
 
// Dependencies.
 const express = require('express');
 
// App object or Module scaffolding.
 const app = express();
// main functions or objects.
 app.get('/', (req, res)=>{
     res.send('Hi Docker');
 })
 
 
 app.listen(3000);
// export the module.
 