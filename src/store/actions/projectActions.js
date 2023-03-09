export const createProject = (project) =>{
    return (dispatch,getState) =>{
        // make asynch call
        dispatch({type: 'CREATE_PROJECT', project})
    }
}