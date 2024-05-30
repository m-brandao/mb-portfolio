import React from 'react'
import projectData from '../../assets/data/project-data.json';

export default function Project({ id }) {
    const project = projectData.projects.find(project => project.id === id);

    const { date, role, company, description, programs } = project;

    return (
        <section id={'project-' + id}>
            <p className='text-xs uppercase dark:text-slate-500'>{date}</p>
            <p className='inline-flex items-baseline font-medium leading-tight dark:text-slate-200 focus-visible:text-teal-300 group/link text-2xl'>{role + ' · ' + company}</p>
            <p className='mt-2 text-sm leading-normal dark:text-slate-500'>{description}</p>
            <ul className='mt-2 flex flex-wrap'>
                {programs.map(item => (
                    <li className='mr-1.5 mt-2' key={item}>
                        <div className='flex items-center rounded-full bg-dark-background dark:bg-teal-100/10 px-3 py-1 text-xs font-medium leading-5 text-slate-100'>
                            {Array.isArray(item) ? (
                                <>
                                    {item[0]} <span className='ml-1 text-gray-400'>({item[1]})</span>
                                </>
                            ) : (
                                item
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
