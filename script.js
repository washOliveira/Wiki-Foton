document.addEventListener('DOMContentLoaded', () => {
	const listaAtalhos = [
		{
			nome: 'Trello',
			imagem: 'icons/trello.webp',
			link: 'https://trello.com/b/wvejQZcI/f%C3%B3ton-caixa'
		},
		{
			nome: 'Planilha - Folha de Ponto',
			imagem: 'icons/tabela.png',
			link: 'https://docs.google.com/spreadsheets/d/1-ASCs8IAZDdVrSMw7PSzJqFKq28C9Ub8weXbtzQ4GEc/edit#gid=1109202376'		
		},
		{
			nome: 'Ahgora - Folha de Ponto - Dashboard',
			imagem: 'icons/ahgora.png',
			link: 'https://mirror.www.ahgora.com.br/#/dashboard'		
		},
		{
			nome: 'Ahgora - Folha de Ponto',
			imagem: 'icons/ahgora.png',
			link: 'https://www.ahgora.com.br/externo/index/fotoninfo'		
		},
		{
			nome: 'Relatório de trabalho remoto',
			imagem: 'icons/docs.png',
			link: 'https://docs.google.com/document/d/1s6_nwShGDY-uxp3aum6b5jONA9d-zGBR5cXNOkXozO8/edit?ts=5e72e6dd'		
		},
		{
			nome: 'Quiosque Fóton',
			imagem: 'icons/foton.png',
			link: 'http://quiosque.foton.la:9098/quiosque'		
		},
		{
			nome: 'Google Drive - Fóton',
			imagem: 'icons/gdrive.webp',
			link: 'https://drive.google.com/drive/u/1/my-drive'		
		},
		{
			nome: 'Kanban Caixa',
			imagem: 'icons/kanban.png',
			link: 'https://kanban.caixa.gov.br'		
		},
		{
			nome: 'GID',
			imagem: 'icons/image.gif',
			link: 'https://gid.caixa:9443/jts/dashboards/29691'		
		},
		{
			nome: 'Apontamentos',
			imagem: 'icons/tabela.png',
			link: 'https://docs.google.com/spreadsheets/u/1/d/18enQVvAGm2PNwsEXTn8PxKK2cmSrz3ynrzPVlXu55KQ/htmlview#gid=1178362478'		
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

  const gridSalas = document.querySelector(".gridSalas");

  createGridAtalhos();

}) // fim da function