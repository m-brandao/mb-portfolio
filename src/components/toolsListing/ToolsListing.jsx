import React from 'react'
import toolsData from '../../assets/data/tools.json';


export default function ToolsListing({ id }) {

    const tool = toolsData.tools.find(tool => tool.id === id);

    const { toolNames } = tool;

  return (
    <section id='tools' className='mt-10'>
        <div>
            <h3 className='dark:text-slate-200'>Programming Knowledge</h3>
            <ul className='mt-2 flex flex-wrap'>
                {toolNames.map( item => (
                    <li className='mr-1.5 mt-2' key={item}>

                        <div className="group flex relative">
                            
                            {/* <span className={item[0] !== 'PHP' ? 'w-5 h-5 flex dark:hidden' : 'w-7 h-7 flex dark:hidden'}>{item[1]}</span> */}
                            <img className={item[0] !== 'PHP' ? 'w-5 h-5 flex dark:hidden' : 'w-7 h-7 flex dark:hidden'} src={item[1]} alt="" />
                            <img className={item[0] !== 'PHP' ? 'w-5 h-5 hidden dark:flex' : 'w-7 h-7 hidden dark:flex'} src={item[2]} alt="" />
                            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">{item[0]}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}
