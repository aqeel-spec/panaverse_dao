type CourseOutline = {
  name: string;
  awsTitle?: string;
  awsDetail?: string;
  t1?: string;
  t2?: string;
  t3?: string;
  t4?: string;
  l1?: string;
  l2?: string;
  l3?: string;
  l4?: string;
};
type QpropCommon = {
  id: number;
  courseCode: string;
  name: string;
  des: string;
};
type Projects = {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  pl1: string;
  pl2: string;
  pl3: string;
  pl4: string;
};

export type Ds = {
  id: number | null | undefined;
  title: string;
  des: string;
  quarterI: {
    id: number;
    courseCode: string;
    name: string;
    duration: string;
    des: string;
    ptOne?: {
      name: string;
      by: string;
      by2: string;
      links: {
        html: string;
        css: string;
      };
    };
    ptTwo?: {
      title: string;
      doc: string;
      title2: string;
      doc2: string;
      name3: string;
      title3: string;
      doc3: string;
    };
    ptThree?: {
      title: string;
      by: string;
      link: string;
      des: string;
      bookLink: string;
      js: {
        name: string;
        link: string;
      };
      jsAndNodeExercises: {
        name: string;
        link: string;
      };
    };
    ptFour?: {
      name: string;
      chp: string;
      link: string;
      ul: {
        name: string;
        link: string;
        name2: string;
        link2: string;
        name3: string;
        link3: string;
        quiz1: string;
        quiz2: string;
      };
    };
    ptFive?: {
      name: string;
      des: string;
      link: string;
    };

    qBreak?: {
      name: "Quarter Break Assignments and Quizzes";
      des: "During the Quarter Break, we do the following Assignments: ";
      link1: "https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge";
      link2: "https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app";
      link3: "https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui";
      link4: {
        name: " Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document: ";
        link: "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing";
      };
      link5: {
        name: " Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document: ";
        link: "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing";
      };
      achievement: "The best-developed Website will be hosted on www.panaverse.co domain.";
      endOfQuater?: {
        name: "Fundamentals of Version Control with Git Quiz";
        pro: "Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)";
        link: "https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF";
        detail: "Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther ";
        articles: {
          name: "We will also cover these readings:";
          l1: "https://help.github.com/articles/markdown-basics/";
          l2: "http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github";
          l3: "http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences";
          l4: "http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences";
          l5: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing";
          l6: "http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches";
          l7: {
            name: "For practice:";
            link: "https://try.github.io/levels/1/challenges/1";
          };
          l8: {
            name: "Homework";
            link: "https://www.datacamp.com/courses/introduction-to-git-for-data-science";
          };
          git: {
            csheet: "Git Cheatsheet";
            link: "https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html";
            quiz: {
              name: "Git Quiz";
              q: "Total Questions: 60 ";
              time: "Total Time: 75 minutes";
            };
          };
          tsQuiz: {
            name: "TypeScript Proficiency Quiz";
            q: "Total Questions: 63";
            duration: "Duration: 120 minutes ";
            material: "Study Material";
            li: "https://github.com/panaverse/learn-typescript";
          };
        };
      };
    };
    quize1?: {
      qname: string;
      topic: string;
      a: string;
      b: string;
      c: {
        name: string;
        link: string;
      };
      d: {
        name: string;
        link: string;
        note: string;
      };
      e: string;
      f: string;
      g: string;
      h: string;
      i: string;
      j: {
        name: string;
        link: string;
      };
      k: {
        name: string;
        link: string;
      };
    };
  };
  quater2: {
    id: number;
    courseCode: string;
    name: string;
    des: string;
    duration: string;
    Course_Outline: {
      pt1: CourseOutline;
      pt2: CourseOutline;
      pt3: CourseOutline;
      pt4: CourseOutline;
      pt5: CourseOutline;
      pt6: CourseOutline;
      pt7: CourseOutline;
      pt8: CourseOutline;
      pt9: CourseOutline;
      projects: Projects;
    };
  };
  quater3: {
    id: number;
    name: string;
    heading: string;
    duration: string;
    a: {
      name: string;
      t1: string;
      l1: string;
      des: string;
    };
    b: {
      name: string;
      des: string;
    };
  };
}[];
//      same pt
type CourseOutlineSp = {
  name: string;
  t1?: string;
  t2?: string;
  t3?: string;
  t4?: string;
  l1?: string;
  l2?: string;
  l3?: string;
  l4?: string;
  t5?: string;
  t6?: string;
  t7?: string;
  t8?: string;
  t9?: string;
  t10?: string;
  t11?: string;
  l5?: string;
  l6?: string;
  l7?: string;
  l8?: string;
  l9?: string;
  l10?: string;
  l11?: string;
};
type Project = {
  id: number;
  title: string;
  name: string;
  t1?: string;
  l1?: string;
  t2?: string;
  l2?: string;
  t3?: string;
  l3?: string;
  t4?: string;
  l4?: string;
  t5?: string;
  l5?: string;
};
export type Sp = {
  quarter4: {
    name: string;
    id: number;
    courseCode: string;
    title: string;
    duration: string;
    des: string;

    courseOutlne: {
      pt1: CourseOutlineSp;
      pt2: CourseOutlineSp;
      pt3: CourseOutlineSp;
      pt4: CourseOutlineSp;
      pt5: CourseOutlineSp;
      projects: Project[];
    };
  };
  // quarter5: {};
}[];
