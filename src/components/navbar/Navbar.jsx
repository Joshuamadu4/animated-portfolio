import './navbar.scss'
import {motion} from "framer-motion"
import Sidebar from '../Sidebar.jsx/sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
        {/*Sidebar*/}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}> Josh Dev </motion.span>
            <motion.div className='social'initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}>
                <a href="#"><img src="/facebook.png"/></a>
                <a href="#"><img src="/instagram.png"/></a>
                <a href="#"><img src="/youtube.png"/></a>
                <a href="#"><img src="/dribbble.png"/></a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar