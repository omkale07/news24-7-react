import React from "react";

const Card = ({ NewsData }) => {
  if (!NewsData || NewsData.length === 0) {
    return <p style={{ fontSize:"1.3rem", height:"23rem", position:"relative", top:"12rem" }}>Oops!! No result found</p>;
  }

  return (
    <>
      {NewsData.map((data) => (
        <div key={data.url} className="card-container">
          <div className="card" style={{ width: "18rem" }}>
            <img src={(data.image)?(data.image):"https://media.istockphoto.com/id/2162390059/vector/breaking-news-sign-vector-template-banner-label-poster-sticker-text.jpg?s=612x612&w=0&k=20&c=8icJPo54C0GlQjOopEu75wopakaBgcRNwiAhcBS6tw0="} className="card-img-top" alt={data.title} />
           

            <div className="card-body">
              <h5 className="card-title">{data.title.slice(0, 55)}</h5>
              <p className="card-text">{data.description.slice(0, 80)}</p>

              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-color"
                style={{ backgroundColor: "aqua" }}
              >
                See More
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
