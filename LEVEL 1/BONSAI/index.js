"use strict"
const $ = tag => document.querySelector(tag)
const a$ = tag => document.querySelectorAll(tag)

const menu = $('#imenu')
const navegation = $('#navegation')
menu.addEventListener('click',()=>{
	navegation.classList.toggle('h-[233px]')
})

const svgAsked = a$('#ask ul li')
svgAsked.forEach(ask=>{
	ask.querySelector('div svg').addEventListener('click', (e)=> {ask.querySelector('p').classList.toggle('hidden')
		e.currentTarget.classList.toggle('rotate-180')
	})
})