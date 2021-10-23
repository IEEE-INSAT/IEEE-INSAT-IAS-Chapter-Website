import React, { useRef } from 'react'
import '../styles/pages/contact-us.scss'


function Input({type,name,id, inputRef }){
    return (
        <div style={{
            display: 'flex',
            flexDirection:'column'
        }} className={name}>
            <label htmlFor={id}> {name}: </label>
            <div className="input-container">
                <input type={type} name={name} id={id} ref={inputRef} placeholder={name} />
                <div className="line"></div>
            </div>
        </div>
    )
}

export default function ContactUs() {

    const nameRef = useRef();
    const emailRef= useRef();
    const descRef= useRef();

    const handleSubmit= (e)=>{
        e.preventDefault();
        const name = nameRef.current.value; 
        const email = emailRef.current.value;
        const description= descRef.current.value; 

        console.log(name, email,description);
        
        nameRef.current.value= ""; 
        emailRef.current.value= "";
        descRef.current.value= "";

    }

    return (
        <div className="contact-us">
            <div className="horizontal-bar">
                <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4540.06147856743!2d10.194189534729876!3d36.843176731763336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34c6d1e93bef%3A0x4153c4733f285343!2sInstitut%20national%20des%20sciences%20appliqu%C3%A9es%20et%20de%20technologie!5e0!3m2!1sfr!2stn!4v1635017602016!5m2!1sfr!2stn" className="map"  allowFullScreen="" loading="lazy"></iframe>
                <form >
                    <div className="form-information">
                        <Input type="text" name="Name" id="name" inputRef={nameRef} />
                        <Input type="email" name="Email" id="email" inputRef={emailRef} />
                    </div>
                    <Input type="text" name="Description" id="description" inputRef={descRef} />
                    <button onClick={handleSubmit}> submitting</button>
                </form>
            </div>
        </div>
    )
}
