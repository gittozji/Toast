/*Toast控件类，使用了单例模式*/
function ToastClass(){
	if(ToastClass.instance !== undefined){
		return ToastClass.instance;
	}
	ToastClass.instance = this;
	this.toastQueue = new Array();//使用一个队列来存放toast信息
	this.toastFlag = false;//为了使doLoop同一时间段只一个实例工作
	
	this.showToast = function(hint){
		this.toastQueue.unshift(hint);
		doLoop(this);
	}
	
	var doLoop = function(_this){
		if(_this.toastFlag == false){
					_this.toastFlag = true;
					if(_this.toastQueue.length != 0){
							var toastdiv = "<div id='mmdToastDiv'"
					+"class='mmd-toast-div'>"
					+"<p class='mmd-toast-p'>"+_this.toastQueue.pop()+"</p>"+"</div>";
						$(document.body).append(toastdiv);
						$("#mmdToastDiv").animate({top:'10%', opacity:'1.0'},300)
							.delay(2000)
							.animate({top:'5%',opacity:'0.5'},300,function(){$("#mmdToastDiv").remove();_this.toastFlag = false; doLoop(_this);});
					}
					else{
							_this.toastFlag = false;
					}
					
			}
	}
}
/*Toast控件类对html的接口*/
function mmdShowToast(hint){
	toast = new ToastClass();
	toast.showToast(hint);
}