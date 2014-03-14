videobg.js
==========

As using the video to be the background of the website going to be the trend, I try to write a javascript file to solve this problem.

### How to Use?

At first, you should include the file
###
    <script type="text/javascript" src="js/videoBg.js"></script>
    
Then you can set the config as you need
###
    window.$vb.init({
			folder: "video",              //the folder of the videos, default: "";
			video_name: "iPhone 5s ad",   //the name of the video;
			muted: true                   //Set this true if you want the video to be muted, default: false;
		});
		
### Notes
> 1. Broswer support: IE9+(the muted setting  is not work for IE9), chrome, firefox, safari, opera;
> 2. You'd better at least put two type of videos(ogg, mp4, webm) in the folder in order to friendly broswer supporting.
> 3. Do not set the bockground of the body

Finally, you can see the [demo](http://www.jiajunlo.com/demo/videobg.js) here.
