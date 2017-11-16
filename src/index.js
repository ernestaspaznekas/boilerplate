import _ from 'lodash'
import printMe from './print'

//import './styles.css'

function component() {
    let element = document.createElement('div')
    const btn = document.createElement('button')
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('home')

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe

    element.appendChild(btn)
    
    return element
}
  
//document.body.appendChild(component())
let element = component() // Store the element to re-render on changes
document.body.appendChild(element)

if(module.hot) {
    module.hot.accept('./print.js', () => {
        console.log('Accepting the updated printMe module±!')
        document.body.removeChild(element)
        element = component() // Re-render the 'component'
        document.body.appendChild(element)  
    })
}