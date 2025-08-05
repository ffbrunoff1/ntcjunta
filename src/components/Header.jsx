import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  const menuItems = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Produtos', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754356973265_0.png"
              alt="NTCJunta"
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`text-base font-medium transition-colors duration-300 hover:text-primary-500 ${
                  isScrolled ? 'text-gray-900' : 'text-white hover:text-primary-300'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:(11)5242-4280"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary-500' 
                  : 'text-white/90 hover:text-primary-300'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span>(11) 5242-4280</span>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:contato@ntcbrasil.com.br"
              className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary-500' 
                  : 'text-white/90 hover:text-primary-300'
              }`}
            >
              <Mail className="h-4 w-4" />
              <span>Contato</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5519983610043"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-3"
            >
              WhatsApp
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={ false }
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: {
                duration: 0.3,
                staggerChildren: 0.1
              }
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: {
                duration: 0.3
              }
            }
          }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20"
        >
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 }
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-base font-medium text-gray-900 hover:text-primary-500 transition-colors duration-300 py-2"
              >
                {item.name}
              </motion.button>
            ))}
            
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a
                href="tel:(11)5242-4280"
                className="flex items-center space-x-3 text-gray-700 hover:text-primary-500 transition-colors duration-300"
              >
                <Phone className="h-4 w-4" />
                <span>(11) 5242-4280</span>
              </a>
              
              <a
                href="mailto:contato@ntcbrasil.com.br"
                className="flex items-center space-x-3 text-gray-700 hover:text-primary-500 transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span>contato@ntcbrasil.com.br</span>
              </a>
              
              <a
                href="https://wa.me/5519983610043"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block mt-4"
              >
                Fale no WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}