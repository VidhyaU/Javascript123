import ReactDOM from 'react-dom/client'

let prn=prompt("Enter Principle Amount")
let roi=prompt("Enter Rate of Interest")
let result=prn*roi/100
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
<>
<table border="2px solid black">
    <tr>
        <td>Principle Amount</td>
        <td>Rate of Interest</td>
        <td>Result</td>
    </tr>
    <tr>
        <td>{prn}</td>
        <td>{roi}</td>
        <td>{result}</td>
    </tr>
</table>
</>
);


























