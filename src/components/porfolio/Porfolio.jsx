import "./porfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1, 
    title: "React Commerce", 
    img:"https://images.pexels.com/photos/6347728/pexels-photo-6347728.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque ex soluta eaque, debitis excepturi totam officia quae doloribus labore quo quam praesentium nesciunt sint exercitationem explicabo quidem distinctio possimus?"

  },
  {
    id: 2, 
    title: "Next.js project", 
    img:"https://images.pexels.com/photos/3766227/pexels-photo-3766227.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque ex soluta eaque, debitis excepturi totam officia quae doloribus labore quo quam praesentium nesciunt sint exercitationem explicabo quidem distinctio possimus?"

  },
  {
    id: 3, 
    title: "Vanilla JS App", 
    img:"https://images.pexels.com/photos/4050350/pexels-photo-4050350.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque ex soluta eaque, debitis excepturi totam officia quae doloribus labore quo quam praesentium nesciunt sint exercitationem explicabo quidem distinctio possimus?"

  },
  {
    id: 4, 
    title: "Estate Management App", 
    img:"https://images.pexels.com/photos/6912833/pexels-photo-6912833.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque ex soluta eaque, debitis excepturi totam officia quae doloribus labore quo quam praesentium nesciunt sint exercitationem explicabo quidem distinctio possimus?"

  },
];

const Single = ({items}) => {

  const ref = useRef()

  const { scrollYProgress} = useScroll({
    target: ref, 
   // offset: ["start start", "end start"]
    
  }); 

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

 
  return(
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer"  ref={ref}>
            <img src={items.img} alt=""/>
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2 >{items.title}</h2>
            <p>{items.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>

      
      </div>
    </section>
  )

}


const Porfolio = () => {
  const ref = useRef()

  const { scrollYProgress} = useScroll({target: ref, 
    offset:["end end", "start start"],
  }); 

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, 
    damping: 30, 
  }); 

  return (
    <div className="porfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{scaleX}} >

        </motion.div>
      </div>
      {items.map(item=>(
        <Single items={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Porfolio