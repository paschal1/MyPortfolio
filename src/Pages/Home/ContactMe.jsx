
export default function ContactMe() {
    return (
      <section className="contact--section" id="Contact">
            <div>
                <p className="sub--title">Get in Touch</p>
                <h2 className="me">Contact Me</h2>
                <p className="text--lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, sit?
                </p>
            </div>
            <form action="" className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" name="first--name" id="first-name" className="contact--input" required/>
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" name="last--name" id="last-name" className="contact--input" required/>
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="text" name="email" id="first-name" className="contact--input" required/>
                    </label>

                    <label htmlFor="phone" className="contact--label">
                        <span className="text-md">Phone</span>
                        <input type="text" name="phone" id="phone" className="contact--input" required/>
                    </label>
                </div>
                <label htmlFor="choose--topic" className="contact--label">
                        <span className="text-md">Choose a topic</span>
                    <select name="" id="choose-topic" className="contact--input text-md" >
                        <option value="">Select One</option>
                        <option value="">Item One</option>
                        <option value="">Item Two</option>
                        <option value="">Item Three</option>
                        </select>
                </label>
                <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea rows="8" placeholder="type your message" name="message" id="message" className="contact--input text-md" required/>
                </label>
                <lable className="checkbox--label" htmlFor="checkbox">
                    <input type="checkbox" className="checkbox" name="checkbox" id="checkbox" required />
                    <span className="text-sm">I accept the terms</span>
                </lable>
                <div> <button className="btn btn-primary contact--form--btn" type="submit">Submit</button> </div>
            </form>
      </section>

  )
}

