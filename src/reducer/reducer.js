import {combineReducers} from "redux";

export function introData(state:Object = [],action:Object){
    switch(action.type){
        case 'INIT_INTRO_DATA':
            return [...action.data]
        default:
            return state;
    }
}
export function introIsLoad(state=true,action:Object){
    switch (action.type){
        case 'LOADING_INTRO':
            return action.done
        
        default:
        return state;
    }
}

//exhibition information list
export function inforData(state:Object = [],action:Object){
    switch(action.type){
        case 'INIT_EXHI_LIST':
            return [...action.data]
        default:
            return state;
    }
}
export function inforIsLoad(state=true,action:Object){
    switch (action.type){
        case 'LOADING_EXHI':
            return action.done
        
        default:
        return state;
    }
}
export function exhiListType(state='all',action:Object){
    switch (action.type){
        case 'EXHI_LIST_TYPE':
            return action.exhiType
        
        default:
        return state;
    }
}
//img list exhibition
export function imgListData(state:Object = [],action:Object){
    switch(action.type){
        case 'INIT_IMG_LIST':
            const addItem = [...state];
            const newData = addItem.concat(action.data)
            return newData
        default:
            return state;
    }
}
export function imgListIsLoad(state=true,action:Object){
    switch (action.type){
        case 'LOADING_IMG':
            return action.done
        
        default:
        return state;
    }
}
export function imgPage(state=1,action:Object){
    switch (action.type){
        case 'IMG_LIST_PAGE':
            return action.page
        
        default:
        return state;
    }
}
const reducer = combineReducers({
    introData,
    introIsLoad,
    inforData,
    inforIsLoad,
    exhiListType,
    imgListData,
    imgListIsLoad,
    imgPage
});
export default reducer;