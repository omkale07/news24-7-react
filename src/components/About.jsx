import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="p-4">
        <div className="about-heading text-center mb-3">
          <h2 className="fw-bold A-heading" style={{ color: "aqua" }}>
            About News 24/7
          </h2>
        </div>

        <div
          className="about-text mx-auto"
          style={{
            maxWidth: "900px",
            lineHeight: "1.7",
            fontSize: "16px",
            color: "#333",
          }}
        >
          <p>
            Welcome to <strong>News24/7</strong>, your all-in-one destination
            for the latest and most reliable news from around the world. We
            believe that <strong>staying informed</strong> should be simple,
            fast, and unbiased — and that’s exactly what we deliver.
          </p>

          <p>
            At <strong>News24/7</strong>, we bring you{" "}
            <strong>real-time news updates</strong> across all major categories
            including
            <strong>
              Politics, Sports, Entertainment, Business, Technology, Health,
              Science, Lifestyle,
            </strong>{" "}
            and <strong>World Affairs</strong>. Whether you want breaking
            headlines, in-depth analysis, or trending stories — we’ve got it
            covered.
          </p>

          <p>
            Our mission is to make news{" "}
            <strong>accessible, engaging, and trustworthy</strong> for everyone.
            With a clean and easy-to-navigate interface, our app ensures that
            you spend less time searching and more time knowing what’s happening
            around you.
          </p>

          <p>
            We gather stories from{" "}
            <strong>credible and verified sources</strong> to provide you with
            accurate, balanced, and diverse perspectives on every topic. Our
            intelligent categorization system allows you to explore your
            favorite news segments effortlessly — from{" "}
            <strong>local updates to global events</strong>, all in one place.
          </p>

          <p
            className="text-center mt-4 fw-semibold B-text"
            style={{ color: "#0b7285" }}
          >
            Stay connected, stay updated, and never miss what matters.
            <br />
            Because at <strong>News24/7</strong>, we believe that{" "}
            <strong>information empowers.</strong>
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
