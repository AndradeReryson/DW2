const Sequelize = require("sequelize")
const sequelize = new Sequelize("test","root","",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Erro ao conectar: "+erro)
})

const Agendamentos = sequelize.define("Agendamentos", {
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.INTEGER
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.STRING
    }
})

//Agendamentos.sync({force:true})    JÁ EXECUTADO

/*                                      JÁ INSERIDO

Agendamentos.create({
    nome: "Reryson Andrade",
    endereco: "Tv. somos todos iguais",
    cep: 0834300,
    cidade: "São Paulo",
    estado: "São Paulo",
    observacao: "Estudante da fatec zl"
})

*/
