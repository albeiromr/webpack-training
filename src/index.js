//importando una librería externa en el script
import _ from "lodash";

const component = () => {
    const element = document.createElement('div');
 
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    return element;
}
 
document.body.appendChild(component());