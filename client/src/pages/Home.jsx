import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'
import {
    headContainerAnimation,
    headTextAnimation,
    headContentAnimation,
    slideAnimation
} from '../config/motion'

import state from '../store'

const Home = () => {

    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {
                snap.intro && (
                    <motion.section className='home' {...slideAnimation('left')}>
                        <motion.header {...slideAnimation('down')}>
                            <img src='./threejs.png' alt='logo' className='w-10 h-10 object-contain'/>
                        </motion.header>
                    </motion.section>
                )
            }
        </AnimatePresence>
    )
}

export default Home
