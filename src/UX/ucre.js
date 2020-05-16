import React, { Component } from "react";
import stakeholderMap from "./stakeholders-art.jpg";
import interviewMural from "./Interview_Data_Affinity_Diagram.jpg";
import reframingImg from "./Reframing.png";
import crazy8 from "./Crazy8.png";
import speedDate1 from "./SpeedDating1.png";
import speedDate2 from "./SpeedDating2.png";

export default class UCREPage extends Component {
  render() {
    return (
      <div>
        <div className="row nav">
          <span className="title">UX Portfolio > Public Art Project</span>
        </div>
        <div className="row ux heading">
          <h1>Pittsburgh Community Engagement with Public Arts</h1>
          <div className="content">
            <h3>Overview:</h3>
            <span>
              This project was done for a graduate course,{" "}
              <a href="https://hcii.cmu.edu/courses/user-centered-research-and-evaluation">
                User-Centered Research and Evaluation
              </a>
              , at Carnegie Mellon University. We began with data previously
              collected in a prior project on Pittsburgh public art from the{" "}
              <a href="https://www.cmu.edu/metro21/">
                Metro 21 Smart Cities Institute at Carnegie Mellon
              </a>
              . The goal of our own class project was to find new ways in which
              public arts might be used towards improving the livability of
              Pittsburgh for its citizens.
            </span>
            <h3>(Imaginary) Client:</h3>
            <span>
              The City of Pittsburgh. Pittsburgh is home to a collection of
              public artwork placed outdoors for anyone to view free of cost,
              including an eclectic mix of statues, interactive installations,
              monuments, murals, and historic buildings.
            </span>
            <h3>Outcome:</h3>
            <span>
              New ideas for community programs to encourage members of the
              public to create and show their own "amateur" or kids art
              alongside formal public art pieces.
            </span>
            <h3>Role:</h3>
            <span>Lead UX Designer</span>
          </div>
        </div>

        <div className="row ux">
          <div className="row-left">
            <h2>Problem Space</h2>
          </div>
          <div className="row-right">
            <span>
              Researchers believe that public art improves the overall
              livability of a city. Pittsburgh is a mid-sized city with public
              art scattered among 90 distinct neighborhood communities that make
              up the city. Not only is the art distributed: the ownership,
              maintenance, and commission of pieces is also highly distributed
              between a loosely connected set of private Art institutions, Arts
              nonprofits, private citizens, and city government offices.
              <br></br>
              <br></br>
              <b>Problem:</b> How can the city of Pittsburgh make better use of
              its public art to improve the lives of citizens, with a diverse
              patchwork quilt of different "owners" of the art and neighborhoods
              to serve?
            </span>
          </div>
        </div>

        <div className="row ux">
          <div className="row-left">
            <h2>Research</h2>
          </div>
          <div className="row-right">
            <span>
              With research, I sought to understand how public art in Pittsburgh
              operates, and uncover the most promising viable directions for
              connecting citizens with arts in their city.
            </span>

            <h3>Secondary Research</h3>
            <span>
              First, I consulted data from a prior research project from{" "}
              <a href="https://www.cmu.edu/metro21/">
                Metro 21 Smart Cities Institute at Carnegie Mellon
              </a>{" "}
              that had tried to augment Pittsburgh public art pieces with extra
              digital online content. This data included prior interviews with
              arts stakeholders collected by that project team, as well as
              metrics on the digital content and chatbot they had deployed at
              several prominent art sites in Pittsburgh.
              <br></br>
              <br></br>
              <div className="imageFrame">
                <img
                  src={stakeholderMap}
                  alt="stakeholder map for public arts in Pittsburgh"
                />
                <div className="imageCaption">
                  Stakeholder Map for public arts in Pittsburgh based on my
                  secondary research and analysis of data the from Metro 21
                  project.
                </div>
              </div>
              This research revealed few existing connections from arts
              infrastructure to members of the public. The attempt of this prior
              project to connect to the public through digital content
              experienced very low usage or adoption. Thus, our next step was to
              expand our ideas on other ways that the local community might
              interact with art.
            </span>

            <h3>Primary Research</h3>
            <span>
              I interviewed 3 community members who somehow were involved in
              arts in their town. Two interviewees were artists themselves, and
              two lead organization of community arts programs for their work.
              <div className="imageFrame">
                <img
                  src={interviewMural}
                  alt="affinity diagram of interview data from artists/art community facilitators"
                />
                <div className="imageCaption">
                  Affinity diagram of my analysis of interview data from artists
                  and art community facilitators.
                </div>
              </div>
              This research revealed that one successful way to engage the
              public with local arts is to organize activities for local kids
              and non-artist citizens to create art themselves, and then show
              their art alongside the formal art of local artists or
              (potentially) public arts pieces.
            </span>
          </div>
        </div>

        <div className="row ux">
          <div className="row-left">
            <h2>Ideation</h2>
          </div>
          <div className="row-right">
            <span>
              In this phase, I sought to explore ways to reframe the problem
              space as well as sketch initial ideas. The goal of this phase was
              to go as creative and broad as possible to explore what might be
              possible.
              <div className="imageFrame">
                <img src={reframingImg} alt="Worst ideas reframing exercise" />
                <div className="imageCaption">
                  <a href="https://www.interaction-design.org/literature/topics/worst-possible-idea">
                    "Worst Possible Idea Method"
                  </a>{" "}
                  design exercise to explore ways to reframe the problem space.
                </div>
              </div>
              <div className="imageFrame">
                <img
                  src={crazy8}
                  alt="Crazy 8's design exercise sketch"
                  style={{ width: "300px", margin: "0px calc(50% - 150px)" }}
                />
                <div className="imageCaption">
                  A sketch from playing the{" "}
                  <a href="https://designsprintkit.withgoogle.com/methodology/phase3-sketch/crazy-eights">
                    "Crazy 8's Method"
                  </a>{" "}
                  rapid sketching design exercise, to quickly explore a broad
                  space of ideas. I focused all sketches on different ways to
                  get community members creating and displaying their art.
                </div>
              </div>
            </span>
          </div>
        </div>

        <div className="row ux">
          <div className="row-left">
            <h2>Speed Dating</h2>
          </div>
          <div className="row-right">
            <span>
              Moving on from the most intriguing possible solutions spaces from
              our sketching exercises, in this design phase I aimed to probe
              closer at understanding members of the publics' values around
              creating, consuming, and sharing art in their community.
            </span>
            <div className="imageFrame">
              <img src={speedDate1} alt="sketches from speed dating exercise" />
              <img src={speedDate2} alt="sketches from speed dating exercise" />
              <div className="imageCaption">
                Two sketches I created for a speed dating study with users. Per
                the speed dating method, the bottom image is intentionally "out
                there" to push at users' values.
              </div>
            </div>
            <span>
              I ran a Speed Dating study with two participants, on 9 different
              storyboards. Key takeaways from this design exercise were that:
              <ul>
                <li>
                  Some people really appreciate the low barrier to entry and
                  sense of community that comes with sharing art in online
                  platforms, such as Instagram.
                </li>
                <li>
                  Some people really look forward to displaying their art in
                  formal public settings, but find the prospect of applying to
                  do this intimidating.
                </li>
                <li>
                  It is unlikely to find a one-size-fits-all kind of art
                  activity or program that all people find inspiring to make
                  art. Individuals have their own preferences when it comes to
                  creating.
                </li>
              </ul>
            </span>
          </div>
        </div>

        <div className="row ux">
          <div className="row-left">
            <h2>Proposal & Next Steps</h2>
          </div>
          <div className="row-right">
            <span>
              At this point in the design process, I've scoped our goal towards
              facilitating local schoolchildren and members of the Pittsburgh
              community to share their art for public display. Our proposed
              solution balances the low barrier to entry and administrative ease
              of a digital solution, with the physical presence of Pittsburgh
              public arts pieces.
            </span>
            <h3>Art by the Public / Public Art</h3>
            <span>
              We propose that at selected public art sites throughout the city,
              Pittsburgh install digital screens appropriate to those sites. The
              screens will display a weekly updating selection of art by the
              citizens of Pittsburgh, with a mix of local artist, amateur,
              senior citizen, and local kid art to make all citizens feel
              celebrated. Citizens can submit their art from their own homes by
              posting at a Twitter account #artbypublic_pittsburgh. Art by the
              Public Program coordinators can also work directly with local
              community centers, schools, and senior homes to have "themed"
              pop-up art shows on the screens throughout the year. Since the
              selection of artwork and update of the screens can all be done
              remotely, we expect the program time and upkeep costs to stay low:
              which is particularly important given Pittsburgh's lack of
              existing community arts outreach programming.
            </span>
            <h3>Next Steps</h3>
            <span>
              Next up in this project would be to create higher-fidelity
              storyboards and mockups to begin testing this idea with members of
              the public and Pittsburgh Public Arts stakeholders.
            </span>
          </div>
        </div>
      </div>
    );
  }
}
