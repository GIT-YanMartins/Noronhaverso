import "./Main.css";

function Geoturismo() {
  return (
    <main className="geoturismo">
      <div className="geoturismo__viewer-frame">
        <iframe
          id="cesium-earth-noronha"
          title="Visualizador — Fernando de Noronha"
          src={`${process.env.PUBLIC_URL}/earth-viewer.html`}
          className="geoturismo__iframe"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </main>
  );
}

export default Geoturismo;
