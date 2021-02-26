const Developers = (props) => {
    let katie = '/images/kt.png';
    let ian = '/images/ian.png';
    let brian = '/brian/bravo.png';
    return (
        <div>
            <h1 className="devs">Meet The Developers!</h1>
            <div className="meet-devs">
                <div className="oneDev">
                    <img src={katie} className="devPic" />
                    <h1><span>Katie Mackenbrock</span></h1>
                    <p className="devPar">The best future housewife you'll ever meet. Check her out on <a href="https://www.linkedin.com/in/katiemackenbrock/" target="_blank">LinkedIn</a>.</p>
                    <p className="devPar">Check out her submission for a brand new Bravo show, VanderKatie Rules, <a href="https://www.instagram.com/p/CACS8JpjEgH/" target="_blank">here</a>.</p>
                </div>
                <div className="oneDev">
                    <img src={ian} className="devPic" />
                    <h1><span>Ian Jacobs</span></h1>
                    <p className="devPar">Super bitchin dude. Check him out on <a href="https://www.linkedin.com/in/ianjacobs925/" target="_blank">LinkedIn</a>.</p>
                </div>
                <div className="oneDev">
                    <img src={brian} className="devPic" />
                    <h1><span>Brian Derry Hinchey</span></h1>
                    <p className="devPar">V chill. V smart. V cool. Check him out on <a href="https://www.linkedin.com/in/brian-hinchey-4784601b9/" target="_blank">LinkedIn</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default Developers;