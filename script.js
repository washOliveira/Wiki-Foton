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

	const listaSalas = [
		{
			nome: 'Cartões',
			linkMeet: 'https://meet.google.com/hbz-bbpi-wqw',
			linkTeams: 'https://teams.microsoft.com/dl/launcher/launcher.html?url=%2f_%23%2fl%2fmeetup-join%2f19%3ameeting_OWVhYTY2YjgtM2ZlMS00YjllLTgyNzEtYTEwYTJlNTQ5OTlj%40thread.v2%2f0%3fcontext%3d%257b%2522Tid%2522%253a%2522ab9bba98-684a-43fb-add8-9c2bebede229%2522%252c%2522Oid%2522%253a%2522680dfc41-21e8-4379-aec2-0dc5c344afbd%2522%257d%26anon%3dtrue&type=meetup-join&deeplinkId=922e5992-9459-4a72-892f-98904093caee&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true'
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

  const gridSalas = document.querySelector(".gridSalas");

  function createGridSalas(){
  	for (let j = 0; j < listaSalas.length; j++){
  		
  	}
  }

  createGridAtalhos();

}) // fim da function