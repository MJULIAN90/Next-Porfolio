import Layout from "../components/Layout";

const Github = (props) => {
  const { user } = props;
  const { name, avatar_url, bio, html_url, location } = user;

  return (
    <Layout>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{name}</h1>
            <img src={avatar_url} alt="" />
            <h5>{location} </h5>
            <p> {bio} </p>
            <a
              href={html_url}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              Mi Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("https://api.github.com/users/MJULIAN90");
  const data = await response.json();

  return {
    props: {
      user: data,
    },
  };
};

export default Github;
