gdjs.Untitled_32scene2Code = {};
gdjs.Untitled_32scene2Code.GDwastedObjects1= [];
gdjs.Untitled_32scene2Code.GDwastedObjects2= [];
gdjs.Untitled_32scene2Code.GDoofObjects1= [];
gdjs.Untitled_32scene2Code.GDoofObjects2= [];

gdjs.Untitled_32scene2Code.conditionTrue_0 = {val:false};
gdjs.Untitled_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32scene2Code.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32scene2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("oof"), gdjs.Untitled_32scene2Code.GDoofObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDoofObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDoofObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.Untitled_32scene2Code.GDoofObjects1[k] = gdjs.Untitled_32scene2Code.GDoofObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDoofObjects1.length = k;}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{


gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "tubular-bell-of-death-89485.mp3", false, 100, 1);
}}

}


};

gdjs.Untitled_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene2Code.GDwastedObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDwastedObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDoofObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDoofObjects2.length = 0;

gdjs.Untitled_32scene2Code.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32scene2Code'] = gdjs.Untitled_32scene2Code;
