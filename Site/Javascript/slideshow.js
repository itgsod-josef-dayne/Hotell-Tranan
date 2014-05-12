<a href="javascript:gotoshow()"><img src="food1.jpg" name="slide" border=0 width=800 height=200></a>
    <script>
        //configure the paths of the images, plus corresponding target links
        slideshowimages("food1.jpg","food2.jpg","food3.jpg","food4.jpg","food5.jpg")
        slideshowlinks("http://food.epicurious.com/run/recipe/view?id=13285","http://food.epicurious.com/run/recipe/view?id=10092","http://food.epicurious.com/run/recipe/view?id=100975","http://food.epicurious.com/run/recipe/view?id=2876","http://food.epicurious.com/run/recipe/view?id=20010")

        //configure the speed of the slideshow, in miliseconds
        var slideshowspeed=2000

        var whichlink=0
        var whichimage=0
        function slideit(){
        if (!document.images)
        return
        document.images.slide.src=slideimages[whichimage].src
        whichlink=whichimage
        if (whichimage<slideimages.length-1)
        whichimage++
        else
        whichimage=0
        setTimeout("slideit()",slideshowspeed)
        }
        slideit()
    </script>