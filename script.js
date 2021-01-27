document.addEventListener('DOMContentLoaded', () => {
	const listaAtalhos = [
		{
			nome: 'Atalho 1',
			imagem: 'icon.jpg',
			link: 'https://trello.com/b/wvejQZcI/f%C3%B3ton-caixa'
		},
		{
			nome: 'Atalho 2',
			imagem: 'icon.jpg',
			link: ''		
		}
	]

	const salas = [
		{
			nome: 'Cartões',
			link: ''
		},
		{
			nome: 'FGTS',
			link: ''
		}
	]

const gridAtalhos = document.querySelector('.gridAtalhos');

 function createGridAtalhos() {
    for (let i = 0; i < listaAtalhos.length; i++) {
      var aAtalho = document.createElement('a')
      aAtalho.setAttribute('href', listaAtalhos[i].link)
      aAtalho.setAttribute('target', 'blank')

      var imgAtalho = document.createElement('img')
      imgAtalho.setAttribute('src', listaAtalhos[i].imagem)

      aAtalho.appendChild(imgAtalho)
      gridAtalhos.appendChild(aAtalho)
    }
  }

  createGridAtalhos();

}) // fim da function