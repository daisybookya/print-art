const FETCH_IMG_LIST = 'FETCH_IMG_LIST'
const FETCH_EXHI_LIST = 'FETCH_EXHI_LIST'
const FETCH_INTRO_DATA = 'FETCH_INTRO_DATA'
const INIT_IMG_LIST  = 'INIT_IMG_LIST'
const INIT_EXHI_LIST  = 'INIT_EXHI_LIST'
const INIT_INTRO_DATA  = 'INIT_INTRO_DATA'
const LOADING_IMG = 'LOADING_IMG'
const LOADING_INTRO = 'LOADING_INTRO'
const LOADING_EXHI = 'LOADING_EXHI'
const EXHI_LIST_TYPE = 'EXHI_LIST_TYPE' 
const IMG_LIST_PAGE = 'IMG_LIST_PAGE' 

//introduce
export const fetchIntroData = () =>{
    return{
        type:FETCH_INTRO_DATA,
        callback:(data:Object,dispatch:Function)=>{
            dispatch(initIntroData(data));
            dispatch(isLoadedIntro(false));
        }
    }
}
export const initIntroData = (data:Object)=>{
    return{
        type:INIT_INTRO_DATA,
        data
    }
}
export const isLoadedIntro = (done:boolean) =>{
    return{
        type:LOADING_INTRO,
        done
    }
}

//Domestic Exhibition Information
export const fetchExhiData = () =>{
    return{
        type:FETCH_EXHI_LIST,
        callback:(data:Object,dispatch:Function)=>{
            dispatch(initExhiData(data));
            dispatch(isLoadedExhi(false));
        }
    }
}
export const initExhiData = (data:Object)=>{
    return{
        type:INIT_EXHI_LIST,
        data
    }
}
export const isLoadedExhi = (done:boolean) =>{
    
    return{
        type:LOADING_EXHI,
        done
    }
}
export const selectExhiType = (exhiType:string) =>{
    return{
        type:EXHI_LIST_TYPE,
        exhiType
    }
}
//image exhibition
export const fetchImgData = (loadPage:number) =>{
    return{
        type:FETCH_IMG_LIST,
        loadPage,
        callback:(data:Object,dispatch:Function)=>{
            dispatch(initImgData(data));
            dispatch(isLoadedImg(false));
        }
    }
}
export const initImgData = (data:Object)=>{
    return{
        type:INIT_IMG_LIST,
        data
    }
}
export const isLoadedImg = (done:boolean) =>{
    return{
        type:LOADING_IMG,
        done
    }
}
export const loadImgPage = (page:number) =>{
    return{
        type:IMG_LIST_PAGE,
        page
    }
}