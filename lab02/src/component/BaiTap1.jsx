import logo from '../images/logo.png';
import iconFind from '../images/iconFind.png';
import iconBox from '../images/iconBox.png';
import iconUser from '../images/iconUser.png';
import left from '../images/left.png';
import foder from '../images/foder.png';
import image from '../images/image.png';
import './BaiTap1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function BaiTap1() {
    return (
        <>
        <header>
            <div id='logo'>
            <img src={logo} alt="logo" />
            <h1>Chepfify</h1>
            </div>
            
            
            <div id='search'>
            <img src={iconFind} alt="" />
            <input type="text" placeholder='cakescascsa'/>
            </div>
            

            <div id='menu'>
            <a href="#">What to cook</a>
            <a href="#">Recipes</a>
            <a href="#">Ingredients</a>
            <a href="#">Occasionns</a>
            <a href="#">About Us</a>
            </div>
            
            <div id='box'>
            <img src={iconBox} alt="" />
            <input type="text" placeholder='Your Recipe Box'/>
            </div>
            
            <div id='user'>
            <img src={iconUser} alt="" />
            </div>
            
        </header>
        <main>
            <div id='left'>
               <img src={left} alt="" />
            </div>
            <div id ='right'>
            <h1>Sorry, no results were found for "cakescascsa"</h1>
            <img src={foder} alt="" />
            <h4>We have all your Infdependence Day sweets covered.</h4>
             
             <div id ='list'>
                <a href="#" style={{color: 'pink'}}>Sweet Cake</a>
                <a href="#" style={{color: 'violet'}}>Black Cake</a>
                <a href="#" style={{color: 'pink'}}>Pozole Verde</a>
                <a href="#" style={{color: 'green'}}>Healthy food</a>
             </div>
            </div>
            
        </main>
        <footer>
            <img src={image} alt="" />
            
        </footer>
        </>
        
    )
}