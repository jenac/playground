
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });
});

describe('wcf-soap', () =>{
  it('describe soap with wsdl', () =>{
    const soap = require('soap-as-promised');
    
    soap.createClient('http://192.168.1.129:8000/Ex001?wsdl')
      .then((client) => {
        let des = client.describe();
        console.log(JSON.stringify(des.Ex001Service.BasicHttpBinding_IEx001Service.CallerAuthentication.input));
        // client.myAwesomeSoapMethod({param: true})

       })
      .then((result) => console.log(`The result was: ${result}`))
      .catch((error) => console.error(`There was an error! ${error}`));
  });
});