
const img =[
	{
		url :'01.webp',
		titolo :'Spider-Man: Miles Morales',
		descrizione: 'Videogioco d avventura dinamica sviluppato da Insomniac Games e distribuito da Sony Interactive Entertainment in esclusiva per PlayStation 4 e PlayStation 5.'
	},
	{
		url :'02.webp',
		titolo :'Ratchet & Clank: Rift Apart',
		descrizione :'Videogioco a piattaforme e sparatutto in terza persona sviluppato da Insomniac Games e pubblicato da Sony Interactive Entertainment per PlayStation 5. Il titolo segna il debutto della serie Ratchet & Clank su PS5 e racconta gli eventi successivi a Ratchet & Clank: Nexus.',
	},
	{
		url :'03.webp',
		titolo :'Fortnite',
		descrizione :'Videogioco sparatutto in terza persona del 2017, sviluppato da People Can Fly e pubblicato da Epic Games per console e PC. Il gioco presenta tre modalità distinte che condividono lo stesso motore grafico: Salva il mondo, Modalità creativa e Battaglia reale.',
	},
	{
		url :'04.webp',
		titolo :'Stray',
		descrizione :'Videogioco di avventura dinamica del 2022 sviluppato da BlueTwelve Studio e pubblicato dall Annapurna Interactive per PlayStation 4, PlayStation 5 e Microsoft Windows.',
	},
	{
		url :'05.webp',
		titolo :'Marvels Avengers',
		descrizione :'Videogioco action-adventure sviluppato dalla Crystal Dynamics e Eidos Montréal, e pubblicato dalla Square Enix. È il primo nuovo titolo della Crystal Dynamics al di fuori del franchise di Tomb Raider partito nel 2005, e si basa sul gruppo di supereroi della Marvel Comics, i Vendicatori.',
	}
]
const caroselloElement = document.querySelector('.carosello')


img.forEach((el)=>{
    let divString = `<div class="slide position-relative">
                    	<img src="./img/${el.url}" alt="">
						<div class="position-absolute bottom-0  text-white p-4 info">
							<h2>
								${el.titolo}
							</h2>
							<span>
								${el.descrizione}
							</span>
						</div>
                	</div>`
	caroselloElement.innerHTML += divString;
})

let indiceSlideAttiva = 0
const slideElements = document.getElementsByClassName('slide')
slideElements[0].classList.add('active')

const rightBtnElement = document.querySelector('.carosello__arrow.arrow-right')
const leftBtnElement = document.querySelector('.carosello__arrow.arrow-left')

rightBtnElement.addEventListener('click', function () {
	const slideElements = document.getElementsByClassName('slide')
	slideElements[indiceSlideAttiva].classList.add('active')

	console.log('current slide', indiceSlideAttiva)
	const lastIndex = slideElements.length - 1
    
	let slideCorrente = slideElements[indiceSlideAttiva]
	slideCorrente.classList.remove('active')

	if (indiceSlideAttiva < lastIndex) {
		indiceSlideAttiva += 1
	} else {
		indiceSlideAttiva = 0
	}
	//indiceSlideAttiva += 1  

	let prossimaSlide = slideElements[indiceSlideAttiva]
	prossimaSlide.classList.add('active')

	console.log('next slide', indiceSlideAttiva)
})

leftBtnElement.addEventListener('click', function () {
	const slideElements = document.getElementsByClassName('slide')
	slideElements[indiceSlideAttiva].classList.add('active')

	console.log('current slide', indiceSlideAttiva)

    let slideCorrente = slideElements[indiceSlideAttiva]
	slideCorrente.classList.remove('active')

	if (indiceSlideAttiva > 0) {
		indiceSlideAttiva--
	} else {
		indiceSlideAttiva = slideElements.length - 1 //last index
	}
	//indiceSlideAttiva -= 1

	let prossimaSlide = slideElements[indiceSlideAttiva]
	prossimaSlide.classList.add('active')

	console.log('next slide', indiceSlideAttiva)
})