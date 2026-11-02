import "./Main.css";
import introVideo from "../../../assets/images/Intro.mp4";

function AboutThisProject() {
  return (
    <main className="about_this_project">
      <section className="class_01">
        <video
          className="class_01_bg_video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={introVideo} type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>

        <div className="class_01_gradient_overlay"></div>

        <h1>Sobre o projeto Noronhaverso</h1>
        <div className="class_01_container">
          <p>
            Fernando de Noronha é um dos cinco arquipélagos e ilhas brasileiras de origem vulcânica, sendo um dos últimos eventos vulcânicos que ocorreram em território brasileiro. Noronha, primeira capitania hereditária do Brasil, é patrimõnio natural da humanidade e abriga a praia que carrega há 7 anos consecutibos o título de mais linda do mundo. Aqui no Noronhaverso você poderá navegar pela geodiversidade das ilhas e conhecer mais sobre a sua formação
          </p>
        </div>
      </section>
      <section className="class_02">
        <h2 className="route_02">Por onde deseja começar?</h2>
        <div className="class_02_asides">
          <div className="class_02_01_hover"></div>
          <section className="class_02_01">
            <h3>geoturismo virtual (a caixa ao lado aparece como um efeito demonstrativo do que o usuário encontrará ao clicar)</h3>
          </section>
          <section className="class_02_02">
            <h3>Geologia do aquipélago (a caixa ao lado aparece como um efeito demonstrativo do que o usuário encontrará ao clicar)</h3>
          </section>
          <div className="class_02_02_hover">
            <h3>Demonstração da geologia do arquipélago</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutThisProject;
