import Head from "./head"
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle , AiFillLinkedin , AiFillYoutube} from "react-icons/ai"
import Image from "next/image"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png"
import web4 from "../public/web4.png"
import web5 from "../public/web5.png"
import web6 from "../public/web6.png"


export default function Home() {
  return(
    <main className="bg-white px-10 md:px-20 lg:px-60">
      <section className="min-h-screen">
        <nav className="py-8 flex justify-between">
          <h1 className="text-xl font-serif">Developed By Zain Ul Abideen</h1>
          <ul className="flex items-center ">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" >Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center">
          <h2 className="text-5xl font-medium py-2 text-teal-600">Zain Ul Abideen</h2>
          <h3 className="text-2xl py-2">Software Developer</h3>
          <p className="text-md py-8  leading-8 text-gray-800">Certified Digital Marketeer with background of Software Engineering. <br/>Currently enrolled in Government initiative of Block Chain Technology and Web 3.0.</p>
        </div>
        <div className="p-8 text-5xl flex justify-center space-x-16 text-gray-600">
          
          <AiFillTwitterCircle/>
          <AiFillYoutube/>
          <AiFillLinkedin/>
        </div>

        <div className=" flex  relative shadow-lg w-80 h-90 mx-auto my-auto rounded-full justify-center py-5  bg-white">
          <img src="mypic2.jpeg" width="400px" height="auto" className="rounded-full" />
          </div>
      </section>
      <div>
        <h3 className="text-2xl text-center py-8">Services i Offer</h3>
        <p className="text-center text-gray-800 ">
        Software professional with a passion for technology and innovation <br/>
Pursued a degree in <span className="text-teal-500 ">software engineering</span> and gained expertise <br/> 
in front-end development Skilled in technologies including <br/> <span className="text-teal-500">JavaScript, Python, TypeScript, Tailwind, Figma, and Next.js</span> <br/>
Experienced in creating user-friendly and performant websites <br/>
Aiming to continue learning and using skills to build impactful solutions in the future.
        </p>
      </div>
     
      <section>
        <div className="mt-10 shadow-lg mx-auto my-auto h-100 w-80 text-center">
          <div>
            <Image src={consulting} width={90} height={90} class={"mx-auto my-auto"} />
          </div>
          <h3 className="text-lg py-4">Team Management</h3> 
          <div>I am an experienced team manager with a <span className="text-teal-500">proven track record </span> of <br/>
          successfully leading and coordinating a <span className="text-teal-500">team of developers</span> to complete <br/>
           software tasks on time and to a <span className="text-teal-500">high standard</span> of quality. I have <br/>
           excellent <span className="text-teal-500"> communication skills</span> and am able to effectively set <br/>
            clear expectations and provide <span className="text-teal-500">support and guidance</span> to my team. <br/>
            Additionally, I am well-versed in <span className="text-teal-500">project management tools</span> and methodologies <br/>
            and use these effectively to keep track of progress and ensure that <br/>
            all software tasks are completed <span className="text-teal-500">efficiently and effectively</span> .</div>
        </div>
      </section>
      
      <div>
<div className="text-center mt-12 shadow-lg h-100 w-80 mx-auto my-auto">
          
          <Image src={code} width={90} height={90} class={"mx-auto my-auto"} />

          <h3 className="text-lg font-md pt-5 pb-2">Coding</h3>
          
          <p>
          I am a full-stack developer skilled in <span className="text-teal-500">JavaScript, Python, 
          HTML, CSS, Tailwind CSS, and TypeScript.</span>  
          With a passion for elegant code, I deliver high-quality 
          <span className="text-teal-500">web applications and user interfaces</span> . 
          Committed to staying ahead in a rapidly evolving tech industry, 
          I am always eager to <span className="text-teal-500">learn and grow</span> .
          
          </p>
         
          

        </div>
        </div>
        <div>
        <div className="text-center mt-12 shadow-lg h-100 w-80 mx-auto my-auto">
          
          <Image src={design} width={90} height={90} class={"mx-auto my-auto"} />

          <h3 className="text-lg font-md pt-5 pb-2">Graphic Designing</h3>
          <p className="pt=">Bring your vision to life with my graphic design skills! <br/>Armed with the tools of the trade - <br/> <span className="text-teal-500">Illustrator, Photoshop, Figma, and Canva </span> <br/> I can craft eye-catching designs that communicate your message effectively.<br/> From logos to presentations, I have the expertise to create stunning graphics<br/> that will leave a lasting impression</p>
         
          

        </div>
      </div>
      <div>
        <h3 className="text-2xl text-center py-8">Portfolio</h3>
        <p className="text-center text-gray-800 ">
        We are highly skilled <span className="text-teal-500" > software developer </span>and <span className="text-teal-500">digital marketer </span> <br/>
        with a <span className="text-teal-500">100% client satisfaction</span>  rate. With expertise in coding <br/>
        and a <span className="text-teal-500">team of experts</span> , We delivers <span className="text-teal-500">innovative solutions</span>  and <br/>
      am committed to delivering projects on time to the <span className="text-teal-500">highest 
      standards</span>. <br/>
      We a sought-after professional with a <span className="text-teal-500">proven 
      track record</span>  of success in the industry.
        </p>
        <div className="py-10 flex flex-col gap-10 lg:flex-row lg:flex-wrap">
          <Image src={web1}/>
          <Image src={web2}/>
          <Image src={web3}/>
          <Image src={web4}/>
          <Image src={web5}/>
          <Image src={web6}/>

       

        </div>
        

      </div>
  
    </main>
  )
}

