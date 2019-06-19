import _ from 'lodash'
import  './style.css'
import Icon from './icon.png'
import txt from './a.txt'
function component() {
    const element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

      // Add the image to our existing div.
       const myIcon = new Image();
       myIcon.src = Icon;

       element.appendChild(myIcon);
    return element;
}
document.body.appendChild(component());
function img(){
    const element = document.createElement('div')
    var canvas = document.createElement('canvas')
    var canvas2 = document.createElement('canvas')
    const image = new Image();

    image.crossOrigin = '';
    image.onload = ()=>{
        console.log(image.width)
        const ctx = canvas.getContext("2d")
        const ctx2 = canvas2.getContext("2d")
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        canvas.onmousemove = function(e){
            var mouseX,mouseY
            if(e.offsetX){
                mouseX = e.offsetX;
                mouseY = e.offsetY;
            }else{
                mouseX = e.layerX;
                mouseY = e.layerY;
            }
           console.log(ctx.getImageData(mouseX, mouseY, 1, 1).data);
        }
        canvas2.width = image.width;
        canvas2.height = image.height/3;
        element.appendChild(canvas);
        // element.appendChild(canvas2);
        for (let j = 0; j < 3; j++) {
            ctx2.drawImage(image,0,-j*image.height/3,image.width, image.height);
            var i = new Image()
            i.src = canvas2.toDataURL()
            element.appendChild(i);
        }
    }
    image.src = 'https://img-blog.csdn.net/20160608095321599'





    element.appendChild(image);
    return element
}
document.body.appendChild(img());
