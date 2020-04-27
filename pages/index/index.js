//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    activeIndex: '0',
    planList: [],
    incompleteList:[],
    completeList:[],
    showList:[],
    operateTab:['全部','待办','完结'],
    activeIndex:0,
    planTxt:''
  },
  showPlist(event){
    let index = event.currentTarget.dataset.index;
    let arr = []
    if(index === 0){
      arr = this.data.planList
    }else if(index === 1){
      arr = this.data.planList.filter(function(item,index){
        return !item.isCheck
      })
    }else {
      arr = this.data.planList.filter(function(item,index){
        return item.isCheck
      })
    }
    this.setData({
      planTxt:"",
      activeIndex:index,
      showList:arr
    })
  },
  choicePlan(event) {
    let currentTarget = event.currentTarget;
    let dataset = currentTarget.dataset;
    let index = dataset.index;
    let isCheck = dataset.isCheck;
    let id = dataset.id
    console.log(index,isCheck,id);
    for(let i = 0 ;i < this.data.planList.length;i++){
      if(this.data.planList[i].id === id){
        let attr = 'planList['+i+'].isCheck';
        this.setData({
          [attr]:!isCheck
        })
      }
    }
    this.data.incompleteList = this.data.planList.filter(function(item,index){
      return !item.isCheck
    })
    this.data.completeList = this.data.planList.filter(function(item,index){
      return item.isCheck
    })
    if(this.data.activeIndex === 0){
      this.setData({
        showList:this.data.planList
      })
    }else if(this.data.activeIndex === 1){
      this.setData({
        showList:this.data.incompleteList
      })
    }else{
      this.setData({
        showList:this.data.completeList
      })
    }
    console.log(this.data);
  },
  changePlanTxt(event){
    console.log(event);
    let that = this;
    let detail = event.detail;
    let value = detail.value;
    if(value !== ''){
      let obj = {
        id:new Date().getTime(),
        value:value,
        isCheck:false
      };
      this.setData({
        planTxt:value,
        planList: that.data.planList.concat(obj)
      })
      this.data.incompleteList = this.data.planList.filter(function(item,index){
        return !item.isCheck
      })
      this.data.completeList = this.data.planList.filter(function(item,index){
        return item.isCheck
      })
      if(this.data.activeIndex === 0){
        this.setData({
          showList:this.data.planList
        })
      }else if(this.data.activeIndex === 1){
        this.setData({
          showList:this.data.incompleteList
        })
      }
      
    }
  },
  delPlan(event){
    let index = event.currentTarget.dataset.index
    this.data.planList.splice(index,1);
    this.data.incompleteList = this.data.planList.filter(function(item,index){
      return !item.isCheck
    })
    this.data.completeList = this.data.planList.filter(function(item,index){
      return item.isCheck
    })
    if(this.data.activeIndex === 0){
      this.setData({
        showList:this.data.planList
      })
    }else if(this.data.activeIndex === 1){
      showList:this.data.incompleteList
    }else{
      showList:this.data.completeList
    }
  },
  clearPlan(){
    this.setData({
      planList:[],
      showList:[],
      incompleteList:[],
      completeList:[]
    })
  }
})
