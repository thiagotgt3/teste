gdjs.menuCode = {};
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];
gdjs.menuCode.GDNewSprite2Objects1= [];
gdjs.menuCode.GDNewSprite2Objects2= [];
gdjs.menuCode.GDPlayObjects1= [];
gdjs.menuCode.GDPlayObjects2= [];
gdjs.menuCode.GDNewSprite3Objects1= [];
gdjs.menuCode.GDNewSprite3Objects2= [];
gdjs.menuCode.GDLargeExitButtonObjects1= [];
gdjs.menuCode.GDLargeExitButtonObjects2= [];


gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.menuCode.GDPlayObjects1});
gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLargeExitButtonObjects1Objects = Hashtable.newFrom({"LargeExitButton": gdjs.menuCode.GDLargeExitButtonObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10462972);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.facebookInstantGames.showInterstitialAd(gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.facebookInstantGames.showRewardedVideo(gdjs.VariablesContainer.badVariable);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.menuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LargeExitButton"), gdjs.menuCode.GDLargeExitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDLargeExitButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9112380);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.facebookInstantGames.loadInterstitialAd("323977699952448_323980339952184", gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.facebookInstantGames.loadRewardedVideo("323977699952448_323982446618640", gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.facebookInstantGames.showInterstitialAd(gdjs.VariablesContainer.badVariable);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;
gdjs.menuCode.GDPlayObjects1.length = 0;
gdjs.menuCode.GDPlayObjects2.length = 0;
gdjs.menuCode.GDNewSprite3Objects1.length = 0;
gdjs.menuCode.GDNewSprite3Objects2.length = 0;
gdjs.menuCode.GDLargeExitButtonObjects1.length = 0;
gdjs.menuCode.GDLargeExitButtonObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);

return;

}

gdjs['menuCode'] = gdjs.menuCode;
