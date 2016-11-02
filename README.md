canvas 
======
花了一些时间研究了这个h5的新属性，发现还是蛮有意思。然后就自己捣鼓了一个小游戏，其实canvas就是一个画布，主要用js。所以不论干什么滴都要学好js啊！<br>

以下是我循序渐进做的一些小东西：<br>

canvas时钟 （主要用画图的各个属性）：[效果展示](http://xuekeke.site/index.html)

canvas实现刮刮乐效果 （画图+Image）：[效果展示](http://xuekeke.site/canvas2.html)

canvas小游戏铲屎官的日常（画图+Image）：[效果展示](http://xuekeke.site/canvas3.html)

步骤简单如下：<br>
1.在html中放入<canvas></canvas>，给这个标签设好id。然后就奔向js了；

2.获取canvas这个对象，通过getContext()方法来获取当前画布的绘图环境context=canvas.getContext('2d');设置画布的宽高，默认宽高是300px*150px;

3.充分运用canvas的各种属性。可以draw,还可以写字，最强大就是Image 这个APi,加载图像，对这个图像进行分割合并，比如游戏地图什么就可以用这个API.

