//翻一翻中的方法
function changepic(){
	var num=Math.random();
	num=Math.ceil(num*9);//1-9
	//document.getElementById("back"+"1").src="images/maotou2.png";
	for(i=1;i<=9;i++){
		if(i==num){
			document.getElementById("back"+i.toString()).src="images/a2.gif";
		}else{
			document.getElementById("back"+i.toString()).src="images/maotou1.png";
		}
	}
}
function fan(){
	
	document.getElementById("picbox1").style.transform='rotate(7deg)';
	alert("凡成功了")
}


function fanhuizhuhuichang(){
			
			
			if(url.indexOf("?")!=-1){
				window.location.href="index.html"+"?name="+arr;
				window.event.returnValue=false;
			}else
			{
				window.location.href="index.html";
				window.event.returnValue=false;
			}
			}
		
//首页的方法
function yanchanghui(){
		/*var user=document.getElementById("user").value;*/
		/*alert("欢迎您,"+user);*/
		if(url.indexOf("?")!=-1){
			window.location.href="yanchanghui.html"+"?name="+arr;
			window.event.returnValue=false;
		}else
		{
			window.location.href="yanchanghui.html";
			window.event.returnValue=false;
		}
		
	}
function fangyingting(){
	if(url.indexOf("?")!=-1){
		window.location.href="fangyingting.html"+"?name="+arr;
		window.event.returnValue=false;
	}else
	{
		window.location.href="fangyingting.html";
		window.event.returnValue=false;
	}
}
function tinggewyy(){
			/*var user=document.getElementById("user").value;*/
			/*alert("欢迎您,"+user);*/
			window.open("https://music.163.com/#/artist?id=1050282");
		
		}
function quweibo(){
			
			window.open("https://weibo.com/u/3908615569?tabtype=home");
			
		}
function fanyifan(){
			/*var user=document.getElementById("user").value;*/
			/*alert("欢迎您,"+user);*/
			if(url.indexOf("?")!=-1){
				window.location.href="fanyifan.html"+"?name="+arr;
				window.event.returnValue=false;
			}else
			{
				window.location.href="fanyifan.html";
				window.event.returnValue=false;
			}
			
		}
function dawenti(){
			/*var user=document.getElementById("user").value;*/
			/*alert("欢迎您,"+user);*/
			if(url.indexOf("?")!=-1){
				window.location.href="dawenti.html"+"?name="+arr;
				window.event.returnValue=false;
			}else
			{
				window.location.href="dawenti.html";
				window.event.returnValue=false;
			}
			
		}
//登陆页面的方法
function denglu(){
				var user=document.getElementById("user").value;
				
				if(user!=""){
					alert("欢迎您,"+user);
					window.location.href="index.html"+"?name="+user;
					window.event.returnValue=false;
				}else{
					alert("账号不能为空或者空格")
					
				}
				
			}
//演唱会的核心功能 精简想法设计文件操作 待定
function one(){
			document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV1Nu41127b8?p=2&spm_id_from=pageDriver'"+"style='width: 750px;height: 550px;'"+"></iframe>";
			}
		function two(){
			document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV1xa4y1W7gt?spm_id_from=333.337.search-card.all.click'"+"style='width: 750px;height: 550px;'"+"></iframe>";
			}
		function three(){
			document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV1Rq4y1B7ks?spm_id_from=333.337.search-card.all.click'"+"style='width: 750px;height: 550px;'"+"></iframe>";
			}
			function four(){
				document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV1ap411o7hs?spm_id_from=333.337.search-card.all.click'"+"style='width: 750px;height: 550px;'"+"></iframe>";
				}
			function five(){
				document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV1BE411q7hp?spm_id_from=333.337.search-card.all.click'"+"style='width: 750px;height: 550px;'"+"></iframe>";
				}
			function six(){
							document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV1d341147W8?spm_id_from=333.337.search-card.all.click'"+"style='width: 750px;height: 550px;'"+"></iframe>";
							}
			function seven(){
			
							document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV1G54118715?spm_id_from=333.337.search-card.all.click'"+"style='width: 750px;height: 550px;'"+"></iframe>";
			
							}
			function eight(){
				document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV1a5411x7V1?spm_id_from=333.337.search-card.all.click'"+"style='width: 750px;height: 550px;'"+"></iframe>";
				}
			function nine(){
				document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV1yW411575u?spm_id_from=333.337.search-card.all.click'"+"style='width: 750px;height: 550px;'"+"></iframe>";}
			function ten(){
				document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV1Bx411Q7Fh?spm_id_from=333.337.search-card.all.click'"+"style='width: 750px;height: 550px;'"+"></iframe>";}
			function eleven(){
							document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV1Kk4y1k7SQ?spm_id_from=333.337.search-card.all.click'"+"style='width: 750px;height: 550px;'"+"></iframe>";}
			function twelve(){
				document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV1Rt411B7c9?spm_id_from=333.337.search-card.all.click'"+"style='width: 750px;height: 550px;'"+"></iframe>";}
			function thirteen(){
				document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV1S64y1U7YE?spm_id_from=333.337.search-card.all.click'"+"style='width: 750px;height: 550px;'"+"></iframe>";}
			function fourteen(){
				document.getElementById('desdiv').innerHTML = "<iframe src='https://www.bilibili.com/video/BV11M4y1P7e3?spm_id_from=333.337.search-card.all.click'"+"style='width: 750px;height: 550px;'"+"></iframe>";}