const activities = [
  //   {
  //     title: "IPCSD Africa Competition",
  //     status: "Completed",
  //     image: "/images/activities/ipcsd-africa.png",
  //     description: `The IPCSD Africa Competition was organized under the IEEE Industry Applications Society (IAS) with the objective of promoting innovation and technical excellence in the field of industrial power conversion systems. The event brought together student teams to apply theoretical knowledge to real-world industrial challenges, encouraging problem-solving, teamwork, and technical creativity while fostering engagement with IEEE technical communities at a continental level.`,
  //     additions: [
  //       "Three multidisciplinary student teams took part in the competition.",
  //       "The team composed of Hamza Rezgui, Amine Elkadhi, Nada Fatnassi, Maram Mastouri, Nour Halouani, and Med Aziz Derbali ranked among the Top 2 winners.",
  //       "The team was represented by Nour Halouani at the IEEE IAS/PES PowerAfrica Conference.",
  //     ],
  //   },

  {
    title: "NextGen Industry 1.0",
    status: "Completed",
    image: "/images/activities/nextgen-industry.jpg",
    description: `NextGen Industry 1.0 was a large-scale technical event organized in collaboration with HLC Tech, aiming to enhance students’ practical skills in industrial design and engineering software. Through intensive certified workshops, the event focused on bridging the gap between academic learning and industry requirements by providing hands-on training in widely used industrial tools.`,
    additions: [
      "An 18-hour AutoCAD Plant 3D workshop covering software setup, P&ID drafting, 3D modeling, and plan extraction with 20 participants.",
      "An 18-hour CATIA workshop covering 2D and 3D modeling, assemblies, simulations, and technical drawings with 20 participants.",
    ],
  },

  {
    title: "Industrial Bootcamp 4.0 – Pillars of the Future",
    status: "Completed",
    image: "/images/activities/industrial-bootcamp-4.jpg",
    description: `The IEEE INSAT IAS Industrial Bootcamp 4.0 was a flagship event combining technical workshops, a conference, and a 24-hour hackathon focused on Industry 5.0 concepts. The bootcamp aimed to prepare participants for future industrial challenges by encouraging innovation, sustainability, and human-centered technological solutions.`,
    additions: [
      "Participants attended technical workshops and conferences led by industry professionals.",
      "A 24-hour hackathon challenged teams to develop Industry 5.0-oriented solutions.",
      "Winning teams were: 1st – Equipe Narr (AIgroFarm), 2nd – Sehla Yesser (EcoBank), 3rd – Blueprints (Hybrid Boat Motor).",
    ],
  },

  {
    title: "Study Trip 4.0: Stunas Industries Visit",
    status: "Completed",
    image: "/images/activities/stunas-visit.jpg",
    description: `As part of the Study Trip 4.0: ORIGINS initiative, IEEE INSAT IAS, in collaboration with IEEE IAS ISTIC SBC, organized an industrial visit to Stunas Industries. The visit aimed to provide students with direct exposure to industrial environments and manufacturing processes while strengthening their understanding of real-world engineering applications.`,
    additions: [
      "Participants explored manufacturing processes related to sandwich panels, cold rooms, industrial doors, and steel profiles.",
      "The visit combined technical discovery with team-building and educational activities.",
    ],
  },

  {
    title: "Bits for Bots 1.0",
    status: "Completed",
    image: "/images/activities/bits-for-bots.jpg",
    description: `Bits for Bots 1.0 was a long-term robotics program organized by IEEE RAS and IEEE INSAT IAS. Spanning two months, the initiative allowed participants to design, develop, and refine robotics projects under continuous mentorship, promoting technical growth, collaboration, and innovation.`,
    additions: [
      "Teams worked on robotics projects with regular mentoring sessions.",
      "The program emphasized practical implementation, problem-solving, and teamwork.",
    ],
  },

  {
    title: "IAS General Assembly 2025",
    status: "Completed",
    image: "/images/activities/ias-general-assembly.jpg",
    description: `The IAS General Assembly marked the beginning of a new mandate by officially introducing the new board members of IEEE INSAT IAS. The event served as a platform to present the chapter’s vision, objectives, and strategic plans, while strengthening communication and engagement with members.`,
    additions: [
      "New board members were officially introduced.",
      "Each member presented their vision and goals for the mandate.",
      "Planned activities and improvement strategies were shared with attendees.",
    ],
  },

  {
    title: "Summer School 8.0 – Workshop 1: Computer Vision",
    status: "Completed",
    image: "/images/activities/summer-school-cv.jpg",
    description: `This workshop, held as part of Summer School 8.0, introduced participants to the fundamentals of computer vision. The session combined theoretical explanations with practical demonstrations to help attendees understand image processing techniques and object recognition systems used in modern industrial and technological applications.`,
    additions: [
      "The workshop was delivered by Fedi Ben Hassouna.",
      "Included a live interactive demonstration and discussion of real-world limitations.",
    ],
  },

  {
    title: "Summer School 8.0 – Workshop 2: Lean Manufacturing",
    status: "Completed",
    image: "/images/activities/summer-school-lean.jpg",
    description: `The Lean Manufacturing workshop focused on introducing participants to lean principles as a strategic approach to improving industrial efficiency. The session emphasized waste reduction, process optimization, and continuous improvement through both theoretical insights and practical applications.`,
    additions: [
      "Presented by Mohamed Tayeb Samet.",
      "Included collaborative group exercises applying lean tools and methods.",
    ],
  },

  {
    title: "Industrial Visit to Safran Group",
    status: "Completed",
    image: "/images/activities/safran-visit.jpg",
    description: `The industrial visit to Safran Tunisia provided participants with valuable insights into aerospace manufacturing and advanced industrial operations. The visit aimed to familiarize students with large-scale industrial organization, production units, and real-world engineering practices within an international company.`,
    additions: [
      "General presentation of Safran Tunisia and its activities.",
      "Guided tours of the ETU and Power Units, including equipment and technical installations.",
    ],
  },

  {
    title: "Industrial Visit to Visteon",
    status: "Completed",
    image: "/images/activities/visteon-visit.jpg",
    description: `This industrial visit to Visteon focused on automotive electronics manufacturing and operational excellence. Participants gained insight into production workflows and continuous improvement practices used in modern industrial environments.`,
    additions: [
      "Introduction to Visteon and its industrial operations.",
      "Presentation of lean manufacturing concepts including Lean Light, 5S, and Kaizen.",
      "Hands-on exercises and a guided production site tour.",
    ],
  },

  {
    title: "CATIA Online Workshop",
    status: "Completed",
    image: "/images/activities/catia-workshop.jpg",
    description: `This beginner-friendly online CATIA workshop, organized by HLC Tech, aimed to introduce participants to computer-aided design fundamentals. The session focused on building a solid foundation in 2D and 3D modeling through guided instruction and practical demonstrations.`,
    additions: [
      "Covered CATIA interface, sketching, 3D part modeling, assemblies, and basic kinematic studies.",
      "Participants developed the ability to model and assemble components efficiently.",
    ],
  },

  //   {
  //     title: "SolidWorks Workshop – First Steps",
  //     status: "Completed",
  //     image: "/images/activities/solidworks-workshop.png",
  //     description: `The first session of the SolidWorks workshop series was designed to introduce participants to computer-aided design fundamentals while preparing them for the CSWA certification. The session adopted a structured and progressive approach, ensuring a strong technical foundation for future workshops and professional applications.`,
  //     additions: [
  //       "Organized by HLC Tech and presented by Chiheb El Aoun.",
  //       "Covered the SolidWorks interface, sketching principles, and essential part modeling.",
  //       "Included hands-on exercises with 15 participants, fostering interaction and applied learning.",
  //     ],
  //   },
];

