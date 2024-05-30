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
import TAILWIND from "../../assets/images/tailwindcss.svg";
import TAILWINDWhite from "../../assets/images/tailwindcss-white.svg";
import SASS from "../../assets/images/sass.svg";
import SASSWhite from "../../assets/images/sass-white.svg";
import FIREBASE from "../../assets/images/firebase.svg";
import FIREBASEWhite from "../../assets/images/firebase-white.svg";
import MJML from "../../assets/images/mjml.svg";
import MJMLWhite from "../../assets/images/mjml-white.svg";




export default function ToolsListing({ id }) {

    const tool = toolsData.tools.find(tool => tool.id === id);

    const { toolNames } = tool;

  return (

    <section id="tools" className="mt-10">
        <div>
            <h3 className='dark:text-slate-200'>Programming Knowledge</h3>
            <div className='mt-2 flex items-center flex-wrap'>
                {/* HTML5 */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={HTML5} alt="html5 icon" />
                    <img className='w-5 h-5 hidden dark:flex' src={HTML5White} alt="html5 icon" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">HTML5</span>
                </div>
                {/* CSS */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={CSS} alt="css3 icon" />
                    <img className='w-5 h-5 hidden dark:flex' src={CSSWhite} alt="css3 icon" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">CSS</span>
                </div>
                {/* TAILWIND CSS */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={TAILWIND} alt="Tailwind Css icon" />
                    <img className='w-5 h-5 hidden dark:flex' src={TAILWINDWhite} alt="Tailwind Css icon" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Tailwind</span>
                </div>
                {/* SASS */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={SASS} alt="SASS icon" />
                    <img className='w-5 h-5 hidden dark:flex' src={SASSWhite} alt="SASS icon" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">SASS</span>
                </div>
                {/* PHP */}
                <div className='group flex relative mx-1'>
                    <img className='w-7 h-7 flex dark:hidden' src={PHP} alt="PHP icon" />
                    <img className='w-7 h-7 hidden dark:flex' src={PHPWhite} alt="PHP icon" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">PHP</span>
                </div>
                {/* JS */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={JS} alt="JS icon" />
                    <img className='w-5 h-5 hidden dark:flex' src={JSWhite} alt="JS icon" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">JS</span>
                </div>
                {/* REACT */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={REACT} alt="React.js icon" />
                    <img className='w-5 h-5 hidden dark:flex' src={REACTWhite} alt="React.js icon" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">REACT</span>
                </div>
                {/* WORDPRESS */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={WORDPRESS} alt="" />
                    <img className='w-5 h-5 hidden dark:flex' src={WORDPRESSWhite} alt="" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">WORDPRESS</span>
                </div>
                {/* FIREBASE */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={FIREBASE} alt="" />
                    <img className='w-5 h-5 hidden dark:flex' src={FIREBASEWhite} alt="" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">FIREBASE</span>
                </div>
                {/* MJML */}
                <div className='group flex relative mx-1'>
                    <img className='w-5 h-5 flex dark:hidden' src={MJML} alt="" />
                    <img className='w-5 h-5 hidden dark:flex' src={MJMLWhite} alt="" />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">MJML</span>
                </div>
            </div>
        </div>
    </section>
  )
}
