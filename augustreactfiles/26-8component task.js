import ReactDOM from "react-dom/client"
import Head from './Head'
import Login from './Login'
import Footer from './Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
   <Head/>
   <Login/>
   <Footer/>
   </>
);
