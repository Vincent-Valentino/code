import { motion } from 'framer-motion'
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl bg-stone-50 dark:text-white dark:bg-neutral-950 w-full md:mr-10 max-h-full md:my-10 p-6"
    >
      <div className="absolute w-[500px] h-[300px] top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 opacity-30 blur-3xl rounded-full"></div>
      <div className="relative z-10 flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
      </div>
      <div className="relative z-10 space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-700">
            <button
              className="w-full text-left py-4 flex justify-between items-center"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className="font-medium">{item.question}</span>
              <span className="transform transition-transform duration-200 text-xl">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="pb-4 text-gray-600 dark:text-gray-300"
              >
                {item.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default FAQ