import { motion } from 'framer-motion'
import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { LuDownload } from 'react-icons/lu'

const Card = ({data, reference}) => {
  return (
    <>
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.1} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className='relative flex-shrink-0 w-52 h-64 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden'>
            <FaRegFileAlt/>
            <p className='text-xs font-semibold leading-tight mt-5'>{data.desc}</p>
            <div className="footer absolute  w-full bottom-0 left-0 ">
                <div className='flex items-center justify-between mb-2 py-3 px-8'>
                    <h5 className='text-xs'>{data.filesize}</h5>
                    <span className='w-6 h-6 bg-zinc-600 flex items-center justify-center rounded-full py-3 cursor-pointer '>
                        {data.close ? <IoClose/> : <LuDownload size=".7em" color='white'/> }
                    </span>
                </div>
                {data.tag.isOpen && (
                      <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
                         <h3 className='text-xs font-semibold '>{data.tag.tagTitle}</h3>
                      </div>
                    )
                }
            </div>
        </motion.div>
    </>
  )
}

export default Card