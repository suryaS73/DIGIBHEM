function image()
{
    var img=["gallery1.jpg","gallery2.jpg","gallery3.jpg","gallery4.jpg","gallery5.jpg","gallery6.jpg","gallery7.jpg","gallery8.jpg","gallery9.jpg","gallery10.jpg","gallery11.jpg","gallery12.jpg","gallery13.jpg","gallery14.jpg","gallery15.jpg"];
    var imgLength=img.length;
    var randomNum=Math.random()*imgLength;
    var imgItem=Math.round(randomNum);
    document.getElementById("header").style.backgroundImage="URL(../Assets/Images/"+img[imgItem]+")";
    var updateTime=setTimeout(function(){image()},3000);
}