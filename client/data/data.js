const posts = [
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
  	body:"Has anyone ever been to......",
  	username:"Jada",
    replies: [
      {
        body: "Israel is my fave!",
        username: "Suellen"
      }
    ],
    createdTimestamp: "11/21/18 12:32am"
  },
  {
    id: 3,
  	title: "Personal Question",
    body:"Personal question.",
    username:"Dinah C",
    replies: [],
    createdTimestamp: "11/19/18 11:23pm"
  }
];

export {posts};