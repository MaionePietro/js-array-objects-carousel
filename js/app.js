//arrey immagini



let indiceSlideAttiva = 0
const slideElements = document.getElementsByClassName('slide')
console.log(slideElements)

const rightBtnElement = document.querySelector('.carosello__arrow.arrow-right')
const leftBtnElement = document.querySelector('.carosello__arrow.arrow-left')

console.log(rightBtnElement)

rightBtnElement.addEventListener('click', function () {
	console.log('current slide', indiceSlideAttiva)
    
	let slideCorrente = slideElements[indiceSlideAttiva]
	slideCorrente.classList.remove('active')

	indiceSlideAttiva += 1  

	let prossimaSlide = slideElements[indiceSlideAttiva]
	prossimaSlide.classList.add('active')

	console.log('next slide', indiceSlideAttiva)
})

leftBtnElement.addEventListener('click', function () {
	console.log('current slide', indiceSlideAttiva)

    let slideCorrente = slideElements[indiceSlideAttiva]
	slideCorrente.classList.remove('active')

	indiceSlideAttiva -= 1

	let prossimaSlide = slideElements[indiceSlideAttiva]
	prossimaSlide.classList.add('active')

	console.log('next slide', indiceSlideAttiva)
})