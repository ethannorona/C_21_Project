function surface(object2, object1){

    if(object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2){
        object2.velocityY = object2.velocityY * (-1);
    }
}