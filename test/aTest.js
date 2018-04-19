const mocha = require ('mocha'); // Exporting the Libraries
const should = require ('should');
const supertest = require('supertest');


let baseURL= supertest("https://jsonplaceholder.typicode.com/");
let loginEndPoint= "posts/1";
let transactionEndPoint= "comments?postId=1";




it("Single Object return", async function() {

    let res = await baseURL.get(loginEndPoint) // Sending the get request 
    // console.log(res.body); // Printing the response to console
    res.body.id.should.be.a.Number() 
    res.body.userId.should.be.a.Number()
    res.body.title.should.be.a.String()
    res.body.body.should.be.a.String()
﻿  res.status.should.equal(200); // Asserting that response code is 200
    

});

it("Array of objects return", async function() {     // 2nd request        
    let res = await baseURL.get(transactionEndPoint) //Sending the GET request
    //console.log(res.body) 
    res.status.should.equal(200) //Asserting that response code is 200 
    transactions = res.body; 
    for (var i = 0; i < transactions.length; i++) {
        let anObject = transactions[i]
        //console.log(anObject)
        anObject.id.should.be.a.Number() 
        anObject.name.should.be.a.String()
        anObject.email.should.be.a.String()
        anObject.body.should.be.a.String()
    }
         
    
    
 });

