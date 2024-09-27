import ReactDOM from "react-dom/client"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
let a=prompt("Enter any color")
var clr={
   clr1:'bg-danger',
   clr2:'bg-success',
   clr3:'bg-info',
   clr4:'bg-dark'
}
var result
if(a=="red"){
   result=clr.clr1
}else if(a=='green'){
   result=clr.clr2
}else if(a=='cyan'){
   result=clr.clr3
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
   <h1 className={result}>Vidya</h1>
</>
);
