const initialState = {
  projects: []
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT': {
      console.log('project created successfully: ', action.project);
      return state;
    }
    case 'CREATE_PROJECT_ERROR': {
      console.log('an error occured: ', action.err);
      return state;
    }
    default:
      return state;
  }
};

export default projectReducer;
