import { motion } from 'framer-motion'
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaPhone, FaEnvelope } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'

const Contact = () => {
  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaDiscord, href: "#", label: "Discord" },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-3xl bg-stone-50/90 backdrop-blur-sm dark:text-white dark:bg-neutral-950/90 w-full md:mr-10 max-h-full md:my-10 p-8"
    >
      <div className="absolute w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-400 to-purple-500 opacity-20 blur-[100px] rounded-full"></div>
      <div className="relative z-10 flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold">Contact Us</h1>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
              <FaPhone className="text-lg" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
              <FaEnvelope className="text-lg" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
              <HiLocationMarker className="text-lg" />
              <span>123 Tech Street, Silicon Valley, CA</span>
            </div>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <social.icon className="text-xl" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 bg-neutral-100 dark:bg-neutral-800/50 rounded-xl focus:outline-none focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-700 transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-neutral-100 dark:bg-neutral-800/50 rounded-xl focus:outline-none focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-700 transition-all"
          />
          <textarea
            rows={6}
            placeholder="Type your message here..."
            className="w-full p-4 bg-neutral-100 dark:bg-neutral-800/50 rounded-xl focus:outline-none focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-700 transition-all resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full p-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact