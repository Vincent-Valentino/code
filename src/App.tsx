

function Home() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 w-full h-full flex flex-col md:flex-row">
      <div className="w-full dark:text-white md:w-44 h-20 md:h-screen md:mx-10 md:my-auto flex flex-row md:flex-col items-center suse justify-center gap-4 md:gap-4">
        <div className="bakbak text-blue-800 text-5xl">
          Coder
        </div>
        <button className="">
          Dashboard
        </button>
        <button className="">
          Activity
        </button>
        <button className="">
          Course
        </button>
        <button className="">
          About Us
        </button>

      </div>
      <div className="rounded-3xl bg-stone-50 dark:bg-neutral-950 shadow-md w-full md:mx-10 h-screen md:mr-10 md:my-10">
        
      </div>
    </div>
  )
}

export default Home
