import Layout from "../components/Layout";
import { front, back, styles } from "../datatecno";

const Tecnologias = () => {
  return (
    <Layout>
      <div className="card bg-light p-4">
        <h1 className="text-center mb-3"> tecnologías Front End</h1>
        <div className="row ">
          {front.map((item, index) => (
            <CardFront item={item} key={index} style={{ height: "100%" }} />
          ))}
        </div>
      </div>
      <div className="card bg-light p-4 mt-4">
        <h1 className="text-center mb-3"> tecnologías Back End</h1>
        <div className="row">
          {back.map((item, index) => (
            <CardBack item={item} key={index} />
          ))}
        </div>
      </div>
      <div className="card bg-light p-4 mt-4">
        <h1 className="text-center mb-3"> Estilos Front End</h1>
        <div className="row">
          {styles.map((item, index) => (
            <CardStyles item={item} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const CardFront = ({ item }) => {
  const { title, imagen, link } = item;

  return (
    <div className="col-md-4 ">
      <div className="card " style={{ height: "90%" }}>
        <div className="overflow">
          <img
            src={imagen}
            alt=""
            className="card-img-top"
            style={{ height: "100%" }}
          />
        </div>
        <div className="card-body ">
          <h5 className="text-center">{title}</h5>
          <a href={link} target="_blank">
            <div className="info">
              <button className="btn btn-dark  ">Ver mas</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const CardBack = ({ item }) => {
  const { title, imagen, link } = item;

  return (
    <div className="col-md-4 mb-3">
      <div className="card " style={{ height: "90%" }}>
        <div className="overflow">
          <img src={imagen} alt="" className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="text-center">{title}</h5>

          <a href={link} target="_blank">
            <div className="info">
              <button className="btn btn-dark  ">Ver mas</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const CardStyles = ({ item }) => {
  const { title, imagen, link } = item;

  return (
    <div className="col-md-4 mb-3">
      <div className="card " style={{ height: "100%" }}>
        <div className="overflow">
          <img src={imagen} alt="" className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="text-center">{title}</h5>

          <a href={link} target="_blank">
            <div className="info">
              <button className="btn btn-dark  ">Ver mas</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
