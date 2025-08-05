import React from 'react'
import { motion } from 'framer-motion'
import { Target, Award, Users, TrendingUp, Building, Wrench } from 'lucide-react'

export default function About() {
  const stats = [
    { number: "15+", label: "Anos de Experiência", icon: Award },
    { number: "5000+", label: "Projetos Concluídos", icon: Building },
    { number: "500+", label: "Clientes Satisfeitos", icon: Users },
    { number: "98%", label: "Taxa de Aprovação", icon: TrendingUp }
  ]

  const values = [
    {
      icon: Target,
      title: "Precisão",
      description: "Cada produto é entwickelt com exatidão milimétrica para garantir o encaixe perfeito."
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Materiais de primeira linha e processos rigorosos de controle de qualidade."
    },
    {
      icon: Wrench,
      title: "Inovação",
      description: "Tecnologia avançada aplicada ao desenvolvimento de soluções em vedação."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Building className="h-4 w-4" />
            <span>Sobre a NTCJunta</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-950 mb-6">
            Especialistas em
            <span className="text-gradient-primary"> Juntas de Dilatação</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Há mais de 15 anos fornecendo soluções inovadoras e de alta performance 
            para construções que exigem máxima segurança e durabilidade.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center card-hover border border-gray-100"
            >
              <stat.icon className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <div className="text-4xl lg:text-5xl font-bold text-secondary-950 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-secondary-950 mb-6">
              Tecnologia Avançada em
              <span className="text-gradient-primary"> Vedação</span>
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                A <strong className="text-secondary-900">NTCJunta</strong> nasceu da necessidade 
                de oferecer ao mercado brasileiro soluções de vedação que combinam 
                tecnologia internacional com a praticidade exigida pelas obras nacionais.
              </p>
              
              <p>
                Nossa <strong className="text-primary-600">Junta Fugenband</strong> é resultado 
                de anos de pesquisa e desenvolvimento, oferecendo proteção superior contra 
                infiltrações, adaptabilidade a diferentes superfícies e facilidade de instalação.
              </p>
              
              <p>
                Trabalhamos constantemente para inovar e aperfeiçoar nossos produtos, 
                garantindo que cada construção tenha a proteção que merece, seja ela 
                residencial ou comercial.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5519983610043"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Fale Conosco</span>
                <TrendingUp className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.img
                whileHover={{ scale: 1.02 }}
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754356966425_ucjk3hgo52_juntas-fugenband-506x372.jpg"
                alt="Junta Fugenband Instalada - NTCJunta"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent rounded-2xl transform -rotate-3 scale-105 -z-10"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-900/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-secondary-950 mb-4">
            Nossos Valores
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Os pilares que guiam nosso trabalho e garantem a excelência em cada produto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center card-hover border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-secondary-950 mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}