import SidebarDesktop from "./SidebarDesktop"

function Home() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 w-full h-screen flex flex-col md:flex-row">
      <SidebarDesktop/>
      <div className="rounded-3xl bg-stone-50 dark:bg-neutral-950 shadow-md w-full md:mr-10 max-h-full md:mr-10 md:my-10">
        <h1 className="p-5 text-3xl">Welcome to Coder</h1>
      </div>
    </div>
  )
}

export default Home
