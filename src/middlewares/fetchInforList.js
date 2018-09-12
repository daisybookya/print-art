
const onFetchInformation = store => next => action =>{

    if(action.type !== 'FETCH_EXHI_LIST') return next(action)
    
    const JSONurl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6"
    
    if(store.getState().inforIsLoad){
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
            //console.log(`onFetchInformation 1/`,initData)
            return action.callback(initData,store.dispatch)
        })
        .catch(error=>{throw new Error(error.message)})
    }
    

}
export default onFetchInformation