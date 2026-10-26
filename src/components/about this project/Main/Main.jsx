import "./Main.css";

function AboutThisProject() {
  return (
    <main className="about_this_project">
      <section className="class_01">
        <h1>Sobre o projeto Noronhaverso</h1>
        <h2> Configuração dessa caixa:  vídeo ao fundo com autoplay</h2>
        <p>
          O Noronhaverso é uma iniciativa de divulgação geocientífica com foco
          em geoturismo virtual de Fernando de Noronha.
        </p>
      </section>
      <section className="class_02">
        <h2 className="route_02">Por onde deseja começar?</h2>
        <div className="class_02_asides">
          <section className="class_02_01">
            <h3>geoturismo virtual (ao fundo, teremos uma imagem demonstrativa do geoturismo)</h3>
          </section>
          <section className="class_02_01">
            <h3>Geologia do aquipélago (seguindo o mesmo padrão da caixa ao lado. Ao fundo, teremos uma imagem demonstrativa da geologia)</h3>
          </section>
        </div>
      </section>
      <section className="class_03"></section>
    </main>
  );
}

export default AboutThisProject;
