import untappdImage from '../../media/home/untappd-phone.png';
import hiveImage from '../../media/home/tree.png';
import mediImage from '../../media/home/medi-iphone.png';
import argonImage from '../../media/home/argon-iphone.png';
import sousImage from '../../media/home/sous-chef.png';
import graffitiImage from '../../media/home/graffiti-iphone.png';
import rendImage from '../../media/home/rendezvous-iphone.png';
import miscImage from '../../media/home/logo.png';

class Projects {

  projects = [
    {
      name: "Untappd Redesign",
      description: "An in-progress case study and redesign of the popular beer app Untappd",
      image: untappdImage,
      link: "/untappd",
      iPhone: true,
      tags: "UX Research, UI Design"
    },
    {
      name: "The Hive",
      description: "A case study about how to optimize finding a seat in Georgia Tech’s library",
      image: hiveImage,
      link: "/hive",
      tags: "UX Research, Prototyping"
    },
    {
      name: "Medi",
      description: "An application ecosystem to ensure that elderly patients take their prescription medications",
      image: mediImage,
      link: "/medi",
      iPhone: true,
      tags: "UX Design, Prototyping"
    },
    {
      name: "Understanding AR",
      description: "An augmented reality book about the history of augmented reality",
      image: argonImage,
      link: "/understanding-ar",
      iPhone: true,
      tags: "UX Design, Development"
    },
    {
      name: "Sous Chef",
      description: "An Amazon Echo skill that makes Alexa your personal assistant cook",
      image: sousImage,
      link: "/sous-chef",
      tags: "VUI Design, Development, Hackathon"
    },
    {
      name: "Graffiti",
      description: "An augmented reality iOS app to draw virtual graffiti on real world objects",
      image: graffitiImage,
      link: "/graffiti",
      iPhone: true,
      tags: "UI Design, Development, Hackathon"
    },
    {
      name: "Rendezvous",
      description: "An iOS app to help you find your friends in a crowd or whenever you have no service",
      image: rendImage,
      link: "/rendezvous",
      iPhone: true,
      tags: "UI Design, Development, Hackathon"
    },
    {
      name: "Miscellaneous",
      description: "Some other stuff I've made",
      link: "/miscellaneous",
      tags: "Otaku, Hackathon",
      image: miscImage
    }
  ];

  getIndexOfProject = (project) => {
  return this.projects.findIndex(x => x.name === project);
  };

  getNextProject = (project) => {

  let index = this.getIndexOfProject(project);

  if (index + 1 > this.projects.length - 1) {
    return this.projects[0]
  }

  return this.projects[index + 1];
  };

  getPrevProject = (project) => {

  let index = this.getIndexOfProject(project);

  if (index - 1 < 0) {
    return this.projects[this.projects.length - 1]
  }

  return this.projects[index - 1];
  };

  getRandomProject = () => {
    let random = Math.floor(Math.random() * this.projects.length)
    return this.projects[random];
  }

  getProjectsMinusCurrent = (project) => {

  let modProjects = this.projects.slice();
  let index = this.getIndexOfProject(project);
  if (index > -1)
    modProjects.splice(index, 1);

  return modProjects;
  };

}

export default Projects;