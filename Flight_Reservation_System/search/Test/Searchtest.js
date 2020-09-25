const chai = require('chai');
const chaiHttp = require('chai-http');

//Assertion style
chai.should();

chai.use(chaiHttp);



describe('Flights API', ()=>{
    /**
     * Test the POST route
     */

describe("POST /api/search", ()=>{
    it("It should search a flight for the given requirements", (done)=>{
        const flight={
            from:"Delhi",
            to:"Jaipur",
            date:"2020-06-03",
        };
        chai.request('http://localhost:8003')
        .post("/api/search")
        .send(flight)
        .end((err,response)=>{
            response.should.have.status(201);
            response.body.should.be.a('array')
            
            done();
            });
        });
    })
    it("It should Not searcg a new flight without date", (done)=>{
        const flight={
            from:"Delhi",
            to:"Jaipur"
        };
        chai.request('http://localhost:8003')
        .post("/api/search")
        .send(flight)
        .end((err,response)=>{
            response.should.have.status(500);
            done();
            });
        });
        it("It should Not search a flight for a wrong path ", (done)=>{
            const flight={
                from:"Delhi",
                to:"Jaipur",
                date:"2020-06-03",
            };
            chai.request('http://localhost:8003')
            .post("/api/searchs")
            .send(flight)
            .end((err,response)=>{
                response.should.have.status(404);
                done();
                });
            });
});