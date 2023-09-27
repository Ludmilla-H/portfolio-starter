import React from 'react'
import { addDataToCollection } from '../../commonjs/db';
import './Contact.css'


const Contact = () => {

    const enregistrer = (event) => {
        //stopper le raffraichissement (preventDefault)
        event.preventDefault();

        // recuperations des champs du formulaire
        const { name, email, numero, question } = event.target;

        const data = {

            //prenom de la base de donnés , prenom du formulaire
            Nom: name.value,
            Email: email.value,
            Numero: numero.value,
            Question: question.value,

        }

        addDataToCollection('contact', data);


    }


    return (
        <div>
            {/* SECTION CONTACT ABOUT */}
            <div className="contact" id="Contact">
                <div className="contact-text">
                    <h2>Contacter moi !</h2>
                    <h4>Pour avoir plus d'informations contacter moi.</h4>
                    <p>N'oubliez pas de remplir les champs a droite afin que je puissent répondre au plus vite.</p>
                    <div className="list">
                        <li><a href="#">ludmillaharnais31@gmail.com</a></li>
                        <li><a href="#">Mes réseaux professionelle sont les suivants :</a></li>
                        <div className='blur s-blur1' style= {{background: "#ABF1FF94"}}>

                        </div>
                    </div>
                    <div className="contact-icons">
                        <a href="https://www.linkedin.com/in/ludmilla-harnais-8774b4235/"><i className='bx bxl-linkedin' ></i></a>
                        <a href="https://github.com/Ludmilla-H"><i className='bx bxl-github' ></i></a>
                        <a href="#"></a>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={enregistrer}>

                        <input type="name" name="name" placeholder="Prénom" required></input>
                        <input type="email" name="email" placeholder=" Adresse e-mail" required></input>
                        <input type="number" name="numero" placeholder="Numéro de téléphone" required></input>
                        <textarea name="question" id="" cols="35" rows="10" placeholder="Avez-vous une question ?"></textarea>
                        <input type="submit" value="Envoyer" className="button c-button"></input>
                        <div  className="blur c-blur1"
                            style={{background: "var(--purple)"}}> 
                        
                        </div>
                    </form>

                </div>
            </div>
            {/* FIN SECTION CONTACT ABOUT  */}


        </div>
    )
}

export default Contact