import React from 'react'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Hammer, ArrowRight, Star, Award, Zap } from 'lucide-react'

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const benefits = [
    "Resistente a variações climáticas",
    "Fácil instalação com grampos ou estribos",
    "Ancoragem segura nas armaduras",
    "Material flexível e durável",
    "Proteção eficiente contra infiltrações",
    "Ideal para obras residenciais e comerciais"
  ]

  const features = [
    {
      icon: Shield,
      title: "Proteção Máxima",
      description: "Vedação eficiente contra infiltrações e intempéries"
    },
    {
      icon: Hammer,
      title: "Instalação Simples",
      description: "Processo rápido com grampos, estribos e ancoragens"
    },
    {
      icon: Zap,
      title: "Alta Performance",
      description: "Material flexível que se adapta a diversas superfícies"
    }
  ]

  const specifications = [
    { label: "Material", value: "Elastômero de alta qualidade" },
    { label: "Flexibilidade", value: "Adaptação a movimentações estruturais" },
    { label: "Durabilidade", value: "Resistente aos efeitos do tempo" },
    { label: "Aplicação", value: "Fixação com grampos ou estribos" },
    { label: "Uso", value: "Residencial e comercial" }
  ]

  return (
    <section id="services" className="section-padding bg-white">
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
            <Award className="h-4 w-4" />
            <span>Nossos Produtos</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-950 mb-6">
            Junta
            <span className="text-gradient-primary"> Fugenband</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A solução ideal para garantir vedação eficiente em construções e reformas.
            Tecnologia de ponta em proteção contra infiltrações.
          </p>
        </motion.div>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative z-10"
              >
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754356965228_qucp1sx31i_juntas-fugenband-1.jpg"
                  alt="Junta Fugenband - Vista Principal"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754356966425_ucjk3hgo52_juntas-fugenband-506x372.jpg"
                  alt="Junta Fugenband - Aplicação"
                  className="w-full h-60 object-cover rounded-xl shadow-lg"
                />
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary-900/5 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-primary-600 mb-4"
              >
                <Star className="h-5 w-5 fill-current" />
                <span className="font-medium">Produto Premium</span>
              </motion.div>

              <h3 className="text-3xl font-bold text-secondary-950 mb-6">
                Proteção Superior Contra Infiltrações
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                A Junta Fugenband é fabricada com material flexível e resistente, 
                adaptando-se facilmente a diversas superfícies e proporcionando proteção 
                contra infiltrações e variações climáticas. Sua instalação simples 
                aumenta a durabilidade de estruturas e evita problemas futuros.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-secondary-950 mb-4">
                ✨ Principais Benefícios:
              </h4>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-primary flex items-center space-x-2 text-lg"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-950 mb-4">
              Características Técnicas
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Desenvolvida para atender aos mais rigorosos padrões de qualidade e performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg text-center card-hover border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-secondary-950 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specifications Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-secondary-950 mb-4">
              Especificações Técnicas
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detalhes técnicos que garantem a qualidade e eficiência do produto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
              >
                <div className="text-sm text-primary-600 font-medium mb-2">
                  {spec.label}
                </div>
                <div className="text-lg font-semibold text-secondary-950">
                  {spec.value}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/5519983610043"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>Fale com Nossos Especialistas</span>
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}