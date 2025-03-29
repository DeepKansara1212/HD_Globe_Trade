"use client"

import { useState, useEffect, useRef } from "react"
import { Routes, Route, useLocation } from "react-router-dom"

// Components
import Navbar from "./components/layout/Navbar.jsx"
import Footer from "./components/layout/Footer.jsx"
import ScrollToTop from "./components/ui/ScrollToTop.jsx"

// Pages
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Trust from "./pages/Trust.jsx"
import Products from "./pages/Products.jsx"
import Contact from "./pages/Contact.jsx"
import NotFound from "./pages/NotFound.jsx"

function App() {
  const { pathname } = useLocation()
  const [isLoading, setIsLoading] = useState(true)
  const [loadingPercentage, setLoadingPercentage] = useState(0)
  const [loadingComplete, setLoadingComplete] = useState(false)
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationFrameRef = useRef(null)

  // Canvas particle animation
  useEffect(() => {
    if (!isLoading || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create particles
    const createParticles = () => {
      particlesRef.current = []
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.15), 200)

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          color: getRandomColor(),
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          acceleration: Math.random() * 0.02 + 0.01,
          opacity: Math.random() * 0.5 + 0.3,
          pulse: Math.random() * 0.1 + 0.05,
          pulseDirection: 1,
        })
      }
    }

    const getRandomColor = () => {
      // Updated colors to green and blue shades
      const colors = [
        "#00FF88",
        "#00DDFF",
        "#00BBFF",
        "#00FF99",
        "#00FFCC",
        "#00CCFF",
        "#0088FF",
        "#00FFAA",
        "#00DDAA",
        "#00AAFF",
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient - updated to green/blue
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "#0a2e35")
      gradient.addColorStop(1, "#0a3b4a")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 1

      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position with increased speed
        particle.x += particle.speedX * 1.5
        particle.y += particle.speedY * 1.5

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Pulse effect
        particle.opacity += particle.pulse * particle.pulseDirection
        if (particle.opacity > 0.8 || particle.opacity < 0.2) {
          particle.pulseDirection *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()

        // Draw connections
        particlesRef.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle =
              particle.color +
              Math.floor((0.2 - distance / 500) * 255)
                .toString(16)
                .padStart(2, "0")
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [isLoading])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    let interval

    if (isLoading) {
      // Faster loading speed
      interval = setInterval(() => {
        setLoadingPercentage((prev) => {
          // Increased speed with larger increments
          const newValue = prev + (prev < 50 ? 2 : prev < 80 ? 1.5 : 1)

          if (newValue >= 100) {
            clearInterval(interval)
            setLoadingComplete(true)
            setTimeout(() => setIsLoading(false), 800) // Shorter delay
            return 100
          }
          return newValue
        })
      }, 25) // Reduced interval time for faster updates
    }

    return () => interval && clearInterval(interval)
  }, [isLoading])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
        {/* Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* Loader Container */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Liquid Loader */}
          <div className="relative w-64 h-64 mb-8">
            {/* Container Border */}
            <div className="absolute inset-0 rounded-full border-4 border-white/10 overflow-hidden">
              {/* Glowing Border Effect - Updated to green/blue */}
              <div
                className="absolute inset-0 border-4 rounded-full"
                style={{
                  borderColor: loadingComplete ? "#00DDFF" : "transparent",
                  borderTopColor: "#00FF88",
                  borderRightColor: "#00DDFF",
                  animation: "spin 2s linear infinite", // Faster spin
                  boxShadow: "0 0 15px rgba(0, 221, 255, 0.6)",
                  transition: "border-color 0.5s ease-out",
                }}
              />
            </div>

            {/* Percentage Counter - Updated colors */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div
                  className="text-5xl font-bold"
                  style={{
                    background: "linear-gradient(to right, #00FF88, #00DDFF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 8px rgba(0, 221, 255, 0.6))",
                  }}
                >
                  {Math.round(loadingPercentage)}
                </div>
                <div className="text-white/80 mt-1 text-sm tracking-widest uppercase">Loading</div>
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="mt-6 text-center">
            <div className="text-white/60 text-sm">
              <span className="inline-block animate-pulse" style={{ color: "#00DDFF" }}>
                ⬤
              </span>{" "}
              Initializing System
            </div>
            <div className="mt-2 text-xs text-white/40 max-w-xs text-center" style={{ fontFamily: "monospace" }}>
              <span className="typing-effect">
                {loadingPercentage < 30
                  ? "Connecting to server..."
                  : loadingPercentage < 60
                    ? "Loading resources..."
                    : loadingPercentage < 90
                      ? "Preparing interface..."
                      : "Almost ready..."}
              </span>
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style>{`
          @keyframes wave {
            0%, 100% { transform: translateY(0) scaleX(1.2); }
            50% { transform: translateY(-10px) scaleX(1); }
          }
          
          @keyframes bubble {
            0% { transform: translateY(0) scale(1); opacity: 0.5; }
            100% { transform: translateY(-100px) scale(1.5); opacity: 0; }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes glitch {
            0%, 100% { transform: translateX(0); opacity: 0.3; }
            50% { transform: translateX(10px); opacity: 0.6; }
          }
          
          .typing-effect {
            border-right: 2px solid rgba(0, 221, 255, 0.7);
            animation: typing 1s steps(30) infinite;
            white-space: nowrap;
            overflow: hidden;
            display: inline-block;
          }
          
          @keyframes typing {
            0%, 100% { border-color: rgba(0, 221, 255, 0.7); }
            50% { border-color: transparent; }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-dark-default">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App