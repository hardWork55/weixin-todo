Component({
  properties:{
    background:{
      type:String,
      value:'transparent'
    },
    color:{
      type:String,
      value:'rgba(255,255,255,1)'
    },
    titleText:{
      type:String,
      value:'导航栏'
    },
    titleImg:{
      type:String,
      value:''
    },
    backIcon:{
      type:String,
      value:''
    },
    homeIcon:{
      type:String,
      value:''
    },
    fontSize:{
      type:String,
      value:16
    },
    iconHeight:{
      type:Number,
      value:19
    },
    iconWidth:{
      type:Number,
      value:58
    }
  },
  data:{

  },
  lifetimes:{
    //生命周期函数，可以为奇函数，或一个在methods段中定义的方法名
    created:function(){
      console.log('lifetimes created',this);
    },
    attached:function(){
      console.log('lifetimes attached',this);
      this.setNavSize();
      this.setStyle()
    },
    moved:function(){
      console.log('lifetimes moved',this)
    },
    detached:function(){
      console.log('lifetimes detached',this)
    }
  },
  pageLifetimes:{
    //组件所在页面的生命周期
    show:function(){
      console.log('页面被展示')
    },
    hide:function(){
      console.log('页面被隐藏')
    },
    resize:function(){
      console.log('页面尺寸变化')
    }

  },
  methods:{
    setNavSize:function(){
      var that = this,
          sysInfo = wx.getSystemInfoSync(),
          statusHeight = sysInfo.statusBarHeight,
          isIOS = sysInfo.system.indexOf('IOS') > 1,
          navHeight;
          console.log(sysInfo)
          if(!isIOS){
            navHeight = 48;
          }else{
            navHeight = 44
          }
          that.setData({
            status:statusHeight,
            navHeight:navHeight
          })
    },
    setStyle:function(){
      var that = this,
      containerStyle,
      textStyle,
      iconStyle;
      containerStyle = [
        'background:' + that.data.background
      ].join(';');
      textStyle = [
        'color:'+ that.data.color,
        'font-size:' + that.data.fontSize + 'px'
      ].join(";");
      iconStyle = [
        'width:' +  that.data.iconWidth + 'px',
        'height:' + that.data.iconHeight + 'px'
      ].join(';');
      that.setData({
        containerStyle:containerStyle,
        textStyle:textStyle,
        iconStyle:iconStyle
      })
    }
  }
})