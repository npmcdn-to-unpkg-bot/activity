angular.module('squareCtrl',[])
	.controller('squareCtrl',function(){
		// alert('ffff');
		$('.tttt').pullToRefresh();
		$('.tttt').on("pull-to-refresh", function() {
			setTimeout(function(){
				$('.tttt').pullToRefreshDone();
			},5000);
			
		});


	})
	.controller('signedCtrl',function(){

	});