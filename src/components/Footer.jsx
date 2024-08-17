export default function Footer() {
    return (
        <>
            <footer className="text-center text-white m-0 p-5 d-flex justify-content-between flex-wrap">
                <div className="location d-flex flex-column justify-content-center py-3">
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="atw d-flex flex-column justify-content-center py-3">
                    <h3>AROUND THE WEB</h3>
                    <div className="icons">
                        <i className="fa fa-brands fa-facebook rounded mx-1 icon "></i>
                        <i className="fa fa-brands fa-x rounded mx-1 icon"></i>
                        <i className="fa fa-brands fa-linkedin rounded mx-1 icon"></i>
                        <i className="fa fa-solid fa-globe rounded mx-1 icon"></i>
                    </div>
                </div>
                <div className="freelancer d-flex flex-column justify-content-center py-3">
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </footer>
            <div className="footerBelow text-white text-center">
                <p>Copyright © Your Website 2021</p>
            </div>
        </>
    );

}