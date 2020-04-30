import React, { Component } from "react";

export default class TeachingPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="row-right">
            <div className="Bio-intro">
              Hi there! I am a PhD student with a lot to learn about teaching
              practice. I'm working on my continued education in teaching
              through courses in SCS, the SCS teaching community, seminars at
              the <a href={"https://www.cmu.edu/teaching/"}>Eberly Center</a>
              <span>
                , and, of course, some great books and blogs! Feel free to check
                out my{" "}
              </span>
              <a
                href={
                  "https://docs.google.com/document/d/1eko2DF18ci0VKYzIo9fkc8MSAU9xyGn228cPvEhutsY/edit?usp=sharing"
                }
              >
                Teaching Statement
              </a>
              .
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-left">
            <div className="project-title">
              <span>Human-AI Interaction Fall 2019</span>
              <div className="Bio-contact">
                <a href={"http://www.humanaiclass.org/syllabus/"}>
                  course site
                </a>
              </div>
            </div>
          </div>
          <div className="row-right">
            <div className="Bio-intro">
              <span>
                <span>This is a course I co-taught with Prof. </span>
                <a href={"http://www.cs.cmu.edu/~chinmayk/"}>
                  Chinmay Kulkarni
                </a>
                , which was very interesting, since as a relatively new elective
                we got to design all new instructional materials. I was very
                grateful to be awarded the 2020 Alan J. Perlis Graduate Student
                Teaching Award within the CMU School of Computer Science for
                teaching this course!
              </span>
              <br></br>
              <br></br>
              <span className="Bio-intro-detail">
                Course Description: In short, the goal of this course is to
                introduce students to ways of thinking about how Artificial
                Intelligence will and has impacted humans, and how we can design
                interactive intelligent systems that are usable and beneficial
                to humans, and respect human values. As students in this course,
                you will build a number of different interactive technologies
                powered by AI, gain practical experience with what impacts their
                usability for humans, understand the various places that humans
                exist in the data pipeline that drives machine learning, and
                learn to think both optimistically and critically of what AI
                systems can do and how they can and should be integrated into
                society.
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row-left">
            <div className="project-title">
              Software Structures of User Interfaces Fall 2017, 2018
            </div>
          </div>
          <div className="row-right">
            <div className="Bio-intro">
              This was a lab course I taught, which accompanied the HCI course
              05-630 Programming User Interfaces. It was designed as a hands-on
              overview of building web and mobile-based user interfaces for
              students coming in with some technical and programming skills. For
              this lab, I updated all instructional materials, and handled lab
              lectures, activities, office hours, and grading.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
