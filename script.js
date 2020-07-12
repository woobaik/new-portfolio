const video = document.getElementById("bg-video")

gsap.registerPlugin(ScrollTrigger)
// INITIALIZE gsap timeline => https://greensock.com/docs/v3/GSAP/gsap.timeline()
let tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".intro",
		pin: ".intro",
		start: "top top",
		end: "+=5000",
		scrub: 1,
		onLeave: () => console.log("hi"),
		onUpdate: ({ progress, direction, isActive }) => {
			let fixedProgress = parseFloat(progress.toFixed(2))
			let fiexedDuration = parseFloat(video.duration.toFixed(2))

			let playTime = (fixedProgress * fiexedDuration).toFixed(2)
			console.log("CURRENT", fixedProgress, fiexedDuration, Number(playTime))
			video.currentTime = Number(playTime)
		},
	},
})

//Todo:: CHECK value of "<" ">"
tl.to("#intro-name", {
	scale: 2,
	y: 200,
	ease: "slow(0.7, 0.7, false)",
	duration: 4500,
})

tl.to("#intro-name", {
	y: -300,
	ease: "power2.out",
	duration: 4500,
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
	y: -350,
	duration: 12000,
})

tl.to("#intro-passion", {
	opacity: 1,
	y: -100,
	duration: 9000,
})

tl.to(["#intro-motivated", "#intro-passion", "#intro-full-stack"], {
	opacity: 0,
	y: -500,
	scale: 0.5,
	duration: 9000,
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
		tl2.fromTo(
			".swiper-container",
			//display none
			{ scale: 0.1 },
			{
				opacity: 1,
				duration: 1,
				scale: 1.0,
				ease: "bounce",
				display: "block",
			}
		)
	})
})

// swiper
var swiper = new Swiper(".swiper-container", {
	effect: "cube",
	// autoplay: {
	// 	delay: 3000,
	// },
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
})
