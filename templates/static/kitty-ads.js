class KittyAds extends HTMLElement {
	constructor() {
		super()
		if (! this.hasAttribute('height') ) {
			throw new Error('kitty-ad element must have height attribute')
		}
		if (! this.hasAttribute('width') ) {
			throw new Error('kitty-ad element must have width attribute')
		}
		this.insertAdjacentHTML("afterend", '<!--Kitty Ad by ScoopGracie--><div><a href="https://placekitten.com/attribution.html"><img alt="Cute kitten from the Internet" src="https://placekitten.com/' + this.getAttribute('width') + '/' +  this.getAttribute('height') + (this.hasAttribute('pic')?('?image=' + this.getAttribute('pic')):'') + '"></a></div>')
	}
}
var style=document.createElement('style')
style.type='text/css'
if(style.styleSheet){
	style.styleSheet.cssText='kitty-ad: {display: none}'
} else {
	style.appendChild(document.createTextNode('kitty-ad: {display: none}'))
}
document.getElementsByTagName('head')[0].appendChild(style)
customElements.define('kitty-ad', KittyAds)