export default activities;

// const activities = [
//     {
//         title: 'IAS Annual meeting',
//         status: 'Completed',
//         image: '/images/thisyear/iasAnnualMeeting2022.png',
//         description : `We had the honor to participate in IAS ANNUAL MEETING organized this year by IAS ENIT SBC and held in hotel yasmine hammamet . It was a 2 day summit which theme was “ automotive engineering “ `,
//         additions : [
//             `We had the chance to participate in the non technical challenge.`,
//             `Unfortunately , we didn’t make it to the finals but we were proud by our efforts and grateful for having such an incredible experience with such a great network. `,
//         ]
//     },
//     {
//         title: 'Summer School 5.0',
//         status: 'Completed',
//         image: '/images/thisyear/summerSchool.jpg',
//         description : `The fifth edition of ✨Summer School✨ was successfully held  😍. our two workshops : "AI in Industry" and "Introduction to electric car" had been a great success 🔥🔥thanks to the huge efforts of our officers💚, of our brilliant trainers💚 and thanks to the presence and motivation of our dear participants💚💚
//         we hope that you enjoyed this experience as much as we enjoyed having you with us✨💚`,
//     },
//     {
//         title: 'IEEE Day',
//         status: 'Completed',
//         image: '/images/thisyear/ieeeday.png',
//         description : "As usual in every IEEE DAY we have a stand in the hall were we can represent our chapter and let members know more about us. Our stand were very decorated and well presented. As program we make a games series and for the ones who win in all of them they can win a restaurant ticket valued 10 dinars from “LELLA”. The games series was contracted from 3 games : ",
//         additions: [
//             "- A loop game : the participants were supposed to pass the loop through the IAS shape without making contact . each participant had only 4 chances other wise he loose and doesn’t pass to the next game .",
//             "- An electric circuit game : the participant is supposed to correct the wrong placed electric composant to let the word IAS light with green light. These game is limited with a time and limited number of moves . if he loose he can’t pass to the last game.",
//             "- VR Game : the participant is supposed to watch a video projected with VR casque about some industrial tools and finally he should answer some questions about the industry . if he win he will have the restaurant ticket .",
//             "For the ones who doesn’t make it to the end they can have a sticker or a cake. And to pass from game to game they should roll the circle to have a gift or a punishment. These games and these brilliant ideas were suggested and made by our dearest members Nour Yazidi , Mohamed Bouchnek , Bilel khadhraoui , Edam Chaib and many others that were reward in the post of October family .",
//             "We had also an Instagram photobooth were our members had the joy to take photos and make a good memory of their participation. ",
//             "In the end of the day we have had three winners and many members who loved the atmosphere and decided to join us . we made together great memories. We have also win the badge of best games ever. We are so thankful to our members who have make that day even better"
//         ]
//     },
//     {
//         title: 'General Assembly ',
//         status: 'Completed',
//         image: ['/images/thisyear/general-assembly.png'],
//         description : "The IEEE IAS INSAT organized in the debut of the university year a general assembly to present their activities and vision to the members for this mandate 🔥💚.",
//         additions: [
//             "It's been a pleasure to see your enthousiasm and passion towards IAS 😍💚 in our first ✨ General Assembly in this year",
//             "We are eager to meet you again in our upcoming events 🔥 , so keep your spirits hight and let the adventure begin 🔥💚.",
//         ]
//     },
//     {
//         title: 'IAS International Annual Meeting 2022',
//         status: 'Completed',
//         image: ['/images/thisyear/iasAnnualMeeting2022.jpg'],
//         description : "Some of IEEE IAS INSAT SBC volunteers had the opportunity to represent our student branch chapter in the IAS  international  Annual meeting, happening in Detroit, Michigan, USA which was held in October ,2022 . ",
//         additions: [
//             `We’re also honored to tell you that we received 2 awards in this occasion which are “ the IAS Most impactful Webinar Contest 2021“ and “IAS Chapter Web Contest Winner 2022 “ `,
//         ]
//     },
//     {
//         title: 'Labview workshop ',
//         status: 'Completed',
//         image: ['/images/thisyear/labview.png'],
//         description : '"we rise by lifting others 💚" is what we chose to be our motto, and lifting others starts by sharing knowledge and enlightenment.',
//         additions: [
//             "That's why we present to you our first workshop 🔥, the inception of an outstanding journey  of erudition 🔥💚, presented to our members by the one and only ✨ Anis Rajhi ✨ , where they dive into LabVIEW world 💚💚.",
//             "Hope you all enjoyed our first workshop of the year . THE BEST IS YET TO COME 💚 .",
//         ]
//     },
//     {
//         title: 'Electrical Car',
//         status: 'OnGoing',
//         image: '/images/thisyear/electric-car.jpg',
//         description : "This year as the IAS INSAT Student chapter, we decide to implement our own project and do the conception of our electric car. In the first part, he focused on the importance of the electric car and it’s benefit in the real life. In fact, in these previous years, these cars becomes more and more used by people. he showed us the most bestselling of the electric car. In the second part, he focused on the structure of these cars and its functions. An electric car or battery-electric car is an automobile that is propelled by one or more electric motors, using energy stored in batteries. Compared to internal combustion engine (ICE) vehicles, electric cars are quieter, have no exhaust emissions, and lower emissions overall."
//     },

// ]

// export default activities ;
