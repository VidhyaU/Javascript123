import ReactDOM from 'react-dom/client'
import pic1 from './moon.jpg'


import '../node_modules/bootstrap/dist/css/bootstrap.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>

        <div class='container'>
            <div class='row ' >

                <div class='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 bg-warning'>JavaScript is the world's most popular programming language.

                    JavaScript is the programming language of the Web.

                    JavaScript is easy to learn.
                    JavaScript is the world's most popular programming language.

                    JavaScript is the programming language of the Web.

                    JavaScript is easy to learn.
                    This tutorial will teach you JavaScript from basic to advanced.

                </div>
                <div class='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 bg-info '>
                    <h1 class='text-center'>List</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT JS</li>
                    </ul>
                </div>


            </div>

            <div class='row'>
                <div class='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 bg-primary'>JavaScript is the programming language of the Web.

                    JavaScript is easy to learn.
                    JavaScript is the world's most popular programming language.

                    JavaScript is the programming language of the Web.

                    JavaScript is easy to learn.
                    This tutorial will teach you JavaScript from basic to advanced.
                    JavaScript is easy to learn.
                    JavaScript is the world's most popular programming language.

                    JavaScript is the programming language of the Web.

                    JavaScript is easy to learn.
                    This tutorial will teach you JavaScript from basic to advanced.
                </div>
            </div>


            <div class='row text-center'>
                <div class='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4  bg-light text-center'>
                <img src={pic1} alt='' width={320} border='2px'/></div>

                <div class='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 bg-warning '>JavaScript is the world's most popular programming language.

                    JavaScript is the programming language of the Web.

                    JavaScript is easy to learn.
                    


                </div>

                <div class='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 bg-light text-center'>
                <img src={pic1} alt='' width={320} border='2px'/>
                </div>
            </div>
        </div>

    </>
);




