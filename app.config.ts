export default defineAppConfig({
  ui: {
    primary: 'green'
  },
  docus: {
    title: 'Quizat API: Unleashing Interactive Knowledge Adventures!',
    description: 'The ultimate solution for seamlessly integrating multiple-answer trivia questions into your applications! Unleash the power of engaging quizzes with our user-friendly API. Elevate your platform by integrating our API and let the quest for knowledge begin!',
    image: 'https://res.cloudinary.com/quizat/image/upload/v1709252352/Quizat_API_poster_6_cr0ddm.png',
    url: 'https://api.quizat.sd',
    socials: {
      twitter: 'QuizatPlatform',
      github: 'AnasAlwaleed00',
    },
    github: {
      dir: '/',
      branch: 'main',
      repo: 'quizat-api-docs',
      owner: 'anasalwaleed77',
      edit: false
    },
    layout: 'default',
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: '',
        text: 'Developed by 249Tech',
        href: '',
      },
    }
  }
})
