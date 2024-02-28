export default defineAppConfig({
  ui: {
    primary: 'green'
  },
  docus: {
    title: 'Quizat API: Unleashing Interactive Knowledge Adventures!',
    description: 'The ultimate solution for seamlessly integrating multiple-answer trivia questions into your applications! Unleash the power of engaging quizzes with our user-friendly API. Elevate your platform by integrating our API and let the quest for knowledge begin!',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    url: 'https://api.quizat.sd',
    socials: {
      twitter: 'QuizatPlatform',
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
  }
})
