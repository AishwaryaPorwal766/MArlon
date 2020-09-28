const sr = ScrollReveal({
	origin : 'top',
	distance : '8rem',
	duration : 2000,
	reset :'true'
})

/*  scroll for home */
sr.reveal('.home-title', {})
sr.reveal('.button', {delay:200})
sr.reveal('.box', {delay:400})
sr.reveal('.social-link', {interval:200})

/*  scroll for about */
sr.reveal('.head', { delay:200})
sr.reveal('.text', { delay:200})

/*  scroll for skillss */
sr.reveal('.pbar', { interval:200})


/*  scroll for contact */
sr.reveal('.input', { interval:200})