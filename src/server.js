// Servidor - Importação
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses
} = require('./pages')

// Importação do nunjucks (template engine)
const nunjucks = require('nunjucks') 
// Configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true // Desativar o cache para não guardar informações desatualizadas da aplicação.
})
// Início e configuração do servidor
server
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
// Start do servidor
.listen(5500) // Chama a dependência que foi instalada no node, o "Express" na porta 5500 definida na configuração "listen"