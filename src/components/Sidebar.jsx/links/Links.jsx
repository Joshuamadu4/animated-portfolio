import {motion} from 'framer-motion';

const variants = {
    open: {
        transition:{
            staggerChildren:0.1,
        },
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    open: {
        y:0,
        opacity:3,
        },
    
    closed:{
        y:50,
        opacity:0,
    },
};
const Links = () => {
    const items = [
        "Homepage",
        "Services",
        "Porfolio",
        "Contact",
        "About",
        
    ]
  return (
    <div className="links" variants={variants}>{items.map(item =>(
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
            {item}
        </motion.a>
    )
        
        )}
    </div>
  )
}

export default Links