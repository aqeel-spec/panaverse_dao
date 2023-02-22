export const courses = [
  {
    name: 'Web 3.0 (Blockchain) and Metaverse Specialization',
    para: `This Web 3.0 and Metaverse specialization focuses on 
    developing full-stack Web 3.0 and Metaverse experiences for the next 
    generation of the internet by specializing in building worlds that 
    merge the best of cutting-edge decentralized distributed blockchains 
    with 3D metaverse client experiences.
    `,
    id: 1,
    q4: {
      quater: 'IV',
      Code: 'W3-351',
      name: 'Developing Smart Contracts and Planet-Scale Web 3.0 Dapps',
    },
    q5: {
      quater: 'V',
      Code: 'MV-361',
      name:
        'Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences',
    },
  },
  {
    name: 'Genomics and Bioinformatics Specialization',
    para: `Genomics is the study of the total genetic makeup of individual 
        organisms, and how this genetic information is structured, functions,
        and has evolved; bioinformatics encompasses a diverse range of analytical
        methods and tools applied to genomic data.`,
    id: 5,
    q4: {
      quater: 'IV',
      Code: 'Bio-351',
      name: 'Python for Biologists',
    },
    q5: {
      quater: 'V',
      Code: 'Bio-361',
      name: 'Bioinformatics with Python',
    },
  },
  {
    name: 'Network Programmability and Automation Specialization',
    para: `More than ever, network engineers are finding it challenging to 
        complete their duties entirely manually. Network automation is now crucial
        due to new protocols, technologies, delivery models, and the requirement for
        enterprises to become more adaptable and agile. `,
    id: 6,
    q4: { quater: 'IV', Code: 'NPA-351', name: 'CCNA 200-301 Certification' },
    q5: {
      quater: 'V',
      Code: 'NPA-361',
      name: 'Network Programmability and Automation',
    },
  },
  {
    name: 'Artificial Intelligence (AI) and Deep Learning Specialization',
    para: `The AI and Deep Learning specialization focuses on building 
    and deploying intelligent APIs using OpenAI models and building 
    custom Deep Learning Tensorflow models.`,
    id: 2,
    q4: {
      quater: 'IV',
      Code: 'AI-351',
      name: 'Developing Planet-Scale Intelligent APIs and Python Programming',
    },
    q5: { quater: 'V', Code: 'AI-361', name: 'Deep Learning and MLOps' },
  },
  {
    name: 'Cloud-Native Computing Specialization',
    para: `The Cloud-Native Computing Specialization focuses on Containers, 
     Kubernetes, and CDK for Kubernetes. `,
    id: 3,
    q4: {
      quater: 'IV',
      Code: 'CN-351',
      name: 'Certified Kubernetes Application Developer (CKAD)',
    },
    q5: {
      quater: 'V',
      Code: 'CN-361',
      name: 'Developing Multi-Cloud APIs using CDK for Terraform',
    },
  },
  {
    name: 'Ambient Computing and IoT Specialization',
    para: `The Ambient Computing and IoT Specialization focuses on building 
        Smart Homes, Offices, Factories, and Cities using Voice computing, Matter
        Protocol, and Embedded Devices. `,
    id: 4,
    q4: {
      quater: 'IV',
      Code: 'AC-351',
      name:
        'Ambient Computing with Voice Assistants and Matter Protocol Devices',
    },
    q5: {
      quater: 'V',
      Code: 'AC-361',
      name: 'Embedded Programming using C and Rust',
    },
  },
]

