import './Home.css'
import unicorn from '../toy.jpg';
import name from '../mhfont.jpg';
import selfie from '../glam.jpg'
import whiteunicorn from '../unicorn.jpg';
import console from '../console.jpg';
import lucidly from '../lucidly.jpg';
import glove from '../hand.jpg';
import pdf from '../myresume.pdf';




const Home_screen= ()=> {
    return (
        <div className= 'boarder'>
            <div className='logo'><img src={name}/></div>
            <p className='intro'>
           438 28th St Hermosa Beach, CA 90245 | 310-560-0151 | myharvey@stanford.edu
            </p>

            <img className= 'corn1' src={unicorn}/>
            <img className= 'corn2' src={unicorn}/>
            <div className='flex-container2'>
                <div className='selfie'><img src={selfie}/></div>
                <div className='description'>
                    <h1>About Me</h1>
                    I am pursuing computer science at Stanford  because technology is the future of society. The way  builders like myself design these future technological social systems will have the greatest impact on how our society defines itself and its marginal communities. I am passionate about helping others find opportunity within themselves. Technological design for behavior change is where my current research interests lie. I am interested in equitable finance as well as how to empower people without strong financial educational backgrounds to reimagine their financial futures. My professional goals are to design behavior changing mechanisms and ethical technological tools for large scale social and financial systems. These range from reforming system architecture, to creating equitable groupware, to designing assistive and habit changing technologies. I am committed to approaching all of my future projects with a feminist lens to better support communities that may not always be represented by the standard user. I also love fashion and the beach!
                </div>
 

            </div>
            <div className='flex-container1'>
            <div className ='equalHW'>
                    <h1>
                    Design Projects
                    </h1>
                    <p> * Designed and implemented an app prototype for equitable healthcare with a novice design team. Utilized the design process from needfinding
                        to reflective prototyping. Explored transferring Figma design to React Native with an iOS simulator. Click the image below!
                    </p>

                    <a href='https://hci.stanford.edu/courses/cs147/2022/au/projects/EquitableHealthcare/lucIDLy/'><img src={lucidly} className='bullets'/></a>
                    <p> * Modeled financial transactions using a gestural interface to improve spending awareness. Apple pay users are around 34% more likely to be in debt than card or cash users, so I prototyped a glove mounted with an arduino that requires users to count on their 
                        fingers how much they spend at a cash register to mitigate mindless payment.</p>
                       <img src={glove} className='bullets'></img>
                </div>
                <div className ='equalHW'>
                
                    <h1>
                    Software Projects
                    </h1>
                    <p> * Full Stack Photo Sharing Application with functioning React Frontend and Backend. 
                    Used REST APIs to communicate with the DOM and Database using GET, PUT, and POST HTTP requests.
                    Developed a solid understanding of browsers, links, and routers. </p>
                    <iframe src="https://player.vimeo.com/video/716283129?h=9a34c054c1"></iframe>
                    <p> * Bare metal programmed a full computer shell on Raspberry Pi using command line. 
                    Compiled libraries beginning with the microprocessor and ending in C including: programs for navigating the ARM architecture, 
                    formatting strings, creating a stack and heap allocator, keyboard and graphics, and a system monitor with interrupts for concurrency.
                    </p>
                    <img src={console} className='bullets'></img>
                </div>
 
  
            </div>
            
            <p className='intro'>
              
            <a href={pdf}>Resume</a> |  
            <a href='https://gostanford.com/sports/womens-beach-volleyball/roster/maya-harvey/19782'>Roster Bio</a> | 
            <a href='https://www.youtube.com/watch?v=HSmKiws-4NU&t=3s'>Bret Hart</a>
            </p>
       
        <p className='sign'>Maya Harvey 2023</p>
        </div>
        
    );
}

export default Home_screen;