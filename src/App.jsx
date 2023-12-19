import './App.css'
import Navbar from './components/navbar/Navbar'
import mugshotPicture from './assets/images/foto-MB.jpg'
import Project from './components/project/Project'
import Socials from './components/socials/Socials'
import ToolsListing from './components/toolsListing/ToolsListing'
import Footer from './components/footer/Footer'

function App() {

  return (
    <section className='bg-white dark:bg-slate-900 mx-auto min-h-screen'>
      <Navbar />

      <section className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>

          <div className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
            <div>
              <img className='h-60 w-60 transition-all duration-300 rounded-full border-solid border-black dark:border-white border-4 flex-none bg-gray-50' src={mugshotPicture} alt="Miguel Brandão pic" />
              <h1 className='text-4xl font-bold tracking-tight dark:text-slate-200 sm:text-5xl mt-5'>Miguel Brandão</h1>
              <h2 className='text-lg font-medium tracking-tight dark:text-slate-200 sm:text-xl'>Web Developer from Portugal</h2>
              <Socials />
              <ToolsListing id="Tools" />
            </div>
          </div>

          <main className='pt-24 lg:w-1/2 lg:py-24'>
            <section id='about-me' className='mb-16 text-lg font-light scroll-mt-16 md:mb-15 lg:mb-20 lg:scroll-mt-24 dark:text-slate-200'>
              <p className='mb-4'>Welcome! I started my professional journey at 17, and since 2017, I've excelled in three roles. With a background in web development and marketing, I merge technical skills with creative strategies.</p>
              <p className='mb-4'>I've crafted impactful web solutions, exceeding client expectations. Noteworthy projects include <a className='hover:text-teal-600 hover:underline font-bold' href="https://sustentabilidade.negocios.pt/" target='_blank' rel='noopener'>Prémio Nacional de Sustentabilidade</a>, <a className='hover:text-teal-600 hover:underline font-bold' href="https://www.tranquilidadepme.com/" target='_blank' rel='noopener'>Tranquilidade PME</a>, <a className='hover:text-teal-600 hover:underline font-bold' href="https://alticecorporatepadelleague.negocios.pt/" target='_blank' rel='noopener'>Altice Corporate Padel League</a>, <a className='hover:text-teal-600 hover:underline font-bold' href="https://premiosexportacaoeinternacionalizacao.negocios.pt/" target='_blank' rel='noopener'>Prémio Exportação e Internacionalização</a> and <a className='hover:text-teal-600 hover:underline font-bold' href="http://mediportela.pt/" target='_blank' rel='noopener'>Mediportela</a>. I'm known for my problem-solving abilities and dedication to teamwork.</p>
              <p className='mb-4'>I'm driven to advance, tackle more pivotal roles, and stay at the forefront of active projects. My dedication and teamwork skills continue to be my driving force.</p>
            </section>

            <h2 className='text-2xl font-medium dark:text-slate-200'>Projects</h2>
            <hr className="mt-5 mb-10 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
            
            <Project id="present" />
            <hr className="my-10 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
            <Project id="cofina" />
            <hr className="my-10 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
            <Project id="savills" />
          </main>

        </div>
      </section>
      <Footer />
    </section>
  )
}

export default App
