import "./Main.css";
import introVideo from "../../../assets/images/Intro.mp4";

function AboutThisProject() {
  return (
    <main className="aboutProject">
      <section className="heroSection">
        <video
          className="heroBgVideo"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={introVideo} type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>

        <div className="heroGradientOverlay"></div>

        <h1>Sobre o projeto Noronhaverso</h1>
        <div className="heroContainer">
          <p>
            Fernando de Noronha é um dos cinco arquipélagos e ilhas brasileiras
            de origem vulcânica, sendo um dos últimos eventos vulcânicos que
            ocorreram em território brasileiro. Noronha, primeira capitania
            hereditária do Brasil, é patrimõnio natural da humanidade e abriga a
            praia que carrega há 7 anos consecutibos o título de mais linda do
            mundo. Aqui no Noronhaverso você poderá navegar pela geodiversidade
            das ilhas e conhecer mais sobre a sua formação
          </p>
        </div>
      </section>

      <section className="cardsSection">
        <h2 className="cardsSectionTitle">Por onde deseja começar?</h2>
        <div className="cardsGroup">
          <div className="cardLeftPreview"></div>
          <section className="cardLeft">
            <h3>
              geoturismo virtual (a caixa ao lado aparece como um efeito
              demonstrativo do que o usuário encontrará ao clicar)
            </h3>
          </section>
          <section className="cardRight">
            <h3>
              Geologia do aquipélago (a caixa ao lado aparece como um efeito
              demonstrativo do que o usuário encontrará ao clicar)
            </h3>
          </section>
          <div className="cardRightPreview">
            <h3>Demonstração da geologia do arquipélago</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutThisProject;

