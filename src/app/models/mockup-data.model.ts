export interface LatestArticle {
  id: number;
  title: string;
  date: string;
  img: string;
}

export const latestarticles = [
  {
    id: 1,
    title: 'Far far away, behind the word mountains',
    date: 'August 15, 2019',
    img: 'tree.jpg',
  },

  {
    id: 2,
    title: 'The spectacle before us was indeed sublimes',
    date: 'July 26, 2019',
    img: 'man.jpg',
  },

  {
    id: 3,
    title: 'Musical improvisation is the spontaneous music',
    date: ' August 15, 2019',
    img: 'woman.jpg',
  },
];

export interface TagCloud {
  id: number;
  text: string;
  icon: string;
}
export const tagclouds = [
  {
    id: 1,
    text: 'Health',
    icon: '#',
  },
  {
    id: 2,
    text: 'Lifestyle',
    icon: '#',
  },

  {
    id: 3,
    text: 'Music',
    icon: '#',
  },

  {
    id: 4,
    text: 'Technology ',
    icon: '#',
  },

  {
    id: 5,
    text: 'Travel',
    icon: '#',
  },

  {
    id: 6,
    text: 'Video',
    icon: '#',
  },
];

export interface Follow {
  id: number;
  icon: string;
  classIconOutLine: string;
  classIconBackGround: string;
}
export const follows = [
  {
    id: 1,
    icon: 'fa-brands fa-twitter',
    classIconOutLine: 'followme-tag-twitter',
    classIconBackGround: 'twitter-background',
  },
  {
    id: 2,
    icon: 'fa-brands fa-facebook-f',
    classIconOutLine: 'followme-tag-facebook',
    classIconBackGround: 'facebook-background',
  },

  {
    id: 3,
    icon: 'fa-brands fa-instagram',
    classIconOutLine: 'followme-tag-instagram',
    classIconBackGround: 'instagram-background',
  },

  {
    id: 4,
    icon: 'fa-solid fa-rss',
    classIconOutLine: 'followme-tag-rss',
    classIconBackGround: 'rss-background',
  },
];

export interface Social {
  icon: string;
  style: string;
}

export interface AboutInfo {
  id: number;
  avatar: string;
  name: string;
  job: string;
  text: string;
  link: Social[];
}

export const aboutinfos = [
  {
    id: 1,
    avatar: 'avatar.jpg',
    name: 'Jonathan Doe',
    job: 'Founder & Editor',
    text: 'Hello! My name is Jonathan Doe working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system. ',
    link: [
      {
        icon: 'fa-brands fa-twitter',
        style: 'color: #1da1f2',
      },
      {
        icon: 'fa-brands fa-facebook',
        style: 'color: #175beb',
      },
      {
        icon: 'fa-solid fa-earth-americas',
        style: 'color: #ff4c60',
      },
    ],
  },
];

export interface Card {
  id: number;
  title: string;
  date: string;
  img: string;
  class: string;
  text: string;
  iconTag: string;
  tagOne: string;
  tagTwo: string;
}

export const cards = [
  {
    id: 1,
    title: 'The spectacle before us was indeed sublime',
    date: 'August 15, 2019',
    img: 'tree.jpg',
    class: 'small-man',
    text: 'Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that…',
    avatar: 'avatar.jpg',
    name: 'Mary Buzard ',
    iconTag: '#',
    tagOne: 'Lifestyle',
    tagTwo: 'Music',
  },

  {
    id: 2,
    title: 'The spectacle before us was indeed sublimes',
    date: 'July 26, 2019',
    img: 'man.jpg',
    class: 'big-man',
    text: 'Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that…',
    avatar: 'avatar.jpg',
    name: 'Mary Buzard ',
    iconTag: '#',
    tagOne: 'Lifestyle',
    tagTwo: 'Music',
  },

  {
    id: 3,
    title: 'Musical improvisation is the spontaneous music',
    date: ' August 15, 2019',
    img: 'woman.jpg',
    class: 'small-man',
    text: 'Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that…',
    avatar: 'avatar.jpg',
    name: 'Mary Buzard ',
    iconTag: '#',
    tagOne: 'Lifestyle',
    tagTwo: 'Music',
  },
  {
    id: 4,
    title: 'Far far away, behind the word mountains',
    date: 'August 15, 2019',
    img: 'tree.jpg',
    class: 'small-man',
    text: 'Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that…',
    avatar: 'avatar.jpg',
    name: 'Mary Buzard ',
    iconTag: '#',
    tagOne: 'Lifestyle',
    tagTwo: 'Music',
  },

  {
    id: 5,
    title: 'The spectacle before us was indeed sublimes',
    date: 'July 26, 2019',
    img: 'man.jpg',
    class: 'big-man',
    text: 'Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that…',
    avatar: 'avatar.jpg',
    name: 'Mary Buzard ',
    iconTag: '#',
    tagOne: 'Lifestyle',
    tagTwo: 'Music',
  },

  {
    id: 6,
    title: 'Musical improvisation is the spontaneous music',
    date: ' August 15, 2019',
    img: 'woman.jpg',
    class: 'small-man',
    text: 'Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that…',
    avatar: 'avatar.jpg',
    name: 'Mary Buzard ',
    iconTag: '#',
    tagOne: 'Lifestyle',
    tagTwo: 'Music',
  },
  {
    id: 7,
    title: 'Far far away, behind the word mountains',
    date: 'August 15, 2019',
    img: 'tree.jpg',
    class: 'small-man',
    text: 'Welcome, it’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial getting started posts that…',
    avatar: 'avatar.jpg',
    name: 'Mary Buzard ',
    iconTag: '#',
    tagOne: 'Lifestyle',
    tagTwo: 'Music',
  },
];
