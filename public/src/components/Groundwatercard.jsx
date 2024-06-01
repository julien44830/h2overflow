import "./styles/Groundwatercard.css";

function Groundwatercard({ nappeProfondeur, investigationNappe, dateFin }) {
  // const profondeurNappe = chroniques[0].profondeur_nappe;
  const profondeurNappe = nappeProfondeur;
  const profondeurInvestigation = investigationNappe;

  const percentage = Math.round(
    ((profondeurInvestigation - profondeurNappe) / profondeurInvestigation) *
    100
  );

  let marginTopWater = ((100 - percentage) / 100) * 175 - 85;
  marginTopWater = Math.min(Math.max(marginTopWater, -85), 70);

  return (
    <div className="card-container">
      <p className="legend-card">
        Taux de remplissage</p>
      <div className="card-visual-level">
        <div className="percentage-box">
          <p className="percentage-text">{percentage}%</p>

        </div>
        <img
          className="img-water-level"
          style={{ marginTop: `${marginTopWater}px` }}
          src="../src/assets/images/watergroung_level.png"
          alt="water level"
        />
      </div>
      <p className="legend-card">
        Dernière mesure : {dateFin}
      </p>
    </div>
  );
}

export default Groundwatercard;
