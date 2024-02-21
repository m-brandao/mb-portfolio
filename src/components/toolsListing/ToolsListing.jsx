import React from 'react'
import toolsData from '../../assets/data/tools.json';

import HTML5 from "../../assets/images/html5-main-color.svg";
import HTML5White from "../../assets/images/html5-white.svg";
import CSS from "../../assets/images/css3-main-color.svg";
import CSSWhite from "../../assets/images/css3-white.svg";
import PHP from"../../assets/images/php-main-color.svg";
import PHPWhite from"../../assets/images/php-white.svg";
import JS from "../../assets/images/js-main-color.svg";
import JSWhite from "../../assets/images/js-white.svg";
import REACT from "../../assets/images/react-main-color.svg";
import REACTWhite from "../../assets/images/react-white.svg";
import WORDPRESS from "../../assets/images/wordpress-main-color.svg";
import WORDPRESSWhite from "../../assets/images/wordpress-white.svg";




export default function ToolsListing({ id }) {

    const tool = toolsData.tools.find(tool => tool.id === id);

    const { toolNames } = tool;

  return (
    // <section id='tools' className='mt-10'>
    //     <div>
    //         <h3 className='dark:text-slate-200'>Programming Knowledge</h3>
    //         <ul className='mt-2 flex flex-wrap'>
    //             {toolNames.map( item => (
    //                 <li className='mr-1.5 mt-2' key={item}>

    //                     <div className="group flex relative">

    //                         <img className={item[0] !== 'PHP' ? 'w-5 h-5 flex dark:hidden' : 'w-7 h-7 flex dark:hidden'} src="../../assets/images/css3-main-color.png" alt="" />
    //                         {/* <img className={item[0] !== 'PHP' ? 'w-5 h-5 flex dark:hidden' : 'w-7 h-7 flex dark:hidden'} src={item[1]} alt="" />
    //                         <img className={item[0] !== 'PHP' ? 'w-5 h-5 hidden dark:flex' : 'w-7 h-7 hidden dark:flex'} src={item[2]} alt="" /> */}
    //                         <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">{item[0]}</span>
    //                     </div>
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // </section>

    <section id="tools" className="mt-10">
        <div>
            <h3 className='dark:text-slate-200'>Programming Knowledge</h3>
            <div className='mt-2 flex flex-wrap'>
                {/* HTML5 */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={HTML5} alt="" />
                    <img className='w-5 h-5 hidden dark:flex' src={HTML5White} alt="" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">HTML5</span>
                </div>
                {/* CSS */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={CSS} alt="" />
                    <img className='w-5 h-5 hidden dark:flex' src={CSSWhite} alt="" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">CSS</span>
                </div>
                {/* PHP */}
                <div className='group flex relative mx-1'>
                    <img className='w-7 h-7 flex dark:hidden' src={PHP} alt="" />
                    <img className='w-7 h-7 hidden dark:flex' src={PHPWhite} alt="" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">PHP</span>
                </div>
                {/* JS */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={JS} alt="" />
                    <img className='w-5 h-5 hidden dark:flex' src={JSWhite} alt="" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">JS</span>
                </div>
                {/* REACT */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={REACT} alt="" />
                    <img className='w-5 h-5 hidden dark:flex' src={REACTWhite} alt="" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">REACT</span>
                </div>
                {/* WORDPRESS */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={WORDPRESS} alt="" />
                    <img className='w-5 h-5 hidden dark:flex' src={WORDPRESSWhite} alt="" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">WORDPRESS</span>
                </div>
            </div>
        </div>
    </section>
  )
}
