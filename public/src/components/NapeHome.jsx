import "./styles/NapeHome.css";

function NapeHome({
  ville,
  departement,
  dateDebut,
  profondeur,
  nomNappe,
}) {
  return (
    <div className="nape-home">
      <h2 className="titre-nape">{ville}, {departement} </h2>
      <p className="P p-title">{nomNappe}</p>
      <p className="P">
        Cette nappe est en activité depuis le {dateDebut} et sa profondeur est
        de {profondeur}m.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde est quaerat recusandae mollitia assumenda illo explicabo.
      </p>
    </div>
  );
}

export default NapeHome;
