const CallToAction = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-zinc-800 to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zinc-200 mb-8">
            Join thousands of satisfied customers who have taken their business
            to the next level
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-white text-zinc-800 font-semibold rounded-lg hover:bg-zinc-100 transition duration-300">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zinc-800 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
