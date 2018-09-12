
const onFetchImgList = store => next => action =>{

    if(action.type !== 'FETCH_IMG_LIST') return next(action)
    let page = store.getState().imgPage;
    if(action.loadPage !== undefined){
        page = action.loadPage;
    }

    const JSONurl = `https://www.rijksmuseum.nl/api/en/collection?p=${page}&ps=15&key=YN96X3Uh&format=json&f.principalMakers.name.sort=Katsushika%20Hokusai`
    //const JSONurl = "http://localhost:5555/posts"
    if(store.getState().imgListIsLoad || action.loadPage !== undefined){

        fetch(JSONurl,{
            method:'GET',
        })
        .then((response)=>{
            if(!response.ok) throw new Error(response.statusText)
            return response.json()
        })
        .then((data)=>{
            //console.log(`onFetchInformation 1/`,data)
            const initData = data.artObjects.map(item=>{
                return Object.assign({},item)
            })
            
            return action.callback(initData,store.dispatch)
        })
        .catch(error=>{throw new Error(error.message)})
    
    }
}
export default onFetchImgList