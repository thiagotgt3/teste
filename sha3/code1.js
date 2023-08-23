gdjs.GameSceneCode = {};
gdjs.GameSceneCode.GDFishObjects1= [];
gdjs.GameSceneCode.GDFishObjects2= [];
gdjs.GameSceneCode.GDFishObjects3= [];
gdjs.GameSceneCode.GDFishObjects4= [];
gdjs.GameSceneCode.GDBauObjects1= [];
gdjs.GameSceneCode.GDBauObjects2= [];
gdjs.GameSceneCode.GDBauObjects3= [];
gdjs.GameSceneCode.GDBauObjects4= [];
gdjs.GameSceneCode.GDBau2Objects1= [];
gdjs.GameSceneCode.GDBau2Objects2= [];
gdjs.GameSceneCode.GDBau2Objects3= [];
gdjs.GameSceneCode.GDBau2Objects4= [];
gdjs.GameSceneCode.GDseaObjects1= [];
gdjs.GameSceneCode.GDseaObjects2= [];
gdjs.GameSceneCode.GDseaObjects3= [];
gdjs.GameSceneCode.GDseaObjects4= [];
gdjs.GameSceneCode.GDOrangeleavesObjects1= [];
gdjs.GameSceneCode.GDOrangeleavesObjects2= [];
gdjs.GameSceneCode.GDOrangeleavesObjects3= [];
gdjs.GameSceneCode.GDOrangeleavesObjects4= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95LeftObjects1= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95LeftObjects2= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95LeftObjects3= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95LeftObjects4= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95RightObjects1= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95RightObjects2= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95RightObjects3= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95RightObjects4= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95TopObjects1= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95TopObjects2= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95TopObjects3= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95TopObjects4= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95BottomObjects1= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95BottomObjects2= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95BottomObjects3= [];
gdjs.GameSceneCode.GDCameraBoundarysMarker_95BottomObjects4= [];
gdjs.GameSceneCode.GDTropicalFishObjects1= [];
gdjs.GameSceneCode.GDTropicalFishObjects2= [];
gdjs.GameSceneCode.GDTropicalFishObjects3= [];
gdjs.GameSceneCode.GDTropicalFishObjects4= [];
gdjs.GameSceneCode.GDPearObjects1= [];
gdjs.GameSceneCode.GDPearObjects2= [];
gdjs.GameSceneCode.GDPearObjects3= [];
gdjs.GameSceneCode.GDPearObjects4= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects1= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects2= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects3= [];
gdjs.GameSceneCode.GDFlatLightJoystickObjects4= [];
gdjs.GameSceneCode.GDEstrelasObjects1= [];
gdjs.GameSceneCode.GDEstrelasObjects2= [];
gdjs.GameSceneCode.GDEstrelasObjects3= [];
gdjs.GameSceneCode.GDEstrelasObjects4= [];
gdjs.GameSceneCode.GDStarGoldObjects1= [];
gdjs.GameSceneCode.GDStarGoldObjects2= [];
gdjs.GameSceneCode.GDStarGoldObjects3= [];
gdjs.GameSceneCode.GDStarGoldObjects4= [];
gdjs.GameSceneCode.GDStarGold2Objects1= [];
gdjs.GameSceneCode.GDStarGold2Objects2= [];
gdjs.GameSceneCode.GDStarGold2Objects3= [];
gdjs.GameSceneCode.GDStarGold2Objects4= [];
gdjs.GameSceneCode.GDHomeObjects1= [];
gdjs.GameSceneCode.GDHomeObjects2= [];
gdjs.GameSceneCode.GDHomeObjects3= [];
gdjs.GameSceneCode.GDHomeObjects4= [];


gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDOrangeleavesObjects1Objects = Hashtable.newFrom({"Orangeleaves": gdjs.GameSceneCode.GDOrangeleavesObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDOrangeleavesObjects1Objects = Hashtable.newFrom({"Orangeleaves": gdjs.GameSceneCode.GDOrangeleavesObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDFishObjects2Objects = Hashtable.newFrom({"Fish": gdjs.GameSceneCode.GDFishObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDPearObjects2Objects = Hashtable.newFrom({"Pear": gdjs.GameSceneCode.GDPearObjects2});
gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pear"), gdjs.GameSceneCode.GDPearObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDFishObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDPearObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Estrelas"), gdjs.GameSceneCode.GDEstrelasObjects2);
/* Reuse gdjs.GameSceneCode.GDPearObjects2 */
{runtimeScene.getScene().getVariables().get("Score").add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.randomFloatInRange(0.025, 0.05));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PitchScaling");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ding", false, 50, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) - 0.1);
}{for(var i = 0, len = gdjs.GameSceneCode.GDPearObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDPearObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDEstrelasObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDEstrelasObjects2[i].setString("Estrelas: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Score"))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PitchScaling") > 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDFishObjects2ObjectsGDgdjs_46GameSceneCode_46GDTropicalFishObjects2Objects = Hashtable.newFrom({"Fish": gdjs.GameSceneCode.GDFishObjects2, "TropicalFish": gdjs.GameSceneCode.GDTropicalFishObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTropicalFishObjects2Objects = Hashtable.newFrom({"TropicalFish": gdjs.GameSceneCode.GDTropicalFishObjects2});
gdjs.GameSceneCode.mapOfEmptyGDFishObjects = Hashtable.newFrom({"Fish": []});
gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects2);
gdjs.copyArray(runtimeScene.getObjects("TropicalFish"), gdjs.GameSceneCode.GDTropicalFishObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDFishObjects2ObjectsGDgdjs_46GameSceneCode_46GDTropicalFishObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTropicalFishObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDFishObjects2 */
/* Reuse gdjs.GameSceneCode.GDTropicalFishObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDTropicalFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTropicalFishObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfEmptyGDFishObjects) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Death", false, 75, 0.8);
}}

}


};gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10478852);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "MobileControls");
}}

}


};gdjs.GameSceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Bottom"), gdjs.GameSceneCode.GDCameraBoundarysMarker_95BottomObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Left"), gdjs.GameSceneCode.GDCameraBoundarysMarker_95LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Right"), gdjs.GameSceneCode.GDCameraBoundarysMarker_95RightObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Top"), gdjs.GameSceneCode.GDCameraBoundarysMarker_95TopObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.GameSceneCode.GDCameraBoundarysMarker_95LeftObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCameraBoundarysMarker_95LeftObjects1[0].getAABBRight()), (( gdjs.GameSceneCode.GDCameraBoundarysMarker_95TopObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCameraBoundarysMarker_95TopObjects1[0].getAABBBottom()), (( gdjs.GameSceneCode.GDCameraBoundarysMarker_95RightObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCameraBoundarysMarker_95RightObjects1[0].getAABBLeft()), (( gdjs.GameSceneCode.GDCameraBoundarysMarker_95BottomObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCameraBoundarysMarker_95BottomObjects1[0].getAABBTop()), "", 0);
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDFishObjects2Objects = Hashtable.newFrom({"Fish": gdjs.GameSceneCode.GDFishObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTropicalFishObjects2Objects = Hashtable.newFrom({"TropicalFish": gdjs.GameSceneCode.GDTropicalFishObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDFishObjects2Objects = Hashtable.newFrom({"Fish": gdjs.GameSceneCode.GDFishObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTropicalFishObjects2Objects = Hashtable.newFrom({"TropicalFish": gdjs.GameSceneCode.GDTropicalFishObjects2});
gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects2);
gdjs.copyArray(runtimeScene.getObjects("TropicalFish"), gdjs.GameSceneCode.GDTropicalFishObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDFishObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTropicalFishObjects2Objects, 300, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTropicalFishObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTropicalFishObjects2[i].getVariableBoolean(gdjs.GameSceneCode.GDTropicalFishObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTropicalFishObjects2[k] = gdjs.GameSceneCode.GDTropicalFishObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTropicalFishObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDTropicalFishObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDTropicalFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTropicalFishObjects2[i].setVariableBoolean(gdjs.GameSceneCode.GDTropicalFishObjects2[i].getVariables().getFromIndex(0), true);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDTropicalFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTropicalFishObjects2[i].setAnimationName("Shadow");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects2);
gdjs.copyArray(runtimeScene.getObjects("TropicalFish"), gdjs.GameSceneCode.GDTropicalFishObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDFishObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTropicalFishObjects2Objects, 400, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTropicalFishObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTropicalFishObjects2[i].getVariableBoolean(gdjs.GameSceneCode.GDTropicalFishObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTropicalFishObjects2[k] = gdjs.GameSceneCode.GDTropicalFishObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTropicalFishObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDTropicalFishObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDTropicalFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTropicalFishObjects2[i].setVariableBoolean(gdjs.GameSceneCode.GDTropicalFishObjects2[i].getVariables().getFromIndex(0), false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDTropicalFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTropicalFishObjects2[i].setAnimationName("No Shadow");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TropicalFish"), gdjs.GameSceneCode.GDTropicalFishObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDTropicalFishObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDTropicalFishObjects2[i].getVariableBoolean(gdjs.GameSceneCode.GDTropicalFishObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDTropicalFishObjects2[k] = gdjs.GameSceneCode.GDTropicalFishObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDTropicalFishObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects2);
/* Reuse gdjs.GameSceneCode.GDTropicalFishObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDTropicalFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTropicalFishObjects2[i].addForceTowardPosition((( gdjs.GameSceneCode.GDFishObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDFishObjects2[0].getCenterXInScene()), (( gdjs.GameSceneCode.GDFishObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDFishObjects2[0].getCenterYInScene()), 50, 0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects2[i].setAnimationName("baixo");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects2[i].flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bau2"), gdjs.GameSceneCode.GDBau2Objects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDBau2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBau2Objects2[i].flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects2[i].setAnimationName("cima");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects2[i].setAnimationName("baixo");
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects2[i].flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bau2"), gdjs.GameSceneCode.GDBau2Objects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDBau2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBau2Objects1[i].flipX(false);
}
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDFishObjects2Objects = Hashtable.newFrom({"Fish": gdjs.GameSceneCode.GDFishObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDBauObjects2Objects = Hashtable.newFrom({"Bau": gdjs.GameSceneCode.GDBauObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDBau2Objects2Objects = Hashtable.newFrom({"Bau2": gdjs.GameSceneCode.GDBau2Objects2});
gdjs.GameSceneCode.asyncCallback10487484 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Bau2"), gdjs.GameSceneCode.GDBau2Objects4);

gdjs.copyArray(asyncObjectsList.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects4);

{for(var i = 0, len = gdjs.GameSceneCode.GDBau2Objects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBau2Objects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects4.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects4[i].hide(false);
}
}}
gdjs.GameSceneCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
/* Don't save Bau2 as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.GameSceneCode.GDFishObjects3) asyncObjectsList.addObject("Fish", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(20), (runtimeScene) => (gdjs.GameSceneCode.asyncCallback10487484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameSceneCode.asyncCallback10487820 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Bau"), gdjs.GameSceneCode.GDBauObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects3);

{for(var i = 0, len = gdjs.GameSceneCode.GDBauObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBauObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects3[i].hide();
}
}
{ //Subevents
gdjs.GameSceneCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.GameSceneCode.GDBauObjects2) asyncObjectsList.addObject("Bau", obj);
for (const obj of gdjs.GameSceneCode.GDBau2Objects2) asyncObjectsList.addObject("Bau2", obj);
for (const obj of gdjs.GameSceneCode.GDFishObjects2) asyncObjectsList.addObject("Fish", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.GameSceneCode.asyncCallback10487820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDFishObjects1Objects = Hashtable.newFrom({"Fish": gdjs.GameSceneCode.GDFishObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDBau2Objects1Objects = Hashtable.newFrom({"Bau2": gdjs.GameSceneCode.GDBau2Objects1});
gdjs.GameSceneCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bau"), gdjs.GameSceneCode.GDBauObjects2);
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDFishObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDBauObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10487260);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDFishObjects2 */
gdjs.GameSceneCode.GDBau2Objects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "WinGame", false, 50, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDBau2Objects2Objects, (( gdjs.GameSceneCode.GDFishObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDFishObjects2[0].getPointX("tub3")), (( gdjs.GameSceneCode.GDFishObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDFishObjects2[0].getPointY("tub3")), "");
}
{ //Subevents
gdjs.GameSceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bau2"), gdjs.GameSceneCode.GDBau2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDFishObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDBau2Objects1Objects, 55, true);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDBau2Objects1 */
/* Reuse gdjs.GameSceneCode.GDFishObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDBau2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBau2Objects1[i].addForceTowardPosition((( gdjs.GameSceneCode.GDFishObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDFishObjects1[0].getPointX("tub3")), (( gdjs.GameSceneCode.GDFishObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDFishObjects1[0].getPointY("tub3")), 400, 0);
}
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTropicalFishObjects1Objects = Hashtable.newFrom({"TropicalFish": gdjs.GameSceneCode.GDTropicalFishObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDBau2Objects1Objects = Hashtable.newFrom({"Bau2": gdjs.GameSceneCode.GDBau2Objects1});
gdjs.GameSceneCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FlatLightJoystick"), gdjs.GameSceneCode.GDFlatLightJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDFlatLightJoystickObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDFlatLightJoystickObjects2[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDFlatLightJoystickObjects2[k] = gdjs.GameSceneCode.GDFlatLightJoystickObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDFlatLightJoystickObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bau2"), gdjs.GameSceneCode.GDBau2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDBau2Objects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBau2Objects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects2[i].setAnimationName("baixo");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatLightJoystick"), gdjs.GameSceneCode.GDFlatLightJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDFlatLightJoystickObjects1.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDFlatLightJoystickObjects1[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDFlatLightJoystickObjects1[k] = gdjs.GameSceneCode.GDFlatLightJoystickObjects1[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDFlatLightJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bau2"), gdjs.GameSceneCode.GDBau2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDBau2Objects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDBau2Objects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects1[i].setAnimationName("baixo");
}
}}

}


};gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHomeObjects1Objects = Hashtable.newFrom({"Home": gdjs.GameSceneCode.GDHomeObjects1});
gdjs.GameSceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameSceneCode.GDFishObjects1.length !== 0 ? gdjs.GameSceneCode.GDFishObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects1[i].setZOrder(1000);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameSceneCode.GDFishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Orangeleaves"), gdjs.GameSceneCode.GDOrangeleavesObjects1);
gdjs.copyArray(runtimeScene.getObjects("TropicalFish"), gdjs.GameSceneCode.GDTropicalFishObjects1);
gdjs.copyArray(runtimeScene.getObjects("sea"), gdjs.GameSceneCode.GDseaObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDseaObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDseaObjects1[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDseaObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDseaObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDseaObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDseaObjects1[i].setYOffset(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.GameSceneCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDFishObjects1[i].separateFromObjectsList(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDOrangeleavesObjects1Objects, false);
}
for(var i = 0, len = gdjs.GameSceneCode.GDTropicalFishObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTropicalFishObjects1[i].separateFromObjectsList(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDOrangeleavesObjects1Objects, false);
}
}}

}


{


gdjs.GameSceneCode.eventsList0(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList1(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList2(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList3(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList4(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList5(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList8(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Bau2"), gdjs.GameSceneCode.GDBau2Objects1);
gdjs.copyArray(runtimeScene.getObjects("TropicalFish"), gdjs.GameSceneCode.GDTropicalFishObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDTropicalFishObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDBau2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDTropicalFishObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDTropicalFishObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDTropicalFishObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.GameSceneCode.eventsList9(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.GameSceneCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_46GameSceneCode_46GDHomeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDFishObjects1.length = 0;
gdjs.GameSceneCode.GDFishObjects2.length = 0;
gdjs.GameSceneCode.GDFishObjects3.length = 0;
gdjs.GameSceneCode.GDFishObjects4.length = 0;
gdjs.GameSceneCode.GDBauObjects1.length = 0;
gdjs.GameSceneCode.GDBauObjects2.length = 0;
gdjs.GameSceneCode.GDBauObjects3.length = 0;
gdjs.GameSceneCode.GDBauObjects4.length = 0;
gdjs.GameSceneCode.GDBau2Objects1.length = 0;
gdjs.GameSceneCode.GDBau2Objects2.length = 0;
gdjs.GameSceneCode.GDBau2Objects3.length = 0;
gdjs.GameSceneCode.GDBau2Objects4.length = 0;
gdjs.GameSceneCode.GDseaObjects1.length = 0;
gdjs.GameSceneCode.GDseaObjects2.length = 0;
gdjs.GameSceneCode.GDseaObjects3.length = 0;
gdjs.GameSceneCode.GDseaObjects4.length = 0;
gdjs.GameSceneCode.GDOrangeleavesObjects1.length = 0;
gdjs.GameSceneCode.GDOrangeleavesObjects2.length = 0;
gdjs.GameSceneCode.GDOrangeleavesObjects3.length = 0;
gdjs.GameSceneCode.GDOrangeleavesObjects4.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95LeftObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95LeftObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95LeftObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95LeftObjects4.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95RightObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95RightObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95RightObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95RightObjects4.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95TopObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95TopObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95TopObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95TopObjects4.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95BottomObjects1.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95BottomObjects2.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95BottomObjects3.length = 0;
gdjs.GameSceneCode.GDCameraBoundarysMarker_95BottomObjects4.length = 0;
gdjs.GameSceneCode.GDTropicalFishObjects1.length = 0;
gdjs.GameSceneCode.GDTropicalFishObjects2.length = 0;
gdjs.GameSceneCode.GDTropicalFishObjects3.length = 0;
gdjs.GameSceneCode.GDTropicalFishObjects4.length = 0;
gdjs.GameSceneCode.GDPearObjects1.length = 0;
gdjs.GameSceneCode.GDPearObjects2.length = 0;
gdjs.GameSceneCode.GDPearObjects3.length = 0;
gdjs.GameSceneCode.GDPearObjects4.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects1.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects2.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects3.length = 0;
gdjs.GameSceneCode.GDFlatLightJoystickObjects4.length = 0;
gdjs.GameSceneCode.GDEstrelasObjects1.length = 0;
gdjs.GameSceneCode.GDEstrelasObjects2.length = 0;
gdjs.GameSceneCode.GDEstrelasObjects3.length = 0;
gdjs.GameSceneCode.GDEstrelasObjects4.length = 0;
gdjs.GameSceneCode.GDStarGoldObjects1.length = 0;
gdjs.GameSceneCode.GDStarGoldObjects2.length = 0;
gdjs.GameSceneCode.GDStarGoldObjects3.length = 0;
gdjs.GameSceneCode.GDStarGoldObjects4.length = 0;
gdjs.GameSceneCode.GDStarGold2Objects1.length = 0;
gdjs.GameSceneCode.GDStarGold2Objects2.length = 0;
gdjs.GameSceneCode.GDStarGold2Objects3.length = 0;
gdjs.GameSceneCode.GDStarGold2Objects4.length = 0;
gdjs.GameSceneCode.GDHomeObjects1.length = 0;
gdjs.GameSceneCode.GDHomeObjects2.length = 0;
gdjs.GameSceneCode.GDHomeObjects3.length = 0;
gdjs.GameSceneCode.GDHomeObjects4.length = 0;

gdjs.GameSceneCode.eventsList10(runtimeScene);

return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
