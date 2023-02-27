//importando una librería externa en el script
import _ from "lodash";
import './style.css';
import Icon from './webpack-img.png';

const component = () => {
    const element = document.createElement('div');
 
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myImg = new Image();
    myImg.width = 200;
    myImg.src = Icon;

    element.appendChild(myImg);
 
    return element;
}
 
document.body.appendChild(component());