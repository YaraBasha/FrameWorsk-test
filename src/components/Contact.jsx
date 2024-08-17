export default function Contact(){
    return(
        <>
        <div className="contactBody mt-5">
        <h1>CONTACT SECTION</h1>
        <form className="row mx-auto mt-5 w-50">
<div className="form mt-5">
<input
className="form-control border-0 border-bottom py-3 mb-5"
type="text"
name="uName"
id="uName"
placeholder="userName"
required>
</input>

                    <input
                            className="form-control border-0 border-bottom py-3 mb-5"
                        type="number"
                        name="uAge"
                        id="uAge"
                        placeholder="userAge"
                        required>
                    </input>

                    <input
                            className="form-control border-0 border-bottom py-3 mb-5"
                        type="email"
                        name="uEmail"
                        id="uEmail"
                        placeholder="userEmail"
                        required>
                    </input>

                    <input
                            className="form-control border-0 border-bottom py-3 mb-5"
                        type="password"
                        name="uPassword"
                        id="uPassword"
                        placeholder="userPassword"
                        required>
                    </input>

                    <button type="submit" className="btn text-white mt-4">Send Message</button>
</div>
        </form>
            </div>
        </>
    )
}