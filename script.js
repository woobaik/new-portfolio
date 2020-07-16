const video = document.getElementById("bg-video")

gsap.to("#intro-scroll", { y: 15, repeat: 7, yoyoEase: true })

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)
// INITIALIZE gsap timeline => https://greensock.com/docs/v3/GSAP/gsap.timeline()
let tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".intro",
		pin: ".intro",
		start: "top top",
		end: "+=5000",
		scrub: 1,

		onUpdate: ({ progress, direction, isActive }) => {
			let fixedProgress = parseFloat(progress.toFixed(2))
			let fiexedDuration = parseFloat(video.duration.toFixed(2))

			let playTime = isNaN((fixedProgress * fiexedDuration).toFixed(2))
				? 0
				: (fixedProgress * fiexedDuration).toFixed(2)

			video.currentTime = Number(playTime)
		},
	},
})

//Todo:: CHECK value of "<" ">"
tl.to("#intro-name", {
	scale: 2,
	y: 200,
	ease: "slow(0.7, 0.7, false)",
	duration: 3000,
})

tl.to("#intro-name", {
	y: -400,
	ease: "power2.out",
	duration: 3000,
	scale: 1,
})

tl.to("#intro-full-stack", {
	opacity: 1,
	scale: 3,
	ease: "slow(0.7, 0.7, false)",
	duration: 7000,
})

tl.to("#intro-full-stack", {
	scale: 0.9,
	x: 300,
	ease: "slow(0.7, 0.7, false)",
	duration: 2000,
	stagger: 2,
})

tl.to("#intro-motivated", {
	opacity: 1,
	y: -450,
	duration: 13000,
})

tl.to("#intro-passion", {
	opacity: 1,
	y: -100,
	duration: 8000,
})

tl.to(["#intro-motivated", "#intro-passion", "#intro-full-stack"], {
	opacity: 0,
	y: -500,
	scale: 0.5,
	duration: 6000,
})

// tl.to("#intro-full-stack", {
// 	opacity: 0,
// 	scale: 0.5,
// 	y: 100,
// 	duration: 9000,
// })

tl.to("#intro-join", {
	opacity: 1,

	y: -100,
	duration: 7000,
})

tl.to(".intro", {
	opacity: 0,
	duration: 9000,
})

// if viewpoint hits 2nd section, it will scroll down automatically
let tl3 = gsap.timeline({
	scrollTrigger: {
		trigger: ".portfolio-intro",
		start: "top bottom",
		snap: {
			snapTo: 0.5,
		},
		onEnter: () => console.log("intro started!"),
	},
})

// ==== PORTFOLIO INTRO ====
const paths = document.querySelectorAll("#portfolio-logo path")

const svgAnimation = () => {
	for (let i = 0; i < paths.length; i++) {
		paths[i].style.animationPlayState = "running"
	}
}

ScrollTrigger.create({
	trigger: ".portfolio-intro",
	start: "top center",
	onEnter: () => svgAnimation(),
})

// browse button trigger svg wave

window.addEventListener("DOMContentLoaded", () => {
	const browseBtn = document.getElementById("browse")

	browseBtn.addEventListener("click", () => {
		event.preventDefault()
		// timeline for clicking browse btn

		const tl2 = gsap.timeline()
		tl2.fromTo(
			"#wave-first",
			{ y: -315 },
			{
				duration: 3,
				ease: "power2.out",
				attr: {
					d:
						"M-233.536,0,2045.179-3.714s-187.571,2331.643-518.143,2329.786-516.286-1226.643-848.714-1215.5S311.536,2454.215,58.036,2448.644-233.536,0-233.536,0Z",
				},
				opacity: 1,
			}
		)
		browseBtn.style.display = "none"
		tl2.fromTo(
			".swiper-container",
			{ scale: 0.1, display: "none" },
			{
				opacity: 1,
				duration: 1,
				scale: 0.9,
				ease: "bounce",
				display: "block",
			}
		)
	})
})

// swiper
let swiper = new Swiper(".swiper-container", {
	effect: "cube",
	centeredSlides: true,
	loop: true,
	observer: true,
	observeParents: true,
	grabCursor: true,
	cubeEffect: {
		shadow: true,
		slideShadows: false,
		shadowOffset: 20,
		shadowScale: 0.94,
	},
	pagination: {
		el: ".swiper-pagination",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
})

// contact page

let tl4 = gsap.timeline({
	scrollTrigger: {
		trigger: ".contact",
		start: "top +=100",
		onEnter: () => {
			console.log("contact intro")
		},
	},
})
tl4.to(".my-picture img", { rotate: 360, duration: 2, y: -20, opacity: 1 })
tl4.to(".contact-icon a", { duration: 0.1, opacity: 1, y: 20, stagger: 0.4 })
tl4.to(".contact-card", { duration: 0.5, opacity: 1, y: 20 })
tl4.to("#hi", { text: "Hi, ", duration: 0.5 })
tl4.to("#header-chunk1", {
	text:
		"I am a web developer with a mission to make the web user-friendly :) I'm located in",
	duration: 2,
	ease: Linear.easeNone,
})
tl4.to("#sf", { text: "San Francisco Bay Area", duration: 2 })
tl4.to("#header-chunk2", {
	text:
		", but my services are available to all. If you think we can work together, send me a message about it. :)",
	duration: 4,
	ease: Linear.easeNone,
})
tl4.to(".form-container", { duration: 1, opacity: 1, y: 10 })

let myEmail = document.getElementById("email-btn")
// click email btn to show email.
myEmail.addEventListener("click", (e) => {
	e.preventDefault()
	console.log("clicked")
	gsap.to(".my-mail", { duration: 3, text: "joungwoo.baik@gmail.com" })
})

let myphone = document.getElementById("phone-btn")
myphone.addEventListener("click", (e) => {
	e.preventDefault()
	gsap.to(".my-phone", { duration: 2, text: "415- 766-1431" })
})
