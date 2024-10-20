import React, {useState, useEffect} from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'


import { AnimatePresence, motion } from 'framer-motion'
import config from '../config/config'
import {download, logoShirt, stylishShirt} from '../assets'
import { downloadCanvasToImage, reader} from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'

import { AiPicker, ColorPicker, Tab, CustomButton, FilePicker } from '../components'

const Customizer = () => {

    const snap = useSnapshot(state)

    const [file, setFile] = useState('')
    const [prompt, setPrompt] = useState('')
    const [generatingImg, setGeneratingImg] = useState(false)

    const [activeEditorTab, setActiveEditorTab] = useState('')
    const [activeFilterTab, setActiveFilterTab] = useState({
        logoShirt: true,
        stylishShirt: false
    })

    // show tab content depending on active tab
    const generateTabContent = () => {
        switch (activeEditorTab) {
            case "colorpicker": 
                return <ColorPicker />
            case "filepicker":
                return <FilePicker />
            case 'aipicker':
                return <AiPicker />
                default: 
                    return null;
        }

    }

    return (
        <AnimatePresence>
            {!snap.intro && (
                <>
                    <motion.div key='custom' className='z-10 top-0 absolute left-0' {...slideAnimation('left')}>
                        <div className='flex items-center min-h-screen'>
                            <div className='editortabs-container tabs'>
                                {
                                    EditorTabs.map((tab)=>(
                                        <Tab key={tab.name}
                                            tab={tab}
                                            handleClick = {()=> setActiveEditorTab(tab.name)}
                                        />
                                    ))
                                }

                                {generateTabContent()}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='absolute z-10 top-5 right-5' {...fadeAnimation}>
                        <CustomButton type='filled' 
                                       title="Go Back" 
                                       handleClick={() => state.intro = true}
                                       customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>


                    <motion.div className='filtertabs-container' {...slideAnimation('up')}>
                                {
                                    FilterTabs.map((tab)=>(
                                        <Tab key={tab.name}
                                            tab={tab}
                                            isFilterTab
                                            isActiveTab=""
                                            handleClick = {()=>{}}
                                        />
                                    ))
                                }     
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Customizer
