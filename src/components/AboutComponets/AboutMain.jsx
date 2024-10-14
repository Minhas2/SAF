import React from 'react'
import "./AboutMain.css"

export default function AboutMain() {
  return (
    <>

    {/* port */}

    <div className='PORT'>
        <div className="container py-port Epliogue">
            <div className="row">
                <div className="col-lg-4">
                    <img src="../assets/port.png" alt="" className='mb-3 port-image'/>
                    <h2>Pablo Designero
                    </h2>
                    <p>Designer & Unicorn Trainer</p>
                </div>

                <div className="col-lg-8 my-auto mt-1024-port">
                    <h2>Bio:</h2>
                    <p>Father of 3 humans, 5 unicorns & 2 dogs,I design since I can remember it. I often get asked where I get my inspiration from: in everyday’s lil’ details. And sometimes in leftover food I find in my beard.</p>
                </div>
            </div>
        </div>
    </div>
        {/* port */}


        {/*INFO  */}
        <div className="INFO">
            <div className="container py-port">
                <h1 className='mb-60'>
                When I was 5, I got adbucted by a unicorn family. When they returned me to earth, I joined a designer school. But, fo’ real, what I learned with my kidnaptive family really gave an edge to my creative language.
                </h1>

                <p className='Info-paraBack mb-0 py-1'>Being a human is way too complicated. Time to be a unicorn.</p>
                <p className='mb-0'>Try it and you’ll see. Then your Figma files are just gonna fly in color, glitter, interactions and autolayout.</p>
                <p className='Info-paraBack mb-0 py-1'>Also, grow a beard. Check my bio if that is not clear.</p>
                <p>Available for projects, from Monday to Tuesday, mainy between 14 and 16. (Unless there is a unicorn race on TV - DUH -in that case, come back another day).
                Projects include, RocknRoll covers, furniture refurbishing, Unicorn potty training and more.</p>
            </div>
        </div>
        {/*INFO  */}


        {/* FORM */}
    <div className="FORM">
        <div className="container py-5 border-TopForm Epliogue">
            <div className="row">
            <div className="col-lg-6 pe-288">
                <h1>Let’s work together</h1>
                <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>

                <div className="d-flex align-items-centers">
                    <img src="../assets/s1.png" alt="" className="social-icons ps-2"/>
                    <img src="../assets/s2.png" alt="" className="social-icons ps-2"/>
                    <img src="../assets/s3.png" alt="" className="social-icons ps-2"/>
                    <img src="../assets/s4.png" alt="" className="social-icons ps-2"/>
                    <img src="../assets/s5.png" alt="" className="social-icons ps-2"/>
                </div>
            </div>


            <div className="col-lg-6 mt-1024-work">
                {/* real form */}
                <form action="">
                <input type="Name" className="FORM-INput mb-3 p-3" placeholder="Name"/>
                <input type="Email" className="FORM-INput mb-3 p-3" placeholder="Email"/>

                <textarea name="Type your message here" id="" placeholder="Type your message here" className="text-form p-3 mb-4" rows={5}>
                </textarea>

                <button className="sub-btn">
                    Submit
                </button>

                </form>
            </div>

            </div>

        </div>
    </div>

      {/* FORM */}









    </>
      
  )
}
