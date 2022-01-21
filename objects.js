AFRAME.registerComponent("fence",{
    init:function(){
        posX = -20
        posZ = 85
        for(var i = 0;i<20;i++){
            var fence1 = document.createElement("a-entity")
            posX = posX+5
            posY = 2.5
            posZ = posZ-10
            fence1.setAttribute("id","fence"+i)
            fence1.setAttribute("position",{
                x:posX,
                y:posY,
                z:posZ
            })
            fence1.setAttribute("scale",{
                x:2,y:2,z:2
            })
            fence1.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
            fence1.setAttribute("rotation",{x:0,y:90,z:0})
            var scene = document.querySelector("#scene")
            scene.appendChild(fence1)
        }
    }
})