gsap.registerPlugin(ScrollTrigger)
// INITIALIZE gsap timeline => https://greensock.com/docs/v3/GSAP/gsap.timeline()
let tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".intro",
		pin: ".intro",
		start: "top top",
		end: "+=8000",
		scrub: 1,
		onLeave: () => console.log("hi"),
	},
})

//Todo:: CHECK value of "<" ">"
tl.to("#intro-name", {
	scale: 2,
	y: 100,
	ease: "slow(0.7, 0.7, false)",
	duration: 9000,
})

tl.to("#intro-name", {
	y: -400,
	ease: "power2.out",
	duration: 9000,
	scale: 1,
})

tl.to("#intro-full-stack", {
	opacity: 1,
	scale: 3,
	ease: "slow(0.7, 0.7, false)",
	duration: 9000,
})

tl.to("#intro-full-stack", {
	scale: 0.9,
	x: 300,
	ease: "slow(0.7, 0.7, false)",
	duration: 9000,
	stagger: 2,
})

tl.to("#intro-motivated", {
	opacity: 1,
	y: -500,
	duration: 9000,
})

tl.to("#intro-passion", {
	opacity: 1,
	y: -170,
	duration: 9000,
})

tl.to(["#intro-motivated", "#intro-passion"], {
	opacity: 0,
	y: -500,
	scale: 0.5,
	duration: 9000,
})

tl.to("#intro-full-stack", {
	opacity: 0,
	scale: 0.5,
	y: 100,
	duration: 9000,
})

tl.to("#intro-join", {
	opacity: 1,

	y: -100,
	duration: 9000,
})

tl.to(".intro", {
	opacity: 0,
	duration: 9000,
})

// ==== PORTFOLIO INTRO ====
const paths = document.querySelectorAll(".portfolio-intro svg path")

const svgAnimation = () => {
	for (let i = 0; i < paths.length; i++) {
		paths[i].style.animationPlayState = "running"
	}
}

ScrollTrigger.create({
	trigger: "#portfolio-logo",
	start: "-150px center",
	onEnter: () => svgAnimation(),
})

// browse button trigger svg wave

window.addEventListener("DOMContentLoaded", () => {
	const browseBtn = document.getElementById("browse")

	browseBtn.addEventListener("click", () => {
		event.preventDefault()
		// timeline for clicking browse btn

		const tl2 = gsap.timeline()
		tl2.to("#wave-first", {
			duration: 3,
			ease: "power2.out",
			attr: {
				d:
					"M-233.536,0,2045.179-3.714s-187.571,2331.643-518.143,2329.786-516.286-1226.643-848.714-1215.5S311.536,2454.215,58.036,2448.644-233.536,0-233.536,0Z",
			},
			opacity: 1,
		})
		browseBtn.style.display = "none"

		tl2.to("#swiper-container", {
			opacity: 1,
			duration: 2,
			scale: 1.2,
			ease: "bounce",
			display: "block",
		})
	})
})

// swiper
var swiper = new Swiper(".swiper-container", {
	effect: "cube",
	// autoplay: {
	// 	delay: 3000,
	// },
	loop: true,
	grabCursor: true,
	cubeEffect: {
		shadow: true,
		slideShadows: false,
		shadowOffset: 20,
		shadowScale: 0.94,
	},
})
