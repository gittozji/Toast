var queue = new Array();//ʹ��һ�����������toast��Ϣ
var flag = false;//Ϊ��ʹdoLoopͬһʱ���ֻһ��ʵ������

function showToast(hint){
	
		queue.unshift(hint);//��Ϣ�����
		doLoop();
    
}

function doLoop(){
		if(flag == false){
				flag = true;
				if(queue.length != 0){
						var toastdiv = "<div id='comToastBox'"
		        +"class='toast-div'>"
		        +"<p class='toast-p'>"+queue.pop()+"</p>"+"</div>";
				    $(document.body).append(toastdiv);
				    $("#comToastBox").animate({top:'10%', opacity:'1.0'},300)
				        .delay(2000)
				        .animate({top:'5%',opacity:'0.5'},300,function(){$("#comToastBox").remove();flag = false;doLoop();});
				}
				else{
						flag = false;
				}
				
		}
}