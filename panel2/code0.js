gdjs.panelCode = {};
gdjs.panelCode.GDexitObjects1= [];
gdjs.panelCode.GDexitObjects2= [];
gdjs.panelCode.GDNewSpriteObjects1= [];
gdjs.panelCode.GDNewSpriteObjects2= [];
gdjs.panelCode.GDNewSprite2Objects1= [];
gdjs.panelCode.GDNewSprite2Objects2= [];
gdjs.panelCode.GDNewSprite4Objects1= [];
gdjs.panelCode.GDNewSprite4Objects2= [];
gdjs.panelCode.GDNewSprite5Objects1= [];
gdjs.panelCode.GDNewSprite5Objects2= [];
gdjs.panelCode.GDNewSprite6Objects1= [];
gdjs.panelCode.GDNewSprite6Objects2= [];
gdjs.panelCode.GDNewSprite7Objects1= [];
gdjs.panelCode.GDNewSprite7Objects2= [];
gdjs.panelCode.GDNewSprite8Objects1= [];
gdjs.panelCode.GDNewSprite8Objects2= [];
gdjs.panelCode.GDNewSprite9Objects1= [];
gdjs.panelCode.GDNewSprite9Objects2= [];
gdjs.panelCode.GDNewSprite10Objects1= [];
gdjs.panelCode.GDNewSprite10Objects2= [];
gdjs.panelCode.GDNewSprite11Objects1= [];
gdjs.panelCode.GDNewSprite11Objects2= [];
gdjs.panelCode.GDNewSprite12Objects1= [];
gdjs.panelCode.GDNewSprite12Objects2= [];
gdjs.panelCode.GDNewSprite13Objects1= [];
gdjs.panelCode.GDNewSprite13Objects2= [];
gdjs.panelCode.GDNewSprite14Objects1= [];
gdjs.panelCode.GDNewSprite14Objects2= [];
gdjs.panelCode.GDNewSprite15Objects1= [];
gdjs.panelCode.GDNewSprite15Objects2= [];
gdjs.panelCode.GDNewSprite16Objects1= [];
gdjs.panelCode.GDNewSprite16Objects2= [];


gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.panelCode.GDexitObjects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.panelCode.GDNewSprite2Objects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite4Objects1Objects = Hashtable.newFrom({"NewSprite4": gdjs.panelCode.GDNewSprite4Objects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs.panelCode.GDNewSprite5Objects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs.panelCode.GDNewSprite6Objects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs.panelCode.GDNewSprite7Objects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs.panelCode.GDNewSprite8Objects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite9Objects1Objects = Hashtable.newFrom({"NewSprite9": gdjs.panelCode.GDNewSprite9Objects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite10Objects1Objects = Hashtable.newFrom({"NewSprite10": gdjs.panelCode.GDNewSprite10Objects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite15Objects1Objects = Hashtable.newFrom({"NewSprite15": gdjs.panelCode.GDNewSprite15Objects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite16Objects1Objects = Hashtable.newFrom({"NewSprite16": gdjs.panelCode.GDNewSprite16Objects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite12Objects1Objects = Hashtable.newFrom({"NewSprite12": gdjs.panelCode.GDNewSprite12Objects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite11Objects1Objects = Hashtable.newFrom({"NewSprite11": gdjs.panelCode.GDNewSprite11Objects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite13Objects1Objects = Hashtable.newFrom({"NewSprite13": gdjs.panelCode.GDNewSprite13Objects1});
gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite14Objects1Objects = Hashtable.newFrom({"NewSprite14": gdjs.panelCode.GDNewSprite14Objects1});
gdjs.panelCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.panelCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDexitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8444716);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.panelCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8445580);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.facebook.com/sharer/sharer.php?u=https://play.google.com/store/apps/details?id=app.thiago.soccebr\n", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite4"), gdjs.panelCode.GDNewSprite4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8446892);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/rollbrasil", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs.panelCode.GDNewSprite5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8447876);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://web.whatsapp.com/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs.panelCode.GDNewSprite6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8448620);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://play.google.com/store/apps/dev?id=7116791576701423724", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs.panelCode.GDNewSprite7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite7Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8449764);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.linkedin.com/in/thiagonascimento80/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs.panelCode.GDNewSprite8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite8Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8449924);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://join.skype.com/invite/eQ84IIwYSllA", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite9"), gdjs.panelCode.GDNewSprite9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite9Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8450900);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.blogger.com/blog/posts/6629601986498647450", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite10"), gdjs.panelCode.GDNewSprite10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite10Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8452828);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.messenger.com/login/password/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite15"), gdjs.panelCode.GDNewSprite15Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite15Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8452940);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://chat.openai.com/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite16"), gdjs.panelCode.GDNewSprite16Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite16Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8453284);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://sites.google.com/new", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite12"), gdjs.panelCode.GDNewSprite12Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite12Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8454244);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.bing.com/images/create?form=IRPGEN", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite11"), gdjs.panelCode.GDNewSprite11Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite11Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8456740);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.instagram.com/studiotigital/", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite13"), gdjs.panelCode.GDNewSprite13Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite13Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8456852);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://app.yampi.com.br/home", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite14"), gdjs.panelCode.GDNewSprite14Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.panelCode.mapOfGDgdjs_9546panelCode_9546GDNewSprite14Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8457196);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://app.dropi.com.br/", runtimeScene);
}}

}


};

gdjs.panelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.panelCode.GDexitObjects1.length = 0;
gdjs.panelCode.GDexitObjects2.length = 0;
gdjs.panelCode.GDNewSpriteObjects1.length = 0;
gdjs.panelCode.GDNewSpriteObjects2.length = 0;
gdjs.panelCode.GDNewSprite2Objects1.length = 0;
gdjs.panelCode.GDNewSprite2Objects2.length = 0;
gdjs.panelCode.GDNewSprite4Objects1.length = 0;
gdjs.panelCode.GDNewSprite4Objects2.length = 0;
gdjs.panelCode.GDNewSprite5Objects1.length = 0;
gdjs.panelCode.GDNewSprite5Objects2.length = 0;
gdjs.panelCode.GDNewSprite6Objects1.length = 0;
gdjs.panelCode.GDNewSprite6Objects2.length = 0;
gdjs.panelCode.GDNewSprite7Objects1.length = 0;
gdjs.panelCode.GDNewSprite7Objects2.length = 0;
gdjs.panelCode.GDNewSprite8Objects1.length = 0;
gdjs.panelCode.GDNewSprite8Objects2.length = 0;
gdjs.panelCode.GDNewSprite9Objects1.length = 0;
gdjs.panelCode.GDNewSprite9Objects2.length = 0;
gdjs.panelCode.GDNewSprite10Objects1.length = 0;
gdjs.panelCode.GDNewSprite10Objects2.length = 0;
gdjs.panelCode.GDNewSprite11Objects1.length = 0;
gdjs.panelCode.GDNewSprite11Objects2.length = 0;
gdjs.panelCode.GDNewSprite12Objects1.length = 0;
gdjs.panelCode.GDNewSprite12Objects2.length = 0;
gdjs.panelCode.GDNewSprite13Objects1.length = 0;
gdjs.panelCode.GDNewSprite13Objects2.length = 0;
gdjs.panelCode.GDNewSprite14Objects1.length = 0;
gdjs.panelCode.GDNewSprite14Objects2.length = 0;
gdjs.panelCode.GDNewSprite15Objects1.length = 0;
gdjs.panelCode.GDNewSprite15Objects2.length = 0;
gdjs.panelCode.GDNewSprite16Objects1.length = 0;
gdjs.panelCode.GDNewSprite16Objects2.length = 0;

gdjs.panelCode.eventsList0(runtimeScene);

return;

}

gdjs['panelCode'] = gdjs.panelCode;
