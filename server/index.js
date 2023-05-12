const express=require("express");
var mysql = require('mysql');
var cors = require("cors");

app=express()
app.use(express.json())

app.use(cors())

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'roshin',
  password : 'roshin@2001',
  database : 'contact'
});
 
connection.connect();
 


app.get('/get',(req,res)=>{
    console.log(req.query);
    
    connection.query('SELECT * from contactus  where isdeleted=?',[0], function (error, results) {
        if (error);
        console.log('The solution is: ', results);

        res.end(JSON.stringify(results))
      });
       
    
   
    // res.json(user)
})
app.get('/getusers/:id',(req,res)=>{




   connection.query(`select * from contactus where id = ?`,[req.params.id], function (error, results) {
  
  
  
  
   if(error);
  
  
  
  
   console.log('results'+ JSON.stringify(results));
  
  
  
  
  
   res.end(JSON.stringify(results));
  
  
  
  
   });
  
   });

// app.get('getusers/:id',(req,res)=>{
//     console.log(req.params);
    
//     connection.query('SELECT * from contactus where id=? ',[req.params.id], function (error, results) {
//         if (error);{
//             console.log(error);
//         }
//         console.log('The solution is: ', JSON.stringify(results));

//         res.end(JSON.stringify(results))
//       });
       
      
   
    
// })

// app.get('/:username',(req,res)=>{
//     console.log(req.query);
    
//     connection.query('SELECT * from contactus where user_name=?',[req.params.user_name], function (error, results) {
//         if (error){
//             console.log(error);
//         }
        
//         console.log('The solution is: ', results);

//         res.end(JSON.stringify(results))
//       });
          
// })
// app.get('/',()=>{
//     console.log("im inside get");
// })
// app.get('/:id',(req,res)=>{
//     // console.log(req.params);
//     res.json(user.filter(e=>e.id == req.params.id))
//     res.json(user)
    
// })

//post method

app.post('/insert',(req,res)=>{
  console.log("inside ",req.body);

   connection.query(`insert into contactus (user_name,email,message) values(?,?,?)`,[req.body.user_name,req.body.email,req.body.message],function (error, results) {
  
   if (error) {
  
   console.log(error);
  
   }
  
   res.json(results)
  
   });
  
  })

  //update
  // app.put('/update/:id', (req, res) => {

  //    // console.log(`select * from form  where id=${req.params.id}`)
  //    console.log(req.params)
  //    console.log("i am inside get",`select * from contactus Where id=${req.params.id}`)
    
    
    
    
    
  //    connection.query(`update contactus set user_name=?,email=?,message=?, where id=?`,[req.body.user_name,req.body.email,req.body.message,req.params.id],function (error, results) {
  //    console.log(req.body,"hgfgdgfdtf")
  //    if (error) {
  //    console.log(error)
  //    }
  //    connection.query(`select * from  contactus where id=?`,[req.params.id],function (error, results) {
  //    console.log('The solution is: ', results);
  //    res.json(results)
    
  //    // res.end(JSON.stringify(results))
    
  //    });
    
  //    });
    
    
    
    
  //   })

  app.put('/update',(req,res)=>{
    console.log("inside ",req.body);
  
     connection.query('update contactus set user_name=?,email=?,message=? where id=?',[req.body.user_name,req.body.email,req.body.message,req.body.id],function (error, results) {
     console.log(req.body,"76ytuytyt")
     if (error) {
    
     console.log(error);
    
     }
    
     console.log('The solution is: ', results);

    res.end(JSON.stringify(results))
      
    
     });
    
    })
// delete....................

// app.put('/delete',(res,req)=>{
//   console.log(req.body);
//   connection.query(`update contactus set isdeleted=? where id=?`,[1,req.body.id],function(error,results){
//     if (error) {
//       console.log(error);
      
//     }
//     console.log("the solution is:", results);
//     res.json(results)
//   })

// })
app.put('/delete', (req, res) => {




   // Execute the DELETE statement with the specified ID
  
  
  
   let sql = `UPDATE contactus SET isdeleted = ? WHERE id = ?;`;
  

  
   let id = req.body.id
  
  
  
   console.log('id.....', id)
  
  
  
   connection.query(sql, [1, id], (error, results) => {
  
  
  
   if (error) {
  
  
  
  
   } else {
  
   console.log('results' + JSON.stringify(results));
  
  
   res.end(JSON.stringify(results));

  
   }
  

  
   });
  

  
   });
app.listen(3000,()=>{
    console.log("listening port 3000")
})