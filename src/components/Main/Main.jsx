import "./Main.css";

function Main() {
  return (
    <main className="main-box">
      <h1>Aqui teremos um título de apresentação</h1>
      <section className="firstParagraph">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cum
          aliquid minus magnam reprehenderit consequatur aspernatur quia. Eaque
          esse dolorum quasi, eveniet voluptate non nesciunt aut hic maiores,
          quis beatae?
        </p>
      </section>
      <section className="virtualTuor">
        <div className="tuorDescription">
          <h3>Aqui teremos uma breve descrição do tuor</h3>
          <p>Aqui teremos o texto sobre o tuor</p>
        </div>
        <img src="" alt="" />
        <h1>DESSE LADO COLOCAREMOS A IMAGEM</h1>
      </section>
    </main>
  );
}

export default Main;
