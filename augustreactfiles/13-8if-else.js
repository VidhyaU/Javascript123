import ReactDOM from 'react-dom/client'

let marks=prompt("Enter Marks")
let result;

if(marks<=35){
    result="Failed"
}
else{
    result="Passed"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<h1>{result}</h1>
</>
);


























