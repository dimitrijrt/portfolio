import style from './presentation.scss'
import Home from './home'
 import { FaReact} from "react-icons/fa";
import { DiCss3, DiJsBadge, DiHtml5, DiSass, DiGithubBadge } from "react-icons/di";
import {GoMail} from "react-icons/go";
import {SiRedux} from "react-icons";
import { FiMail } from "react-icons/fi";
import { AiFillFile } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { GrAppsRounded} from "react-icons/gr";




function Presentation() {
    
  
  return (
    
    <div className='intro'>
      <div class="container">
  <p>Hello 👋 I'm</p>
  <section class="animation">
    <div class="first"><div>Dimitri</div></div>
    <div class="second"><div>Web Dev</div></div>
    <div class="third"><div>Front-end Dev </div></div>
  </section>
</div>
    




<div class="about">
   <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links logo"></a>
</div>

   
   <div class="content">
      <div class="card">
            <div class="icon"><i class="material-icons md-36"></i><MdAccountCircle/></div>
            <p class="title">Profile</p>
            <p class="text">Click to see or edit your profile page.</p>
      </div>
   
      <div class="card">
         
            <div class="icon"><i class="material-icons md-36"><GrAppsRounded/></i></div>
            <p class="title">Projets</p>
            <p class="text">Check all my projects.</p>
         
      </div>
     
      <div class="card">
         
            <div class="icon"><i class="material-icons md-36"><FiMail/></i></div>
            <p class="title">Contacts</p>
            <p class="text">Contact me.</p>
         
      </div>
   
   </div>





        <div className='cardme'>
           
            
          
            <div className='all'>
               <ul className='lang'>
              <div>
                <li><DiHtml5 />Html</li>
                <li><DiCss3 />css</li>
                <li><DiSass/>Sass</li>
              </div>
              <div>
                <li><DiJsBadge/>Js</li>
                <li><FaReact />React</li>
                <li>
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="40" width="40" fill="#00d3ef"><path d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 0 0-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 0 1-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 0 0 1.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 0 0 1.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"></path></svg>
                  Redux
                </li>
              </div>   
            </ul>
           
            </div>
           
        </div>
        <Home/>
        <div className='parcours'>
                <h3>Parcours</h3>
              </div> 
        <div className='cardcv' id="parcours">
        
         
          <div className='year'>
            
            <h4>2022-2023</h4>
            <p>- Formation Développeur front-end Openclassroom</p>
            <p>-Hack the box certification pentester junior</p>
          </div>
          <div className='year'>
             <h4>2021-2022</h4>
           <p>- BTS SIO 2ème année</p>
           <p>- Stage analyse réseau</p>
          </div>
          <div className='year'>
            <h4>2020-2021</h4>
             <p>- BTS SIO 1ère année </p>
             <p>- Stage développement web</p>
             <p>- Service civique</p>
          </div>
          <div className='year'>
              <h4>2019</h4>
              <p>- Bac s / sportif de haut niveau</p>
          </div>
        
        </div>
    </div>
    
    
    
      
    
      
   
    
   
   
  )
}

export default Presentation;