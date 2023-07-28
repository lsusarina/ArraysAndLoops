import {guiConfirm, guiPrompt} from './talking.js';

export async function initScene (scene) {
    scene.clearColor = new BABYLON.Color3(0.8, 0.85, 0.95);
    let camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -20), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    const ground = new BABYLON.MeshBuilder.CreateGround('ground',{width:10,height:10},scene);
    const m=new BABYLON.GridMaterial('grid',scene);
    m.mainColor = new BABYLON.Color3(0.5,0.5,0.5);
    ground.material=m;

    scene.executeWhenReady(()=>{
        whenReady();
    });
}


async function whenReady(){
  
};