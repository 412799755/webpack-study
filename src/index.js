import  './style.css'
import test from './test.txt'
import Icon from './icon.png'
console.log(test)
 function getComponent() {
       return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
            const element = document.createElement('div');

                element.innerHTML = _.join(['Hello', 'webpack'], ' ');

                return element;

              }).catch(error => 'An error occurred while loading the component');
}
 getComponent().then(component => {
       document.body.appendChild(component);
})
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
        const naturalWidth = image.naturalWidth
        const naturalHeight= image.naturalHeight
        canvas.width = naturalWidth;
        canvas.height = naturalHeight;
        image.width = naturalWidth/5
        canvas.style.width = naturalWidth/5 + 'px';
        canvas.style.height = naturalHeight/5 + 'px';
        ctx.drawImage(image, 0, 0,naturalWidth,naturalHeight);
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
        canvas2.width = naturalWidth;
        canvas2.height = naturalHeight/3;
        element.appendChild(canvas);
        // element.appendChild(canvas2);
        for (let j = 0; j < 3; j++) {
            ctx2.drawImage(image,0,-j*naturalHeight/3,naturalWidth, naturalHeight);
            var i = new Image()
            i.src = canvas2.toDataURL()
            i.width = naturalWidth/5
            element.appendChild(i);
        }
    }
    image.src = 'https://test.schbrain.com/api/tk/question/tkBucket/download/paper/458288388997697536/14_12_9.png'
    element.appendChild(image);
    return element
}
document.body.appendChild(img());
