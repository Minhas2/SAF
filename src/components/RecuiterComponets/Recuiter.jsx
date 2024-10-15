import React from "react";
import "./Recuiter.css";

export default function Recuiter() {
  return (
    <div className="REC inter">
      <div className="container py-5 ">
        <h1 className="mb-5">
          What do design recruiters look for in a portfolio? 👀
        </h1>

        <div className="d-flex align-items-center mb-4">
          <div>
            <img src="../assets/recuiter.png" alt="" className="w-R" />
          </div>

          <div className="d-flex flex-column Rec-info ps-3">
            <em>Jessica Roberts Follow ·</em>
            <span>Follow</span>
            <p className="mb-0">
              Published in <span className="bold">Bootcamp</span> · 3 min read ·
              Jul 28, 2021
            </p>
          </div>
        </div>

        {/* icon border */}

        <div className="d-flex justify-content-between  border-icon p-3 mb-5">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <img src="../assets/i1.png" alt="" />
              <div>
                <p className="mb-0">13</p>
                <p className="mb-0">0</p>
              </div>

              <img src="../assets/i2.png" alt="" className="ps-4" />
            </div>
          </div>

          <div className="d-flex align-items-center ">
            <img src="../assets/i3.png" alt="" className="w-100" />
            <img src="../assets/i4.png" alt="" className="ps-3 w-100" />
            <img src="../assets/i5.png" alt="" className="ps-3 w-100" />
          </div>
        </div>
        {/* icon border */}

        <div className="mb-5">
          <img src="../assets/RecMain.png" alt="" className="RecMain" />
        </div>

        <h3 className="mb-5">
          Hi! I’m Jess! 👋🏽 I’m a creative specialist recruitment consultant
          based in Dubai. I mainly work roles within the UX/UI/CX, product,
          service and graphic design space. I can’t even tell you how many
          design CVs and portfolios that I’ve seen… hundreds, if not thousands,
          so I have a pretty good idea on what a hiring manager is looking to
          see when scanning through them.
        </h3>
        <h3 className="mb-5">
          With the design industry so busy right now, I thought I’d write a post
          that may help out some people. If you are a designer and you are open
          to new opportunities, then it goes without saying that your portfolio
          should be kept up to date with some of your recent work. If you’re in
          the process of updating it, I’ve listed a few pointers below that
          could help you out. I plan to write further articles diving deeper in
          to each point I’ve made here, so if you have any questions on anything
          I’ve mentioned, just ask 😊
        </h3>

        <h2 className="mb-3">What medium are you going to use?</h2>

        <h3 className="mb-5">
          Firstly, think about what medium you are going to use to showcase your
          work. Are you going to have a website? A PDF? Behance? Etc. My
          personal suggestion is to always have your own website if you can. You
          can showcase so much more here and you have so much more creative
          freedom.
        </h3>

        <h2 className="mb-3">Include your CV</h2>

        <h3 className="mb-5">
          Make it easy for me to identify where I can find this. I need at least
          a basic list of your role titles, companies and time scales. You could
          even just include a PDF of your Linkedin profile. Also, if you did a
          short stint somewhere, tell me why. Perhaps it was a short term
          contract? Let me know. I’ve seen many candidates rejected because
          “they left their previous company within 6 months, they will likely do
          the same here”.
        </h3>

        <h2 className="mb-3">Show me your full process</h2>

        <h3 className="mb-5">
          Evidence your end-to-end process. Show me some full case studies as
          well as the end product. What I want to see is your design thinking
          throughout a process. Where did you start? What was the first thing
          you did when working on a project? Did you sketch anything by hand?
          Show me. What research did you do? Show me. What testing did you do?
          Show me. 👍🏽
        </h3>

        <h2 className="mb-3">Don’t assume knowledge of your reader</h2>

        <h3 className="mb-3">
          It’s possible that the first person to scan through your CV/folio
          could be a HR member that has no design knowledge. Make everything
          simple. Do you know what A/B testing is? Do you know what “Hick’s law”
          is? It might sound simple, but list it somewhere. A recruiter could be
          scanning your profile with a list of buzz words in front of them and
          if you don’t hit them, they could move on.
        </h3>

        <h2 className="mb-5">Explain yourself 💭</h2>

        <h3 className="mb-5">
          Tell me about your product, team, individual and shared
          responsibilities. It’s easy for a hiring manager to wrongly assume
          what you’ve worked on in a particular project. If there’s more than
          one of you in a team, identify the parts of the project that you
          worked on/owned/lead.
        </h3>

        <h2 className="mb-3">So… Let’s talk about NDAs</h2>

        <h3 className="mb-5">
          Most designers are under NDA. It’s pretty common right? 🤔 So,
          thumbnail a snippet of an anonymised project and password protect that
          particular page. If your folio is a PDF, just advise whoever you’re
          sending it to that it’s confidential and can’t be forwarded on, this
          shouldn’t be an issue. Showcase something else if you really, really
          can’t post your recent stuff… maybe some freelance work you’ve taken
          on?
        </h3>

        <h2 className="mb-3">Tell me a story! Give me a great UX!</h2>

        <h3 className="mb-5">
          Personalise your folio… Not only with your branding, but instead of
          listing a few bullet points of how you like to spend your weekend,
          show me what you get up to. We all know that we like to visualise, so
          maybe include a small page/section with a couple photos of your
          hobbies/pets/inspiration posts. I think you’d be surprised at how many
          people would actually look at this stuff.
        </h3>

        <h3>
          Thanks for reading! <br /> 😁
        </h3>

        


      
      </div>
    </div>
  );
}
