//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    activeIndex: '0',
    planList: [],
    planTxt:''
  },
  choicePlan(event) {
    let currentTarget = event.currentTarget;
    let dataset = currentTarget.dataset;
    let index = dataset.index;
    let planList = this.data.planList;
    let attr = 'planList['+index+'].isCheck';
    this.setData({
      [attr]: true
    })
  },
  changePlanTxt(event){
    console.log(event);
    let that = this
    let detail = event.detail;
    let value = detail.value;
    
    if(value !== ''){
      let obj = {
        value:value,
        isCheck:false
      }
      let isDuplication = that. deDuplication(obj)
      if(!isDuplication){
        this.setData({
          planList: that.data.planList.concat(obj)
        })
      }
    }
  },
  deDuplication(a){
    let flag = false;
    for(let item of this.data.planList){
      if(a.value === item.value){
        flag = true;
      }
    }
    return flag
  },
  addPlan(event) {
    
  }
})
