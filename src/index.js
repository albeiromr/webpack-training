//importando una librería externa en el script
import _ from "lodash";
import printMe from './print.js';

const component = () => {
    const element = document.createElement('div');
    const btn = document.createElement('button');
 
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);
    
    return element;
}
 
document.body.appendChild(component());