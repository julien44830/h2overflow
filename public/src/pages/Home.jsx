import { NavLink } from "react-router-dom";
import "../components/styles/home.css";
import "../App.css";

function Home() {

  return (
    <>
      <div className="Welcome_Mobile">
        <div className="Welcome_Mobile_card">
          <p className="Welcome_Mobile_card_text">
            Le site n'est pas encore disponible pour le format mobile. <br /><br />
            En attendant qu'il le soit, venez le visiter sur un ordinateur !
          </p>
        </div>
      </div>
      <section className="section_loader">
        <h2 className="h2-loader">Découvrez les profondeurs invisibles</h2>
        <p className="p-loader">
          Explorez les nappes phréatiques pour comprendre leur importance et leur
          préservation.
        </p>
        <p className="p-loader">
          Au 1er janvier 2024, en France, un total de 2882 nappes
          phréatiques ont été analysées, révélant une moyenne de 86% pour leur taux de remplissage.
        </p>
        <NavLink className="button" to="/map">
          Accéder aux données
        </NavLink>
      </section>
    </>
  );
}

export default Home;
