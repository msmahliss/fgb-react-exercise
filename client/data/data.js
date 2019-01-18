const samplePosts = [
  {
    id: 1,
  	title: "Recent Work",
  	body:"Brag here. Would love feedback on this project.",
  	username:"Mars31",
    replies: [],
    createdTimestamp: "11/22/18 3:01pm"
  },
  {
    id: 2,
  	title: "Travel?",
  	body:"Words Words Words Words Words Words Words Words Words Words Words Words Words Words Words ",
  	username:"Jada",
    replies: [
      {
        id: 1,
        body: "Israel is my fave!",
        username: "Suellen"
      }
    ],
    createdTimestamp: "11/21/18 12:32am"
  },
  {
    id: 3,
  	title: "Personal Question",
    body:"This is a personal question.",
    username:"Dinah C",
    replies: [
      {
        id: 1,
        body: "Personal Answer 1",
        username: "Lane123"
      },
      {
        id: 2,
        body: "Personal Answer 2",
        username: "Vitra"
      }

    ],
    createdTimestamp: "11/19/18 11:23pm"
  }
];

export {samplePosts};