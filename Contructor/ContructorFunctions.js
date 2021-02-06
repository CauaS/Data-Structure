//A funcão User, controi um objeto user, com as informações passadas por parâmetros;
function User(firstName, lastName, age, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}

const user1 = new User('Cali', 'Santos', 25, 'male'); 

//Se todos os usuários terão propriedades ou metodos comums entre eles, coloca em prototypes
// Assim, todos os usuários terão emailDomain e getEmailAddress
User.prototype.emailDomain = "@facebook.com";
User.prototype.getEmailAddress = function() {
    return this.firstName + this.lastName + this.emailDomain;
}

User1.getEmailAddress()
//CaliSantos@facebook.com