export const detailSyllabus = [
  {
    title: 'Detailed Course Syllabus',
    des: 'Earn while you learn',
    id: 1,
    quarterI: {
      id: 1,
      courseCode: 'CS-101',
      name: 'Object-Oriented Programming using TypeScript',
      duration: '13 Weeks',
      des:
        'We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.',
      ptOne: {
        name: 'HTML and CSS (Homework)',
        by: 'Learn HTML by Hira Khan (Watch Recorded Videos)',
        by2: 'Learn CSS by Hira Khan (Watch Recorded Videos)',
        links: {
          html:
            'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6',
          css:
            'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob',
        },
      },
      ptTwo: {
        title: 'Web 3.0 and Metaverse Theory',
        doc:
          'https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing',
        title2: 'Web 3.0 User Guide',
        doc2:
          'https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing',
        name3: 'Complete Web 3 Assignments included in the Web 3 User Guide',
        title3: 'Virtual and Augmented  Metaverse User Guide',
        doc3:
          'https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing',
      },
      ptThree: {
        title:
          'Fundamentals of JavaScript (ECMAScript 2022 Language Specification)',
        by: 'Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)',
        link:
          'https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo',
        des:
          'Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages',
        bookLink:
          'https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4',
        js: {
          name: 'JavaScript Book Code',
          link:
            'https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional',
        },
        jsAndNodeExercises: {
          name: 'Getting Started Exercises with JavaScript and Node.js ',
          link:
            'https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md',
        },
      },
      ptFour: {
        name: ' Object-Oriented Programming with TypeScript',
        chp:
          'Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript',
        link:
          'https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1',
        ul: {
          name: 'Learning Repository',
          link: 'https://github.com/panaverse/learn-typescript',
          name2:
            'In Class Companion projects and articles for Learning TypeScript',
          link2: 'https://www.learningtypescript.com/',
          name3: 'Homework Project',
          link3: 'https://github.com/panaverse/typescript-node-projects',
          quiz1: 'Fundamentals of TypeScript Quiz',
          quiz2: 'TypeScript Professional Proficiency Quiz',
        },
      },
      ptFive: {
        name: 'TypeScript for React',
        des:
          'Minimal TypeScript Crash Course For React With Interactive Code Exercises',
        link: 'https://profy.dev/article/react-typescript',
      },
      quize1: {
        qname: 'Fundamentals of JavaScript and Node.js Quiz',
        topic: 'Topics Covered in the Quiz',
        a: 'Background of JavaScript and How to use JavaScript in Browser',
        b:
          'Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)',
        c: {
          name:
            'Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:',
          link:
            'https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing',
        },
        d: {
          name:
            'How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:',
          link:
            'https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing',
          note:
            ' After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.',
        },
        e:
          'Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)',
        f:
          'Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)',
        g:
          'Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)',
        h:
          'Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)',
        i:
          'Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)',
        j: {
          name: 'JavaScript promises, mastering the asynchronous',
          link:
            'https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript',
        },
        k: {
          name: 'New JavaScript Features in ECMAScript 2022 and 2021',
          link:
            'https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg',
        },
      },
      qBreak: {
        name: 'Quarter Break Assignments and Quizzes',
        des: 'During the Quarter Break, we do the following Assignments: ',
        link1:
          'https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge',
        link2:
          'https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app',
        link3:
          'https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui',
        link4: {
          name:
            ' Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document: ',
          link:
            'https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing',
        },
        link5: {
          name:
            ' Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document: ',
          link:
            'https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing',
        },
        achievement:
          'The best-developed Website will be hosted on www.panaverse.co domain.',
        endOfQuater: {
          name: 'Fundamentals of Version Control with Git Quiz',
          pro:
            'Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)',
          link:
            'https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF',
          detail:
            'Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther ',
          articles: {
            name: 'We will also cover these readings:',
            l1: 'https://help.github.com/articles/markdown-basics/',
            l2:
              'http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github',
            l3:
              'http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences',
            l4:
              'http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences',
            l5: 'https://git-scm.com/book/en/v2/Git-Branching-Rebasing',
            l6:
              'http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches',
            l7: {
              name: 'For practice:',
              link: 'https://try.github.io/levels/1/challenges/1',
            },
            l8: {
              name: 'Homework',
              link:
                'https://www.datacamp.com/courses/introduction-to-git-for-data-science',
            },
            git: {
              csheet: 'Git Cheatsheet',
              link:
                'https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html',
              quiz: {
                name: 'Git Quiz',
                q: 'Total Questions: 60 ',
                time: 'Total Time: 75 minutes',
              },
            },
            tsQuiz: {
              name: 'TypeScript Proficiency Quiz',
              q: 'Total Questions: 63',
              duration: 'Duration: 120 minutes ',
              material: 'Study Material',
              li: 'https://github.com/panaverse/learn-typescript',
            },
          },
        },
      },
    },
    quater2: {
      id: 2,
      courseCode: 'None',
      name:
        'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
      duration: '13 Weeks',
      des:
        'The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).',
      Course_Outline: {
        pt1: {
          name: 'Next.js 13 Web Development ',
          t1: 'Next 13 Official Documentation',
          t2: 'Latest Learn React Official Website',
          t3: 'Learn Next.js 13 Learning Repo',
          l1: 'https://beta.nextjs.org/docs',
          l2: 'https://beta.reactjs.org/learn ',
          l3: 'https://github.com/panaverse/learn-nextjs',
        },
        pt2: {
          name: 'Next.js 13 using Chakra UI (Remote Zoom Class)',
          l1: 'https://www.freecodecamp.org/news/css-flexbox-complete-guide/',
          l2: 'https://chakra-ui.com/getting-started',
          t1:
            'CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items',
          t2: 'Chakra UI Docs',
        },
        pt3: {
          name:
            'UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)',
          t1:
            'Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano',
          t2: 'Figma Design Kit for TailwindCSS',
          t3: 'Chakra UI Figma Kit',
          l1:
            'https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa',
          l2: 'https://www.figma.com/community/file/768809027799962739',
          l3: 'https://www.figma.com/community/file/971408767069651759',
        },
        pt4: {
          name: 'API Routes with Next.js (Remote Zoom Class)',
          t1: 'API Routes',
          l1: 'https://nextjs.org/docs/api-routes/introduction',
        },
        pt5: {
          name: 'APIs with Next.js and tRPC (Remote Zoom Class)',
          t1: 'Build a tRPC CRUD API Example with Next.js',
          t2: 'Stop building REST APIs for your Next.js apps, use tRPC instead',
          l1:
            'https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/',
          l2:
            'https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/',
        },
        pt6: {
          name: 'SQL and Prisma',
          t1: 'Start from scratch with relational databases',
          t2: 'SQL For Beginners Video Tutorial',
          t3: 'Database Management Systems and SQL – Tutorial for Beginners',
          l1:
            'https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres',
          l2: 'https://www.youtube.com/watch?v=5hzZtqCNQKk',
          l3: 'https://www.freecodecamp.org/news/dbms-and-sql-basics/',
        },
        pt7: {
          name: 'Next.js 13 using TailwindCSS (Remote Zoom Class)',
          t1: 'Modern CSS with Tailwind, Second Edition by Noel Rappin',
          l1:
            'https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/',
        },
        pt8: {
          name: 'AWS Application Composer (Remote Zoom Class)',
          t1: 'What is AWS Application Composer?',
          t2: 'Event-driven apps with AWS Application Composer',
          t3: 'Visually design and build serverless applications quickly',
          l1: 'https://www.youtube.com/watch?v=BujE_tik5r8',
          l2: 'https://www.youtube.com/watch?v=p411uh363jQ',
          l3: 'https://aws.amazon.com/application-composer/',
          awsTitle: 'Must Have: Create Free AWS Account',
          awsDetail: `AWS Free Tier https://aws.amazon.com/free/ 

              Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.

              Now you can create a virtual VISA Debit card through the NayaPay app (https://www.nayapay.com/ ) which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.

              You can also get a $300 credit
              https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html 
            `,
        },
        pt9: {
          name:
            'Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)',
          t1:
            'Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps',
          l1: 'https://github.com/panaverse/learn-multicloud-api-development',
        },
        projects: {
          title: 'Web 2.0 Projects',
          p1: 'Next.js Projects',
          p2: 'Styling Next.js Projects using TailwindCSS and Chakra UI',
          p3: 'Todo Full-Stack App',
          p4: 'Build a Twitter Clone',
          pl1: 'https://github.com/panaverse/nextjs-projects',
          pl2: 'https://github.com/panaverse/styling-nextjs-projects',
          pl3: 'https://github.com/ogzhanolguncu/min-todo',
          pl4: 'https://www.youtube.com/watch?v=nzJsYJPCc80',
        },
      },
    },
    quater3: {
      id: 3,
      heading: 'Earn While You Learn Projects',
      name:
        '$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development',
      duration: '13 Weeks',
      a: {
        name: 'Build Full-Stack Next.js 13 Jamstack Templates',
        des:
          'You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.',
        t1: 'The Template Standard',
        l1: 'https://github.com/panaverse/panaverse-template-standard',
      },
      b: {
        name: 'Build QraphQL APIs',
        des:
          'You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.',
      },
    },
  },
]
export const specializationCourse = [
  {
    quarter4: {
      name: 'Web 3 and Metaverse Specialization',
      id: 1,
      courseCode: 'W3-351',
      title: 'Developing Smart Contracts and Planet-Scale Web 3.0 Dapps',
      duration: '13 Weeks',
      des: `
     In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, 
     write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop 
     ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also
     need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.
     https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db

     `,
      courseOutlne: {
        pt1: {
          name: 'Blockchain and Metaverse Theory',
          p1: `The Metaverse: And How It Will Revolutionize Everything by Matthew Ball
          https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0 
          `,
          p2: `Mastering Blockchain - Fourth Edition by Imran Bashir
                https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067 
                `,
        },
        pt2: {
          name: 'Smart Contract Development in Solidity ',
          p1: {
            t1:
              'Solidity Programming Essentials - Second Edition By Ritesh Modi',
            t2: 'Solidity Learning Repo',
            l1:
              'https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181',
            l2:
              'https://github.com/panaverse/defi-dapps-solidity-smart-contracts',
          },
        },
        pt3: {
          name: 'Dapp Development using Ethers.js and Next.js 13',
          t1: 'Dapp Learning Repo',
          l1: 'https://github.com/panaverse/dapps-nextjs',
        },
        pt4: {
          name: 'Tokennomics',
        },
        pt5: {
          name: 'Blockchain Project: Create a Token and Launch ICO/IEO/IDO',
          t1: `
            As you probably know, the ICO ("Initial Coin Offering") industry has been booming, 
            and it's completely reinventing the way new startups kickstart themselves. In fact,
             have a look at Wikipedia's list of highest crowdfunding projects  
             https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects,
              and you'll notice that blockchain projects absolutely dominate the list.

          `,
          l1:
            'https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects',
          t2: 'Understand the difference between IDO vs. IEO vs. ICO ',
          l2: 'https://phemex.com/blogs/what-is-a-dex-ido',
          t3: 'ICO list at ICO Drops ',
          l3: 'https://icodrops.com',
          t4: 'ICO List of Best New Initial Coin Offerings',
          l4: 'https://topicolist.com/',
          t5:
            'Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs ',
          l5: 'https://cryptototem.com/ico-list/',
          t7: 'ICO List Online',
          l7: 'https://www.icolistingonline.com',
          t8: 'Binance IEO List',
          l8: 'https://coincodex.com/ieo-list/binance/',
          t9: 'Binance Launchpad ',
          l9: 'https://www.coinspeaker.com/ieo/platform/binance-launchpad/',
          t10: 'IEO List',
          l10: 'https://icomarks.com/ieo',
          t11: 'Polkastarter',
          l11: 'https://polkastarter.com',
        },
        projects: [
          {
            id: 101,
            title: 'Project 1',
            name: 'How to Launch a IEO on Binance Launchpad',
            t1: 'Read How to Launch an IEO  ',
            l1: 'https://appinventiv.com/blog/how-to-launch-an-ieo/',
            t2:
              'Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad ',
            l2:
              'https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04',
          },
          {
            id: 102,
            title: 'Project 2',
            name: 'How to Launch a IDO on Polkastarter',
            t1: 'Review the [list of top fundraising platforms ',
            l1: 'https://cryptorank.io/fundraising-platforms',
            t2:
              'Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter',
            l2: 'https://polkastarter.com/',
          },
          {
            id: 103,
            title: 'Project 3',
            name: 'Create a Pako Token',
            t1: `
            By creating a token and related contracts, you'll also learn how to handle money sent to your 
            contracts, which should come in handy if you want to create some kind of paid decentralized 
            service in the future.

            Therefore, for the sake of this chapter, let's imagine that our  Pako DApp uses its own coin – 
            the Pako Token. We will create two contracts – one for the token itself and one for the token 
            crowd sale (the ICO).

            Now Create your own Pako ERC20 Token and deploy it on a testnet. 
            The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. 
            Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.
            `,
          },
          {
            id: 104,
            title: 'Project Part 4',
            name: 'Develop Crowd Sale Contract',
            t1: `
              This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)

              Implement a payable buyToken() function. 

              Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought

              Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal "owner" account.

              Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.
             
              `,
            t2: 'You can use the openzeppelin crowd sale contracts ',
            l2: 'https://docs.openzeppelin.com/contracts/4.x/crowdsales',
            t3: `Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.

                Note: Before you get started writing the token contract we suggest you review the access control
                `,
            l3: 'https://docs.openzeppelin.com/contracts/4.x/access-control',
          },
          {
            id: 105,
            title: 'Project Part 5',
            name: 'Trying it with MetaMask',
            t1: `
             While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!

              We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.

              When it's done, take note of what addresses the contracts were uploaded to and copy it!

              Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.

              After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to "register" it – after all, there are so many tokens out there, there's no way MetaMask could list them all by default!

              To do this, open the side menu and click on the "Add token" button to get started:

              Once you're on the token page, click on "Add custom token" and paste in the token contract's address in the address field.

              After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!

            `,
          },
          {
            id: 106,
            name: ' Trying it with Multisignature Wallets',
            title: 'Project Part 6',
            t1: 'Read',
            l1:
              'https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/',
            t2:
              'Now use Gnosis Safe]{https://gnosis-safe.io/ with multi-sigs to do what you did in the last part.',
            l2: 'https://gnosis-safe.io/',
          },
          {
            id: 107,
            name: 'Sending Tokens using Ethers.js ',
            title: 'Project Part 7',
            t1: `Write a Typescript program to send Pako Token to some friend's address using Ethers.js.

                  You may follow this tutorial 
                  `,
            l1:
              'https://ethereum.org/en/developers/tutorials/send-token-etherjs/',
          },
          {
            id: 107,
            name: ' Create, Deploy, Mint, and Sell an NFT',
            title: 'Project Part 8 Advance',
            t1: 'Create, Deploy, Mint, and Sell an NFT',
            l1:
              'https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/',
            t2:
              'Create a NFT contract using the [OpenZepplen ERC721 NFT Standard ',
            l2: 'https://docs.openzeppelin.com/contracts/4.x/erc721',
            t3: 'You may use the Preset ERC721 contract',
            l3: 'https://docs.openzeppelin.com/contracts/4.x/erc721#Presets',
            t4:
              'Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace https://opensea.io/  for sale.',
            t5: 'Implement a ERC721 Market ',
            l5:
              'https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/',
          },
        ],
      },
    },
    // quarter5: {},
  },
]
export const common = [
  {
    title: 'Core Courses (Common in All Specializations)',
    subTitle:
      'Every participant of the program will start by completing the following three core courses',
    id: 1,
    quater1: {
      name: 'Quarter I',
      code: 'CS-101',
      des: 'Object-Oriented Programming using TypeScript',
    },
    quater2: {
      name: 'Quarter II',
      code: 'W2-201',
      des:
        'Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform',
    },
    quater3: {
      name: 'Quarter III',
      code: '$-101',
      des:
        ' Dollar Making Bootcamp - Full-Stack Template and API Product Development',
    },
  },
]
