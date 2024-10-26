import React from 'react'
import extraProjectData from '../../assets/data/extra-projects.json';

export default function ExtraWork() {
  return (
    <section id={`extra-work`} className='container mt-12'>
        <h2 className='text-2xl font-medium dark:text-slate-200'>Extra Projects</h2>
        <hr className="mt-5 mb-10 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
        {extraProjectData['extra-projects'].map((project) => (
          <article id={`${project.id}`} key={project.id}>
            <div className='flex justify-between items-center'>
              <h5 className='inline-flex items-baseline font-medium leading-tight dark:text-slate-200 focus-visible:text-teal-300 group/link text-lg lg:text-2xl'>
                <a href={`${project.link}`}>
                  {project.name}
                </a>
              </h5>
              <div className="group cursor-pointer flex items-center bg-dark-background dark:bg-slate-400 text-white dark:text-black font-bold py-1 px-2 lg:py-2 lg:px-4 rounded-full">
                <a className='text-xs' href={`${project.link}`}>
                  Visit 
                </a>
                <svg className="ml-1 mt-0.5 w-3 h-auto lg:w-4 hidden md:block rotate-180 transition duration-300 ease-in transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.293 6.293a1 1 0 011.414 1.414L7.414 11H16a1 1 0 110 2H7.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className='mt-2 text-sm leading-normal dark:text-slate-500'>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img className="mt-2 rounded-lg shadow-md" src={`${project.id}-screenshot.png`} alt={project.name} loading='lazy' />
              </a>
            )}
            <ul className='mt-2 flex flex-wrap'>
              {project.languages.map((language) => (
                <li className='mr-1.5 mt-2' key={language}>
                  <div className='flex items-center rounded-full bg-dark-background dark:bg-teal-100/10 px-3 py-1 text-xs font-medium leading-5 text-slate-100'>{language}</div>
                </li>
              ))}
            </ul>
          <hr className="my-10 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
          </article>
        ))}
      </section>
  );
}
