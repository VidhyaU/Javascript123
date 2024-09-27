import ReactDOM from 'react-dom/client'

let uid=prompt("Enter UserId")
let pwd=prompt("Enter Password")
let result;

if(uid ==="MouriTech" && pwd==="Madhapur"){
    result="Authorised"
}
else{
    result="Unauthorised"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<h1>{result}</h1>
</>
);


























