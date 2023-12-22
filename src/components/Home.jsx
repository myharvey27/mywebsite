import './Home.css'
import unicorn from '../toy.jpg';
import name from '../mhfont.jpg';
import selfie from '../glam.jpg'
import console from '../console.jpg';
import ubs from '../Ubs_logo.png';
import lucidly from '../lucidly.jpg';
import glove from '../hand.jpg';
import pdf from '../newresume.pdf';
import daikon from '../daikon.jpg';




const Home_screen= ()=> {
    return (
        <div className= 'boarder'>
            <div className='logo'><img src={name}/></div>
            <p className='intro'>
           Stanford University | 310-560-0151 | myharvey@stanford.edu
            </p>

            <img className= 'corn1' src={unicorn}/>
            <img className= 'corn2' src={unicorn}/>
            
            <div className='flex-container2'>
            <div className='description'>
            
                    <h1>About Me</h1>
                    I am pursuing my masters in computer science at Stanford because technology is the future of society. The way creatives like myself design and consult for these future technological social systems will have the greatest impact on how our society defines itself and its marginal communities. I am particularly interested in the video game industry and building community through fun. I hope to pursue business endeavors that empower young designers and developers to push the boundaries of gaming to create a more equitable atmosphere for gamers of all kinds. My professional goals are to push behavior changing mechanisms and ethical technological tools for large scale social systems to the vanguard of current topics in tech and business.
                </div>

            </div>
            <div className='flex-container1'>
            <div className ='equalHW'>
                    <h1>
                    Design Projects
                    </h1>
                    <p> * Designed and implemented a platformer video game using Godot game engine with original narrative, art, puzzles, music and code. 
                        Practiced task delegation and giving and receiving feedback from playtesters and team members. Below is full documentation
                        of the process along with links to playthroughs and code.
                    </p>
                    <a href='https://drive.google.com/file/d/1FVyyxDsUYfy7hfw1RPPxUzUFpgeN2wXB/view?pli=1' target="_blank"><img src={daikon} className='bullets'/></a>
                    <p> * Designed and implemented an app prototype for equitable healthcare with a novice design team. Utilized the design process from needfinding
                        to reflective prototyping. Explored transferring Figma design to React Native with an iOS simulator. Click the image below!
                    </p>

                    <a href='https://hci.stanford.edu/courses/cs147/2022/au/projects/EquitableHealthcare/lucIDLy/' target="_blank"><img src={lucidly} className='bullets'/></a>
                    <p> * Modeled financial transactions using a gestural interface to improve spending awareness. Apple pay users are around 34% more likely to be in debt than card or cash users, so I prototyped a glove mounted with an arduino that requires users to count on their 
                        fingers how much they spend at a cash register to mitigate mindless payment. View my findings below.</p>
                        <a href='https://docs.google.com/document/u/1/d/e/2PACX-1vS6MsfsoFOh7FMtJjUy4eCiSf4eJ9VdXRo_S7WFD4ciynZZRO7TBW8snzVqRWLnSlXHM52wO3vOKN2M/pub' target="_blank">
                            <img src={glove} className='bullets'></img></a>
                </div>
                <div className ='equalHW'>
                
                    <h1>
                    Software Projects
                    </h1>
                    <p>
                        * Interned as a Software Engineer at UBS. Implemented the “View Beneficiaries” page for UBS's Wealth Management Americas online service website. 
                        Developed strong workplace skills like communication and leadership by utilizing the Agile business model, managed weekly team 
                        reports on top of individual development work.

                    </p>
                    <img src={ubs} className='bullets'></img>
                    <p> * Full Stack Photo Sharing Application with functioning React Frontend and Backend. 
                    Used REST APIs to communicate with the DOM and Database using GET, PUT, and POST HTTP requests.
                    Developed a solid understanding of browsers, links, and routers. Watch a walkthrough video below.</p>
                    <iframe src="https://player.vimeo.com/video/716283129?h=9a34c054c1" target="_blank"></iframe>
                    <p> * Bare metal programmed a full computer shell on Raspberry Pi using command line. 
                    Compiled libraries beginning with the microprocessor and ending in C including: programs for navigating the ARM architecture, 
                    formatting strings, creating a stack and heap allocator, keyboard and graphics, and a system monitor with interrupts for concurrency.
                    </p>
                    <img src={console} className='bullets'></img>
                </div>
 
  
            </div>
            
            <p className='intro'>
              
            <a href={pdf} target="_blank">Resume</a> |  
            <a href='https://gostanford.com/sports/womens-beach-volleyball/roster/maya-harvey/19782' target="_blank">Roster Bio</a> | 
            <a href='https://linkedin.com/in/maya-harvey-4a52b828b' target="_blank">Linkedin</a>
            </p>
       
        <p className='sign'>Maya Harvey 2023</p>
        </div>
        
    );
}

export default Home_screen;