function loadLibraries() {
    Qva.LoadCSS("/QvAJAXZfc/QvsViewClient.aspx?public=only&name=Extensions/SwipeVarChanger/swiper.min.css");
    Qva.LoadCSS("/QvAJAXZfc/QvsViewClient.aspx?public=only&name=Extensions/SwipeVarChanger/main.css");
    Qva.LoadScript("/QvAJAXZfc/QvsViewClient.aspx?public=only&name=Extensions/SwipeVarChanger/swiper.min.js", init);
}

var qvDoc = Qv.GetCurrentDocument();

function init(){
    Qv.AddExtension("SwipeVarChanger",
        function() {
           var _this = this;
           var objName = this.Layout.ObjectId;
           if(!_this[objName]){
               var swiperContainer = document.createElement("div");
               swiperContainer.setAttribute("class","swiper-container");
               _this.Element.appendChild(swiperContainer);
               var swiperWrapper = document.createElement("div");
               swiperWrapper.setAttribute("class","swiper-wrapper");
               swiperContainer.appendChild(swiperWrapper);
               var div1 = document.createElement("div");
               div1.setAttribute("class","div1");
               swiperWrapper.appendChild(div1);
               var div2 = document.createElement("div");
               div2.setAttribute("class","div2");
               swiperWrapper.appendChild(div2);
               _this[objName] = {};
               _this[objName].curIndex = 0;
               _this[objName].swiper = new Swiper ('.swiper-container', {
                   direction: 'horizontal',
                   autoplay: false,
                   loop: true,
                   on: {
                       slideNextTransitionStart: function () {
                           qvDoc.SetVariable(_this[objName].varName,_this[objName].varValues[_this[objName].curIndex]);
                           if(_this[objName].curIndex === _this[objName].varValues.length-1){
                               _this[objName].curIndex = 0;
                           }else{
                               _this[objName].curIndex++;
                           }
                       },
                       slidePrevTransitionStart: function () {
                           qvDoc.SetVariable(_this[objName].varName,_this[objName].varValues[_this[objName].curIndex]);
                           if(_this[objName].curIndex === 0){
                               _this[objName].curIndex = _this[objName].varValues.length-1;
                           }else{
                               _this[objName].curIndex--;
                           }
                       }
                   }
               });
           }
            _this[objName].varName = this.Layout.Text0.text;
            _this[objName].varValues = this.Layout.Text1.text.split(',');
        });
}

loadLibraries();
