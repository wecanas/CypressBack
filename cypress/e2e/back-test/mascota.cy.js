/// <reference types="cypress" />
context('Actions', () => {

  let Id;

it('Creación de una mascota', ()=>{
    
   
cy.request('POST','https://petstore.swagger.io/v2/pet', 
  {
  "id": 100,
  "category": {
    "id": 1,
    "name": "Mar"
  },
  "name": "Tibu",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
                       }).then((response) => {

                          Id=response.body.id
                          expect(response.status).to.eq(200)
                          expect(response.body.category).to.have.property('id', 1)
                          expect(response.body.category).to.have.property('name', 'Mar')
                          expect(response.body).to.have.property('name', 'Tibu')
                          expect(response.body).to.have.property('status', 'available')  
                          console.log(Id)   
   
                        })
           return Id;
});


it('Buscar una mascota por ID', ()=>{

  

 cy.request('GET',`https://petstore.swagger.io/v2/pet/${Id}`).wait(10000)
    .then((response) => {
      
      expect(response.status).to.eq(200);
      expect(response).to.have.property('headers')
      expect(response).to.have.property('duration')
     
    });

});


it('Modificación de una mascota', ()=>{

cy.request('PUT', 'https://petstore.swagger.io/v2/pet', {
  "id": 100,
  "category": {
    "id": 3,
    "name": "Tierra"
  },
  "name": "Peluche",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}).then((response) => {

                          expect(response.status).to.eq(200)
                          expect(response.body.category).to.have.property('id', 3)
                          expect(response.body.category).to.have.property('name', 'Tierra')
                          expect(response.body).to.have.property('name', 'Peluche')      
   
                        })

});

it('Eliminar una mascota', ()=>{

// cy.wait(10000)
   cy.request('DELETE',`https://petstore.swagger.io/v2/pet/${Id}`).wait(5000)

    


});








});


