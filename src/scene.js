import {guiConfirm, guiPrompt} from './talking.js';


export async function initScene (scene) {
    scene.clearColor = new BABYLON.Color3(0.8, 0.85, 0.95);
    let camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -20), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    //const ground = new BABYLON.MeshBuilder.CreateGround('ground',{width:10,height:10},scene);
    const m=new BABYLON.GridMaterial('grid',scene);
    m.mainColor = new BABYLON.Color3(0.5,0.5,0.5);
    //ground.material=m;

    // for (let i=0; i<15; i++){
    //     console.log("log " + i);
    // }

    const columnBulk = await BABYLON.SceneLoader.ImportMeshAsync(null, " ./models/", "column.glb", scene);
    const column = columnBulk.meshes[0];
    column.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);

    const columnCount = 10; //количество колонн, которые мы создаем
    const corner = Math.PI * 2 / columnCount; //угол для расположения колонн по кругу
    const radius = 8;
    for (let i=0; i<columnCount; i++){
        const columnClone = column.clone();
        columnClone.position.x = i*2;
    }

    for (let i=0; i<columnCount; i++){
        const columnClone = column.clone();
        columnClone.position.x = i*2;
        columnClone.position.z = 8;
    }

    // for (let i = 0; i < columnCount; i++){
    //     const columnClone = column.clone();
    //     columnClone.position.x = Math.sin(corner * i) * radius;
    //     columnClone.position.z = Math.cos(corner * i) * radius;
    //     columnClone.rotate(BABYLON.Axis.Y, corner * i, BABYLON.Space.LOCAL);
    // }

    // column.dispose();

    // let degreeCount = 3;
    // for (let i = 0; i < degreeCount; i++){
    //     const degree = new BABYLON.MeshBuilder.CreateCylinder(`culinder - ${i}`, 
    //     {
    //         height: 1,
    //         diameter: radius * 2.5 + 3 * i
            
    //     }, scene);
    //     degree.position.y = - 0.5 - i;
    //     const material = new BABYLON.StandardMaterial();
    //     material.diffuseColor = new BABYLON.Color3(0.5 + i/10, i/10, i/10);
    //     degree.material = material;

    // }

    scene.executeWhenReady(()=>{
        whenReady();
    });

    
}


async function whenReady(){
  
};