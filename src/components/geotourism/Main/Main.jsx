import "./Main.css";

function Geotourism() {
  return (
    <main className="geotourism">
      <div className="geotourismViewerFrame">
        <iframe
          id="cesium-earth-noronha"
          title="Visualizador — Fernando de Noronha"
          src={`${process.env.PUBLIC_URL}/earth-viewer.html`}
          className="geotourismIframe"
          allowFullScreen
        />
      </div>
    </main>
  );
}

export default Geotourism;
