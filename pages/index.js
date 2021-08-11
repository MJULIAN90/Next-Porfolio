import Layout from "../components/Layout";

const index = () => {
  const skills = [
    {
      skill: "Javascritp",
      percentage: 95,
    },
    {
      skill: "React Js",
      percentage: 90,
    },
    { skill: "Redux", percentage: 90 },
    { skill: "Node JS", percentage: 80 },
    { skill: "Express", percentage: 90 },
    { skill: "Next Js", percentage: 75 },
    { skill: "GitHub", percentage: 80 },
    { skill: "PostgreSQL", percentage: 80 },
  ];

  const proyectos = [
    {
      nombre: "ROCKETXENCHANGE",
      description:
        "Muestra las temperaturas de ciudades y paises que introduzcamos en la busqueda",
      image: "/rocket.png",
      url: "",
    },
    {
      nombre: "MIS RECETAS",
      description:
        "Muestra recetas llamadas desde una API y de nuestra base de datos",
      image: "/recetas.png",
      url: "",
    },
    {
      nombre: "APP CLIMAS",
      description:
        "Muestra las temperaturas de ciudades y paises que introduzcamos en la busqueda",
      image: "/clima.png",
      url: "",
    },
  ];
  return (
    <Layout>
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-3">
                <img src="/perfil.jpeg" alt="" className="img-fluid" />
              </div>
              <div className="col-md-9">
                <h1>Julian Ruiz</h1>
                <h3>FullStack Developer</h3>
                <p>
                  Saludos !!! Soy desarrollador Full Stack y Tecnólogo en
                  telecomunicaciones con interés de combinar los conocimientos
                  que ambos perfiles ofrecen para dar solución de manera
                  eficiente a los diferentes retos que se presentan en mi vida
                  en el ámbito tecnológico. Mi pasión es la programación y el
                  aprendizaje de nuevas tecnologías para el desarrollo, con
                  tendencia a la inteligencia artificial y la ciberseguridad.
                  Tengo conocimiento en HTML | CSS | JavaScript | Python |
                  NodeJS | React | Redux | Bootstrap | PostgreSQL | Express |
                  Sequelize | GitHub | Git | Web Socket IO | Vercel | Heroku |
                  Supabase | Next JS.
                </p>
                <p>
                  falta agregar iconos de github , linklin , whatsapp, email
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-light" style={{ height: "100%" }}>
            <div className="card-body">
              <h1>Skills</h1>
              {skills.map(({ skill, percentage }, index) => (
                <div className="py-2" key={index}>
                  <h5> {skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="text-center py-3">
                <a
                  href="https://www.linkedin.com/in/julian-ruiz-v/"
                  target="_blank"
                >
                  CONOCE MAS
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light" style={{ height: "100%" }}>
            <div className="card-body">
              <h1> Formación académica </h1>
              <ul>
                <li>
                  <h3>Henry</h3>
                  <div style={{ fontSize: "0.9rem;" }}>
                    {" "}
                    Full Stack Developer JavaScript (2021)
                  </div>
                  <ul>
                    <li>
                      Desarrollador de aplicaciones web front end (React, Css,
                      Redux, HTML5)
                    </li>
                    <li>
                      Desarrollador de servidores y bases de datos (SQL,
                      POSTGRES-SQL, SEQUELIZE, EXPRESS, NODE.JS)
                    </li>
                    <li>Implementación de API's en proyectos.</li>
                  </ul>
                </li>
                <li>
                  <h3> INSTITUCION UNIVERSITARIA ITM </h3>
                  <div style={{ fontSize: "0.9rem;" }}>
                    {" "}
                    Tecnólogo en telecomunicaciones (2008-2011)
                  </div>

                  <ul>
                    <li>
                      Implementación y configuración de equipos de
                      telecomunicaciones (Routers, modems, entre otros)
                    </li>
                    <li>Creación y gestión de redes de telecomunicaciones</li>
                    <li>Configuración de servidores para Voz IP</li>
                    <li>
                      Instalación y configuración de redes de telecomunicaciones
                    </li>
                  </ul>
                </li>
                <li>
                  <h3> UDEMY </h3>
                  <div style={{ fontSize: "0.9rem;" }}>
                    React native (En curso)
                  </div>
                  <ul>
                    <li>
                      Creación de apps para dispositivos móviles iOS & ANDROID.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light"></h1>
              </div>
              {proyectos.map(({ nombre, description, url, image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100 ">
                    <div>
                      <img
                        src={image}
                        alt="error"
                        style={{ width: "80%", height: "100%" }}
                      />
                    </div>
                    <div className="card-body">
                      <h4>{nombre} </h4>
                      <p>{description} </p>
                      <a href={url} target="_blank">
                        {" "}
                        Detalles
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
