const initialState = {
  categories: [
    {
      title: "Development",
      subCategories: [
        {
          title: "Web Development",
          id: 1
        },
        {
          title: "Mobile Development",
          id: 2
        },
        {
          title: "Game  Development",
          id: 3
        },
        {
          title: "No-code Development",
          id: 4
        },
      ],
    },
    {
      title: "Language",
      subCategories: [
        {
          title: "English",
          id: 5
        },
        {
          title: "Chinese",
          id: 6
        }, {
          title: "Russian",
          id: 7
        }, {
          title: "Armenian",
          id: 8
        }],
    },
    {
      title: "Business",
      subCategories: [
        {
          title: "Managment",
          id: 9
        },
        {
          title: "SSM",
          id: 10
        },
        {
          title: "Project managmnet",
          id: 11
        },
        {
          title: "Other Business",
          id: 12
        },
      ],
    },
  ],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default categoriesReducer;
