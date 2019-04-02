const initialState = {
  projects: [
    {
      id: '1',
      title: 'sunt aut facere repellat provident',
      content: 'quia et suscipit suscipit recusandae consequuntur expedita'
    },
    {
      id: '2',
      title: 'qui est esse',
      content: 'est rerum tempore vitae sequi sint nihil reprehenderit'
    },
    {
      id: '3',
      title: 'ea molestias quasi exercitationem',
      content: 'et iusto sed quo iure voluptatem occaecati'
    }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT': {
      console.log('project created successfully', action.project);
    }
  }
  return state;
};

export default projectReducer;
