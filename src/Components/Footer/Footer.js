import "./Footer.css";

function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="inner">
                    <section>
                        <h2>Get in touch</h2>
                        <form method="post" action="#">
                            <div className="fields">
                                <div className="field half">
                                    <input type="text" className="inputStyle"   name="name" id="name" placeholder="Name" />
                                </div>
                                <div className="field half">
                                    <input type="email"  className="inputStyle" name="email" id="email" placeholder="Email" />
                                </div>
                                <div className="field">
                                    <textarea name="message"  className="inputStyle" id="message" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <ul className="actions">
                                <button type="submit" value="Send" className="primary" >Send</button>
                            </ul>
                        </form>
                    </section>
                    <ul className="copyright">
                        <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="#">mosalehk</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
};

export default Footer;