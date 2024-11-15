import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 grid grid-cols-12 mx-auto gap-5">
        <section className="col-span-9">
          <h2>Dragon news</h2>

          <div className="card bg-base-100 w-96 shadow-xl">
            <img src={news?.image_url} alt="" />
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions justify-end">
                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back To Category </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
