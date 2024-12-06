import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: "How do I get started with the courses?",
      answer: "Simply create an account, browse our course catalog, and enroll in any course that interests you. You can start learning immediately after enrollment."
    },
    {
      question: "Are the certificates recognized?",
      answer: "Yes, our certificates are industry-recognized and can be added to your LinkedIn profile or resume. They validate your skills and knowledge in the specific course area."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Some courses also offer installment payment options."
    },
    {
      question: "Can I access the courses on mobile devices?",
      answer: "Yes, our platform is fully responsive. You can access all course content on any device through our website or mobile app."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-3xl bg-stone-50/90 backdrop-blur-sm dark:text-white dark:bg-neutral-950/90 w-full md:mr-10 max-h-full md:my-10 p-8"
    >
      <div className="absolute w-[600px] h-[400px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 opacity-20 blur-[100px] rounded-full"></div>
      <div className="relative z-10 flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
      </div>
      <div className="relative z-10 space-y-4">
        {faqItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.2,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="border border-gray-200 dark:border-gray-700/50 rounded-xl overflow-hidden"
          >
            <button
              className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50/50 dark:hover:bg-neutral-900/50 transition-colors duration-200"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className="font-medium text-lg">{item.question}</span>
              <motion.span
                animate={{ 
                  rotate: activeIndex === index ? 180 : 0,
                  opacity: activeIndex === index ? 0.5 : 1
                }}
                transition={{ duration: 0.2, ease: "circOut" }}
                className="text-xl"
              >
                ⌄
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: "auto", 
                    opacity: 1,
                    transition: {
                      height: { duration: 0.2 },
                      opacity: { duration: 0.3, delay: 0.1 }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      height: { duration: 0.2 },
                      opacity: { duration: 0.1 }
                    }
                  }}
                  className="px-5 pb-5 text-gray-600 dark:text-gray-300"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default FAQ