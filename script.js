let idade = parseInt(prompt("Digite a sua idade?"))
const nome = prompt("Digite o seu o seu nome").toLowerCase()

if (idade >= 18){
   alert(`Olá, ${nome}! Você tem acesso completo. Boas-vindas à plataforma!`)
}else if (nome === "admin"){
   alert("Bem-vindo, Admin! Acesso total liberado.")
}else if (nome === "moderador" && idade >= 16) {
   alert("Olá, Moderador! Acesso liberado para a área de moderação.")
}else if (idade >= 13 || idade <= 17){
   alert("negado. Você pode participar do nosso programa Jovem Aprendiz!")
}else{
   alert("Acesso negado. O conteúdo é exclusivo para maiores de 18 anos.")
}