const form = document.querySelector('.formAdd')
form.addEventListener('submit', function (ev) {
    ev.preventDefault()//não atuliza a 

    let pessoa = receberValoresDaTabela(form)//dados vindo do formulario
    let imagemCodificada = coverterParaBase64

    localStorage.setItem('imagem', imagemCodificada)

    let row
    switch (pessoa.time) {
        case 'fullStack':
            row = document.querySelector('.fullStack')
            pessoa.corFundo = '#5cb85c'
            break;

        case 'frontEnd':
            row = document.querySelector('.frontEnd')
            pessoa.corFundo = '#0275d8'
            break;
        case 'backEnd':
            row = document.querySelector('.backEnd')
            pessoa.corFundo = 'hsl(54, 94%, 65%)'
            break;
        case 'dataScience':
            row = document.querySelector('.dataScience')
            pessoa.corFundo = '#d80202'
            break;
        case 'mobile':
            row = document.querySelector('.mobile')
            pessoa.corFundo = '#8a8686'
            break;
        case 'uxEdesign':
            row = document.querySelector('.uxEdesign')
            pessoa.corFundo = '#02d1d8'
            break;
    }
    row.appendChild(montarCard(pessoa))//add o card na linha 
})

const receberValoresDaTabela = (form) => {
    let pessoa = {    //criando uma pessoa com os dados do form
        nome: form.nome.value, //recebendo o nome do form
        cargo: form.cargo.value, //recebendo o cargo do form 
        foto: form.foto.files[0], //recebendo o foto do form
        time: form.time.value //recebendo o time do form

    }

    return pessoa

}
function adicionarDescricao(pessoa) {
    let nomeDescricao = document.createElement('h4')//criando um titulo h4
    nomeDescricao.textContent = pessoa.nome// adicionando o nome na tag h4
    nomeDescricao.style.color = pessoa.corFundo

    let cargoDescricao = document.createElement('p')// criando um paragrafo
    cargoDescricao.textContent = pessoa.cargo//adicionando a descrição na tag p
    cargoDescricao.style.color = pessoa.corFundo

    let figcaption = document.createElement('figcaption')// criando um figcaption
    figcaption.classList.add('.text-center')//add uma classe html
    figcaption.appendChild(nomeDescricao)// add o nome dentro do figcaption    
    figcaption.appendChild(cargoDescricao)//add o cargo dentro do figcaption

    return figcaption
}
function montarCard(pessoa) {
    let foto = document.createElement('img')
    


    let figure = document.createElement('figure')//criando uma figure
    figure.classList.add('col-md-3')
    figure.classList.add('card')
    figure.classList.add('ms-3')
    figure.style.backgroundImage = 'linear-gradient(to top, white 60%, ' + pessoa.corFundo + ' 40%)'
    figure.appendChild(adicionarDescricao(pessoa)) //add figcaption 'descrição' a figure

    return figure

}
//google
function coverterParaBase64(imagem) {
    return new Promise(resolve =>{

        let reader = new FileReader()
        reader.readAsDataURL(imagem)
        reader.onload = function () {
            let imagemCodificada = reader.result.split(',')[1]
            resolve(imagemCodificada)
    
        }
    
    })

}