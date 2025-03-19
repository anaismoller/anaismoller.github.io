// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "My publications, in reverse chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "I am a big fan of open science, open source software and open research",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-fink-has-been-selected-to-process-the-vera-c-rubin-observatory-lsst-alert-stream-for-its-10-years-of-operation-fink-will-enable-transient-science-in-this-big-data-era-including-sne-ia-cosmology-and-beyond",
          title: 'Fink has been selected to process the Vera C. Rubin Observatory LSST alert...',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-with-a-discovery-early-career-research-award-decra-starting-2023-i-will-be-working-at-swinburne-on-transient-science-and-machine-learning-with-fink-i-will-be-soon-recruiting-students-including-a-phd",
          title: 'I have been awarded with a Discovery Early Career Research Award (DECRA) starting...',
          description: "",
          section: "News",},{id: "news-we-have-published-the-tighest-constraints-on-dark-energy-with-sne-ia-to-date-with-des-data-and-my-ml-algorithm-supernnova",
          title: 'We have published the tighest constraints on Dark Energy with SNe Ia to-date...',
          description: "",
          section: "News",},{id: "news-fink-is-going-to-brazil-may-6-10-2024-rio-de-janeiro-finkbr",
          title: 'Fink is going to Brazil! May 6-10 2024 Rio de Janeiro FinkBR.',
          description: "",
          section: "News",},{id: "news-happy-to-share-that-i-have-been-awarded-the-2024-asia-pacific-women-in-ai-prize-in-the-space-category-for-my-work-in-astronomy-and-ai",
          title: 'Happy to share that I have been awarded the 2024 Asia-Pacific Women in...',
          description: "",
          section: "News",},{id: "news-happy-to-share-that-i-am-now-an-ongoing-senior-lecturer-and-researcher-at-swinburne-university-of-technology",
          title: 'Happy to share that I am now an ongoing Senior Lecturer and Researcher...',
          description: "",
          section: "News",},{id: "projects-des-amp-ozdes",
          title: 'DES &amp;amp; OzDES',
          description: "unveiling Dark Energy with SNe Ia",
          section: "Projects",handler: () => {
              window.location.href = "/projects/des.html";
            },},{id: "projects-deeper-wider-faster",
          title: 'Deeper Wider Faster',
          description: "multi-wavelength fast-transients",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dwf.html";
            },},{id: "projects-fink-broker",
          title: 'Fink broker',
          description: "empowering transient science in the big data era",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fink.html";
            },},{id: "projects-rubin-lsst",
          title: 'Rubin LSST',
          description: "world&#39;s largest optical survey",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lsst.html";
            },},{id: "projects-supernnova",
          title: 'Supernnova',
          description: "Open source photometric classification",
          section: "Projects",handler: () => {
              window.location.href = "/projects/supernnova.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6D%6F%6C%6C%65%72@%73%77%69%6E.%65%64%75.%61%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/anaismoller", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8211-8608", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
