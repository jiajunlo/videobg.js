/**
* author: Jun
* date: 2014/3/13
**/

(function(window, document) {
	function VideoBg(folder, video_name, muted) {
		this.folder = folder,
		this.video_name = video_name,
		this.muted = muted
	};

	VideoBg.prototype = {
		constructor: VideoBg,
		run: function() {
			var video_node = document.createElement("video");
			video_node.style.position = "fixed";
			video_node.style.top = 0;
			video_node.style.zIndex = -9999;
			var video_type = ["ogg", "mp4", "webm"];
			video_node.setAttribute("id", "video-bg"); 
			video_node.setAttribute("loop", "loop"); 
			video_node.setAttribute("autoplay", "autoplay");
			if(this.muted == true) {
				video_node.setAttribute("muted", "muted"); 
			}

			for(var i = 0; i < video_type.length; i++) {
				var video_child = document.createElement("source");
				video_child.setAttribute("src", this.folder + "/" + this.video_name + "." + video_type[i]); 
				video_child.setAttribute("type", "video/" + video_type[i]); 
				video_node.appendChild(video_child);
			}
			document.body.appendChild(video_node);
			resizeVideo();
		}
	}

	function resizeVideo(){
		var vb_obj = document.getElementById("video-bg");
		var screen_width = document.body.clientWidth;
		var screen_height = document.body.clientHeight;
		if(vb_obj.clientWidth / vb_obj.clientHeight > screen_width / screen_height) {
			vb_obj.style.height = screen_height;
			vb_obj.style.width = screen_height * vb_obj.clientWidth / vb_obj.clientHeight;
			vb_obj.style.left = -(( screen_height * vb_obj.clientWidth / vb_obj.clientHeight- screen_width ) / 2) + "px";
			console.log(screen_height * vb_obj.clientWidth / vb_obj.clientHeight);
		}
		else {
			vb_obj.style.width = screen_width + "px";
			vb_obj.style.height = "auto";
			vb_obj.style.left = "0px";
		}
	}

	var videoInit = {
		init: function(settings) {
			if(settings.video_name != null) {
				if(settings.folder == undefined) {
					settings.folder = "";
				}
				if(settings.muted == true) {
					settings.muted = true;
				}
				else {
					settings.muted = false;
				}

				var vb_temp = new VideoBg(settings.folder, settings.video_name, settings.muted);
				vb_temp.run();
			}
			return false;
		}
	}

	window.onresize = function() {
		resizeVideo();
	}
	window.$vb = videoInit;
}(window, document));