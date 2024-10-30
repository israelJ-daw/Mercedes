class Punto{
    x;
    y;

    constructor(x,y){
        this.x=x;
        this.y;
    }

    dondeesta(x,y){
        if (x>0){
            if (y>0){
                return document.write("El punto esta en el cuadrante 1")
            }
         else {
            return document.write("El punto esta en el cuadrante 4")
         } 
          
        }
     else {
        if (y>0){
            return document.write("El punto esta en el 2 ")
        }
        else {
            return document.write("El punto esta en el cuadrante 3")
        }
     }   
    }
}
