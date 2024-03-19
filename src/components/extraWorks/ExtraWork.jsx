import React from 'react'
import extraProjectData from '../../assets/data/extra-projects.json';
import mediportelaScreenshot from '../../assets/images/mediportela-screenshot.png';
import appDespesasScreenshot from '../../assets/images/app-despesas-screenshot.png';

export default function ExtraWork() {
  return (
    <section id={`extra-work`} className='container mt-12'>
        <h2 className='text-2xl font-medium dark:text-slate-200'>Extra Projects</h2>
        <hr className="mt-5 mb-10 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
        {extraProjectData['extra-projects'].map((project) => (
          <>
          <article id={`${project.id}`}>
            <h5 className='inline-flex items-baseline font-medium leading-tight dark:text-slate-200 focus-visible:text-teal-300 group/link text-2xl'><a href={`${project.link}`}>{project.name}</a></h5>
            <p className='mt-2 text-sm leading-normal dark:text-slate-500'>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank">
                {project.id === 'mediportela' ? (
                  <img className="mt-2 rounded-lg shadow-md" src={mediportelaScreenshot} alt={project.name} />
                ) : (
                  <img className="mt-2 rounded-lg shadow-md" src={appDespesasScreenshot} alt={project.name} />
                )}
              </a>
            )}
            <ul className='mt-2 flex flex-wrap'>
              {project.languages.map((language) => (
                <li className='mr-1.5 mt-2' key={language}>
                  <div className='flex items-center rounded-full bg-dark-background dark:bg-teal-100/10 px-3 py-1 text-xs font-medium leading-5 text-slate-100'>{language}</div>
                </li>
              ))}
            </ul>
          </article>
          <hr className="my-10 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
          </>
        ))}
      </section>
  );
}
