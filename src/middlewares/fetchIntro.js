
const onFetchIntro = store => next => action =>{

    if(action.type !== 'FETCH_INTRO_DATA') return next(action)
    const JSONurl = `${process.env.PUBLIC_URL}/introduce.json`
    if(store.getState().introIsLoad){
        fetch(JSONurl,{
            method:'GET',
        })
        .then((response)=>{
            if(!response.ok) throw new Error(response.statusText)
            return response.json()
        })
        .then((data)=>{
            console.log(`onFetchIntro/`,data)
            const initData = data.intro.map(item=>{
                return Object.assign({},item)
            })
            
            return action.callback(initData,store.dispatch)
        })
        .catch(error=>{throw new Error(error.message)})
    }
    

}
export default onFetchIntro