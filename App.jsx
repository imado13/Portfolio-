import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 text-gray-800 p-6">
      <motion.header
        className="text-center py-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold mb-2">Imad — Développeur Full Stack</h1>
        <p className="text-lg">Je conçois des expériences numériques modernes et dynamiques</p>
      </motion.header>

      <motion.section
        className="my-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Projets</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Application Santé', 'Site E-commerce', 'Dashboard Admin'].map((title, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="h-40 bg-gradient-to-r from-blue-300 to-purple-300 rounded-xl mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm">Une solution innovante pour améliorer l'expérience utilisateur et les performances.</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="my-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">À propos</h2>
        <p className="max-w-3xl mx-auto text-center text-lg">
          Passionné par la technologie, je crée des applications performantes et intuitives avec des interfaces attrayantes. Mon objectif est de transformer les idées en solutions digitales concrètes.
        </p>
      </motion.section>

      <motion.section
        className="my-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Compétences</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {["React", "Node.js", "Tailwind CSS", "MongoDB", "Figma", "Firebase"].map((skill, i) => (
            <motion.span
              key={i}
              className="bg-white text-sm px-4 py-2 rounded-full shadow"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="my-12 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <form className="bg-white p-6 rounded-2xl shadow space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full px-4 py-2 border rounded-md"
          />
          <textarea
            rows="4"
            placeholder="Votre message"
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-blue-500 text-white py-2 rounded-md hover:opacity-90"
          >
            Envoyer
          </button>
        </form>
      </motion.section>

      <footer className="text-center mt-16 text-sm">
        <p>Contact : <a href="mailto:imadeddinemebarki9@gmail.com" className="underline">imadeddinemebarki9@gmail.com</a></p>
        <p className="mt-2">© 2025 Imad. Tous droits réservés.</p>
      </footer>
    </div>
  );
}