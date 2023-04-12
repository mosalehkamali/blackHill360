import React from 'react'
import ReactDOM from 'react-dom'
import "./Navbar.css"




export default function Navbar(props) {


    function scrollBtn() {
        window.scrollBy(0, 1);
    }

    return (
        <div>
            <nav id="mainNav" className={props.mainNav}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href='#Main'>Biographys</a></li>
                    <li><a href="#footer">About</a></li>
                    <li><a href="#">Log in / Sign up</a></li>
                </ul>



                <div className={props.hidden}>

                    <h1>Black hill 360</h1>

                    <p>
                        A biography website is a type of website that provides information about a specific person, often detailing their life story, accomplishments, and personal background. The website may also include photos, videos, and other multimedia content related to the person's life and work.<br/><br/>
                        A well-designed biography website will typically have a clear and organized layout, with easy-to-navigate pages and intuitive menus. The content should be well-written, engaging, and informative, and may be broken down into different sections or chapters to make it easier for visitors to find the information they are looking for.<br/><br/>
                        In addition to providing biographical information, a biography website may also include links to related resources, such as books, articles, and other websites, as well as contact information for the person or their representatives. Overall, a biography website can be a valuable resource for anyone interested in learning more about a particular person and their life story.

                    </p>
                    <a onClick={scrollBtn}>&#11167;</a>
                </div>
                <div className={props.logo}>
                    <a href="#">
                        <img src="https://blackhill360.ir/images/bhlogo.png" alt="BlackHill Logo" />
                    </a>
                </div>
            </nav>
        </div>
    )
}
