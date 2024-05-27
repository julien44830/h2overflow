import { NavLink } from "react-router-dom";
import "../components/styles/home.css";
import "../App.css";

function Home() {

  return (
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
  );
}

export default Home;
