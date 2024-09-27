import ReactDOM from 'react-dom/client'
//import pic1 from './moon.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

let x=prompt("Enter color")
var clr=['bg-success','bg-info','bg-dark']
var result
if(x=="red"){
    result=clr[0]
} else if(x=="green"){
    result=clr[1]
} else if(x=="cyan"){
    result=clr[2]
} else
result=clr[3]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<>
    <h2 className={result}>bootstrap </h2>
 </>
);




