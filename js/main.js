'use strict'

/*Acontinuación voy a crear el evento de menú de hamburguesa*/

/*MENÚ HAMBUERGUESA*/
document.addEventListener('DOMContentLoaded',()=>{

const menuContainer=document.querySelector('.menuContainer ul');
const menuContainerA=document.querySelectorAll('.menuContainer ul a');
const toggle=document.querySelector('.toggle');

toggle.addEventListener('click',()=>{
	menuContainer.classList.toggle('menuVisible');
})

})//END

/*Hover con vídeo*/
/*Para darle más dinamismo al diseño he creado unas funciones que sustituyen los atributos de la imágen "src" por la del gif al hacer hover*/
	
	/*WaveNow*/

	function gifWaveNow () {
		document.getElementById('waveNow').src = "img/wavenow.gif";
	}
	 
	function jpgWaveNow () {
		document.getElementById('waveNow').src = "img/wavenow-logo.jpg";
	}

	/*Adidas App*/

	function gifAdidas () {
		document.getElementById('adidas').src = "img/adidas-app.gif";
	}
	 
	function jpgAdidas () {
		document.getElementById('adidas').src = "img/adidas-app.jpg";
	}

	/*Adidas App*/

	function gifImaginin () {
		document.getElementById('imaginin').src = "img/imaginin.gif";
	}
	 
	function jpgImaginin () {
		document.getElementById('imaginin').src = "img/imaginin.jpg";
	}





