const chai = require('chai');
const chaiHttp = require('chai-http');

//Assertion style
chai.should();

chai.use(chaiHttp);

describe('Flights API', ()=>{
    /**
     * Test the POST route
     */

describe("POST /api/book", ()=>{
    it("It should book a flight for the search result", (done)=>{
        const data={ flights:{
            flight_name: "MUM-CHA-101",
            from: "Mumbai",
            to: "Chandigarh",
            date: "2020-02-14",
            departuretime: "17:20",
            arrivaltime: "19:00",
            fare: 5000,},
    
            user:{
            
            username:"Jay",
            email:"Jay@gmail.com",
            password:123456,
            roles:["user"]},
            quantity:4
            }
        chai.request('http://localhost:8004')
        .post("/api/book")
        .send(data)
        .end((err,response)=>{
            response.should.have.status(201);
            response.body.should.be.a('array')
            done();
            });
        });
    })
})