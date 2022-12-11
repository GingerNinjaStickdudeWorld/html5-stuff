gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDguyObjects1= [];
gdjs.Untitled_32sceneCode.GDguyObjects2= [];
gdjs.Untitled_32sceneCode.GDgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDenemyObjects1= [];
gdjs.Untitled_32sceneCode.GDenemyObjects2= [];
gdjs.Untitled_32sceneCode.GDNewButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDNewButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDNPCObjects1= [];
gdjs.Untitled_32sceneCode.GDNPCObjects2= [];
gdjs.Untitled_32sceneCode.GDnpcspawnObjects1= [];
gdjs.Untitled_32sceneCode.GDnpcspawnObjects2= [];
gdjs.Untitled_32sceneCode.GDalertObjects1= [];
gdjs.Untitled_32sceneCode.GDalertObjects2= [];
gdjs.Untitled_32sceneCode.GDbombObjects1= [];
gdjs.Untitled_32sceneCode.GDbombObjects2= [];
gdjs.Untitled_32sceneCode.GDBombButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDBombButtonObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.asyncCallback9810548 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("guy"), gdjs.Untitled_32sceneCode.GDguyObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDguyObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDguyObjects2[i].getBehavior("PlatformerObject").setCanNotAirJump();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDguyObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDguyObjects2[i].setAnimationName("idle");
}
}}
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Untitled_32sceneCode.GDguyObjects1) asyncObjectsList.addObject("guy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback9810548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Untitled_32sceneCode.GDenemyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Untitled_32sceneCode.GDenemyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDguyObjects1Objects = Hashtable.newFrom({"guy": gdjs.Untitled_32sceneCode.GDguyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDNPCObjects1Objects = Hashtable.newFrom({"NPC": gdjs.Untitled_32sceneCode.GDNPCObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Untitled_32sceneCode.GDenemyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDNPCObjects1Objects = Hashtable.newFrom({"NPC": gdjs.Untitled_32sceneCode.GDNPCObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDbombObjects1Objects = Hashtable.newFrom({"bomb": gdjs.Untitled_32sceneCode.GDbombObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("guy"), gdjs.Untitled_32sceneCode.GDguyObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDguyObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDguyObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDguyObjects1[k] = gdjs.Untitled_32sceneCode.GDguyObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDguyObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDguyObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDguyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDguyObjects1[i].setAnimationName("jump");
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.Untitled_32sceneCode.GDNewButtonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNewButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDNewButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNewButtonObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.Untitled_32sceneCode.GDenemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDenemyObjects1Objects, gdjs.evtTools.common.toString((( gdjs.Untitled_32sceneCode.GDenemyObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDenemyObjects1[0].getAnimationFrame())), 0, 0, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Untitled_32sceneCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("guy"), gdjs.Untitled_32sceneCode.GDguyObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDenemyObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDguyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Untitled_32sceneCode.GDenemyObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDenemyObjects1[i].getBehavior("Pathfinding").setAcceleration(10);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("npcspawn"), gdjs.Untitled_32sceneCode.GDnpcspawnObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDnpcspawnObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDnpcspawnObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDnpcspawnObjects1[k] = gdjs.Untitled_32sceneCode.GDnpcspawnObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDnpcspawnObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.Untitled_32sceneCode.GDNPCObjects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDNPCObjects1Objects, gdjs.evtTools.common.toString((( gdjs.Untitled_32sceneCode.GDNPCObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNPCObjects1[0].getAnimationFrame())), -(10), -(10), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NPC"), gdjs.Untitled_32sceneCode.GDNPCObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Untitled_32sceneCode.GDenemyObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDenemyObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDNPCObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BombButton"), gdjs.Untitled_32sceneCode.GDBombButtonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBombButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBombButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDBombButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDBombButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBombButtonObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bomb"), gdjs.Untitled_32sceneCode.GDbombObjects1);
{gdjs.evtsExt__MakeItRain__MakeItRain.func(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDbombObjects1Objects, 10, "Up", 0.01, gdjs.evtTools.common.toString(1), gdjs.evtTools.common.toString(1), 0, 5, 0, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDguyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDguyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDenemyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDenemyObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNPCObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNPCObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDnpcspawnObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDnpcspawnObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDalertObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDalertObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbombObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbombObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBombButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBombButtonObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
