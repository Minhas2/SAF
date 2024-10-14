import React from "react";
import "./PortolioHero.css";

export default function PortolioHero() {
  // Array of products
  const products = [
    {
      image: "../assets/p1.png",
      heading: "Product design",
      description:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
    {
      image: "../assets/p2.png",
      heading: "Art direction",
      description:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
    {
      image: "../assets/p3.png",
      heading: "Visual design",
      description:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
  ];

  // Array of clients
  const clients = [
    {
      testimonial:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
      image: "../assets/c1.png",
      rating: 5, // Number of stars
      name: "Gemma Nolen",
      company: "Google",
    },
    {
      testimonial:
        "Amazing work delivered, turned our vision into reality. Learn more at AnimaApp.com",
      image: "../assets/c2.png",
      rating: 5, // Number of stars
      name: "Gemma Nolen,",
      company: "Google",
    },
    {
      testimonial:
        "Amazing work delivered, turned our vision into reality. Learn more at AnimaApp.com",
      image: "../assets/c3.png",
      rating: 5, // Number of stars
      name: "Gemma Nolen,",
      company: "Google",
    },
  ];

  // Function to generate stars
  const renderStars = (rating) => {
    return "★".repeat(rating); // Creates a string with 'rating' number of black stars
  };

  return (
    <>

      {/* BRAND */}
      <div className="BRAND">
        <div className="container py-5 Port-Hero Epliogue">
          <div className="row">
            <div className="col-lg-6 my-auto">
              <h2 className="mb-4">Branding | Image making </h2>
              <h1 className="mb-4">My awesome portfolio</h1>
              <p>And I made it myself! Yes. In Figma with Anima</p>
            </div>

            <div className="col-lg-6 mt-991">
              <img
                src="../assets/Ellipse.png"
                alt=""
                className="w-100 eclipse-image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* BRAND */}

      {/* APPLE BAR */}
      <div className="APPLE">
        <div className="container">
          <div className="d-flex justify-content-between flex-wrap my-5 border-apple py-5">
            <img src="../assets/Apple.png" alt="" />
            <img src="../assets/Awwwards.png" alt="" />
            <img src="../assets/Behance.png" alt="" />
            <img src="../assets/Dribbble.png" alt="" />
            <img src="../assets/Google.png" alt="" />
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="PRODUCT">
        <div className="container Epliogue">
          <div className="row">
            {products.map((product, index) => (
              <div
                className="col-lg-4 col-md-12 px-product mt-1024"
                key={index}
              >
                <div className="d-flex  justify-content-center mb-4">
                  <img
                    src={product.image}
                    alt={product.heading}
                    className="image-holder mb-4"
                  />
                </div>
                <h1 className="text-center mb-3">{product.heading}</h1>
                <p className="text-center">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MY LATEST WOERK */}
      <div className="WORK">
        <div className="container Epliogue py-5">
          <h1 className="text-center mb-5">My latest work</h1>

          <div className="row">
            <div className="col-lg-4">
              <img src="../assets/w1.png" alt="" className="w-100 mb-3" />
              <p>Free Bird</p>
            </div>
            <div className="col-lg-4 mt-1024-work">
              <img src="../assets/w2.png" alt="" className="w-100 mb-3" />
              <p>Last Light</p>
            </div>
            <div className="col-lg-4 mt-1024-work">
              <img src="../assets/w3.png" alt="" className="w-100 mb-3" />
              <p>Shell Oil</p>
            </div>
          </div>

          <div className="d-flex justify-content-center none-1024">
            <button className="port-btn">Full Portfolio Password</button>
          </div>
        </div>
      </div>
      {/* MY LATEST WOERK */}

      {/* CLIENTS */}
      <div className="CLIENTS">
        <div className="container Epliogue py-5">
          <h1 className="mb-4 text-center">Clients</h1>
          <div className="row">
            {clients.map((client, index) => (
              <div className="col-lg-4 mt-1024-work" key={index}>
                <div className="d-flex flex-column p-clients border-clients">
                  <h2 className="mb-80">{client.testimonial}</h2>
                  <div className="d-flex align-items-center">
                    <div className="d-flex justify-content-start">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-100"
                      />
                    </div>
                    <div className="d-flex flex-column ps-3">
                      <em>{renderStars(client.rating)}</em> {/* Render stars */}
                      <p className="mb-0">
                        {client.name}, {client.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CLIENTS */}

      {/* FORM */}
      <div className="FORM">
        <div className="container py-5 border-TopForm Epliogue">
          <div className="row">
            <div className="col-lg-6 pe-288">
              <h1>Let’s work together</h1>
              <p>
                This is a template Figma file, turned into code using Anima.
                Learn more at AnimaApp.com This is a template Figma file, turned
                into code using Anima. Learn more at AnimaApp.com
              </p>

              <div className="d-flex align-items-centers">
                <img
                  src="../assets/s1.png"
                  alt=""
                  className="social-icons ps-2"
                />
                <img
                  src="../assets/s2.png"
                  alt=""
                  className="social-icons ps-2"
                />
                <img
                  src="../assets/s3.png"
                  alt=""
                  className="social-icons ps-2"
                />
                <img
                  src="../assets/s4.png"
                  alt=""
                  className="social-icons ps-2"
                />
                <img
                  src="../assets/s5.png"
                  alt=""
                  className="social-icons ps-2"
                />
              </div>
            </div>

            <div className="col-lg-6 mt-1024-work">
              {/* real form */}
              <form action="">
                <input
                  type="Name"
                  className="FORM-INput mb-3 p-3"
                  placeholder="Name"
                />
                <input
                  type="Email"
                  className="FORM-INput mb-3 p-3"
                  placeholder="Email"
                />

                <textarea
                  name="Type your message here"
                  id=""
                  placeholder="Type your message here"
                  className="text-form p-3 mb-4"
                  rows={5}
                ></textarea>

                <button className="sub-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FORM */}
    </>
  );
}
