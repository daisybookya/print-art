
const onFetchIntro = store => next => action =>{

    if(action.type !== 'FETCH_INTRO_DATA') return next(action)
    const JSONurl = "http://localhost:5555/intro"

    if(store.getState().introIsLoad){
        fetch(JSONurl,{
            method:'GET',
        })
        .then((response)=>{
            if(!response.ok) throw new Error(response.statusText)
            return response.json()
        })
        .then((data)=>{
            const initData = data.map(item=>{
                return Object.assign({},item)
            })
            console.log(`onFetchIntro/`,initData)
            return action.callback(initData,store.dispatch)
        })
        .catch(error=>{throw new Error(error.message)})
    }
    

}
export default onFetchIntro