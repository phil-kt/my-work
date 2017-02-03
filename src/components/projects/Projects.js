
import hive from '../../media/hive/hive-hero.png';
import ar from '../../media/argon/argon-hero.png';
import medi from '../../media/medi/medi-hero.png';
import graffiti from '../../media/graffiti/graffiti-hero.png';
import dots from '../../media/dots-hero.png';

class Projects {

  projects = [
    {
      name: "Untappd Redesign",
      description: "An in-progress case study and redesign of the popular beer app Untappd",
      image: null,
      link: "/untappd"
    },
    {
      name: "The Hive",
      description: "A case study about how to optimize finding a seat in Georgia Tech’s library",
      image: {hive},
      link: "/hive"
    },
    {
      name: "Medi",
      description: "An application ecosystem to ensure that elderly patients take their prescription medications",
      image: {medi},
      link: "/medi"
    },
    {
      name: "Understanding AR",
      description: "An augmented reality book about the history of augmented reality",
      image: {ar},
      link: "/understanding-ar"
    },
    {
      name: "Sous Chef",
      description: "An Amazon Echo skill that makes Alexa your personal assistant cook",
      image: {},
      link: "/sous-chef"
    },
    {
      name: "Graffiti",
      description: "An augmented reality iOS app to draw virtual graffiti on real world objects",
      image: {graffiti},
      link: "/graffiti"
    },
    {
      name: "Rendezvous",
      description: "An iOS app to help you find your friends in a crowd or whenever you have no service",
      image: {dots},
      link: "/rendezvous"
    },
    {
      name: "Miscellaneous",
      description: "Some other stuff I've made",
      link: "/miscellaneous"
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

  getProjectsMinusCurrent = (project) => {

  let modProjects = this.projects.slice();
  let index = this.getIndexOfProject(project);
  if (index > -1)
    modProjects.splice(index, 1);

  return modProjects;
  };

}

export default Projects;