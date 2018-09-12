export const priceSelect = {
    all:'全部展覽',
    pay:'須購買票券展覽',
    free:'免費展覽',
}
export const areaRange = {
    all:'所有地區',
    north:'北部展覽',
    middle:'中部展覽',
    south:'南部展覽',
    east:'東部及離島展覽',
}
export const cityRange = {
    all:["不分區"],
    north:["全縣市","台北","新北","基隆","桃園","宜蘭","新竹"],
    middle:["全縣市","台中","南投","彰化","雲林","苗栗"],
    south:["全縣市","台南","嘉義","高雄","屏東"],
    east:["全縣市","花蓮","台東","金門","澎湖","馬祖"],
}
export function priceFormat(value){
    let initPrice = value;
    let newPrice = initPrice.replace(/,|;/g,'/')
    return newPrice;
}