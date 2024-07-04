import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
//import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress} from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="My Awesome
       services" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Developer"
          des="Html, Css, JavaScript, React, WordPress, WebApp Tester."
         
        />
        <Card
          title="Design"
          des="Canva, Adobe Illustrator, Adobe Photoshop, CapCut, Wondershare Filmora."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Maintenace"
          des="Computer, Printer, Copier, Scanner, CCTV Camera, Door To Door Services."
          icon={<SiProgress />}
        />
        
      </div>
    </section>
  );
}

export default Features