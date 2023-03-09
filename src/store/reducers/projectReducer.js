const initState ={
    projects: [
        {id:'1', title: 'Gold mine', content: 'lorem nwa'},
        {id:'2', title: 'Gold mine too', content: 'lorem nwa'},
        {id:'3', title: 'Gold time', content: 'lorem nwa'}
    ]
}

const projectReducer = (state = initState,action) =>{
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer