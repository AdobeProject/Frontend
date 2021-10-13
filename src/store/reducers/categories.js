const initialState = {
  categories: [
    {
      title: "Development",
      subCategories: [
        "Web Development",
        "Mobile Development",
        "Game  Development",
        "No-code Development",
      ],
    },
    {
      title: "Language",
      subCategories: ["English", "Chinese", "Russian", "Armenian"],
    },
    {
      title: "Business",
      subCategories: [
        "Managment",
        "SSM",
        "Projwct managmnet",
        "Other Business",
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
