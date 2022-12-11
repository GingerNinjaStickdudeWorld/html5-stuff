
if (typeof gdjs.evtsExt__MakeItRain__MakeItRain !== "undefined") {
  gdjs.evtsExt__MakeItRain__MakeItRain.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MakeItRain__MakeItRain = {};
gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex2 = 0;

gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3 = 0;

gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4 = 0;

gdjs.evtsExt__MakeItRain__MakeItRain.forEachObjects2 = [];

gdjs.evtsExt__MakeItRain__MakeItRain.forEachObjects3 = [];

gdjs.evtsExt__MakeItRain__MakeItRain.forEachObjects4 = [];

gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary2 = null;

gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary3 = null;

gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary4 = null;

gdjs.evtsExt__MakeItRain__MakeItRain.forEachTotalCount2 = 0;

gdjs.evtsExt__MakeItRain__MakeItRain.forEachTotalCount3 = 0;

gdjs.evtsExt__MakeItRain__MakeItRain.forEachTotalCount4 = 0;

gdjs.evtsExt__MakeItRain__MakeItRain.repeatCount3 = 0;

gdjs.evtsExt__MakeItRain__MakeItRain.repeatCount4 = 0;

gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex3 = 0;

gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex4 = 0;

gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects1= [];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2= [];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3= [];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4= [];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5= [];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects6= [];

gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_0 = {val:false};
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__MakeItRain__MakeItRain.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = {val:false};
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__MakeItRain__MakeItRain.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3});
gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects5Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5});
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3, gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5);

{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("zorder")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5[i].resetTimer((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TimerName") : ""));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects5Objects, gdjs.randomInRange(0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5[0].getWidth()), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), ((0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5[0].getHeight())) * 2) - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("layer") : ""));
}}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__MakeItRain__MakeItRain.repeatCount4 = (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("intensity")) || 0 : 0);
for(gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex4 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex4 < gdjs.evtsExt__MakeItRain__MakeItRain.repeatCount4;++gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex4) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList2 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList3 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList4 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);

for(gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4 < gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;++gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4) {
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = 0;


gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary4 = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.push(gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary4);
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = ((( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[0].getY()) >= gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 2);
}
}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("RemoveRain")) == 0 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].deleteFromScene(runtimeScene);
}
}}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2);

for(gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3 < gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length;++gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3) {
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = 0;


gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary3 = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.push(gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary3);
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = ((( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[0].getY()) >= gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) * 2);
}
}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("RemoveRain")) == 0) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);

gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("RemoveRainAndPause")) == 1) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("MakeItRain")).setNumber(1);
}
}}

}


{



}


{


gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9647708);
}
}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].resetTimer((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TimerName") : ""));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects3Objects, gdjs.randomInRange(0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[0].getWidth()), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), ((0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[0].getHeight())) * 2) - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("StoprRainFromObject")).setNumber(1);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);

gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].timerElapsedTime((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TimerName") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TimerSpeed")) || 0 : 0)) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("RemoveRain")) == 0 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);

for(gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4 < gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;++gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4) {
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = 0;


gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary4 = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.push(gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary4);
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("GoDown")) == 1) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("StopedRain")) == 1) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].addPolarForce((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RainAngle")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, 0);
}
}}
}

}


{



}


{


gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("OutOfRange") : false);
}
}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3});
gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects5Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5});
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3, gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects5Objects, gdjs.randomInRange(0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5[0].getWidth()), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), ((0 + (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5[0].getHeight())) * 2) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) + gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("zorder")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5[i].resetTimer((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TimerName") : ""));
}
}}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MakeItRain__MakeItRain.repeatCount4 = (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("intensity")) || 0 : 0);
for(gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex4 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex4 < gdjs.evtsExt__MakeItRain__MakeItRain.repeatCount4;++gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex4) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList7(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList9 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList10 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList11 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);

for(gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4 < gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;++gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4) {
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = 0;


gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary4 = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.push(gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary4);
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = ((( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[0].getY()) <= 0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[0].getHeight()) * 2);
}
}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("RemoveRain")) == 0 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].deleteFromScene(runtimeScene);
}
}}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2);

for(gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3 < gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length;++gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3) {
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = 0;


gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary3 = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.push(gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary3);
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = ((( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[0].getY()) <= 0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[0].getHeight()) * 2);
}
}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("RemoveRain")) == 0) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);

gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("RemoveRainAndPause")) == 1) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("MakeItRain")).setNumber(1);
}
}}

}


{


gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9657620);
}
}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].resetTimer((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TimerName") : ""));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects3Objects, gdjs.randomInRange(0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[0].getWidth()), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), ((0 + (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[0].getHeight())) * 2) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) + gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("layer") : ""));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);

gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].timerElapsedTime((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TimerName") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TimerSpeed")) || 0 : 0)) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("RemoveRain")) == 0 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);

for(gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4 < gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;++gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4) {
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = 0;


gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary4 = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.push(gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary4);
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("GoDown")) == 1) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("StopedRain")) == 1) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].addPolarForce(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RainAngle")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, 0);
}
}}
}

}


{


gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("OutOfRange") : false);
}
}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3});
gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects5Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5});
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3, gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects5Objects, ((0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5[0].getWidth())) * 2) - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)), gdjs.randomInRange(0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5[0].getHeight()), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("zorder")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5[i].resetTimer((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TimerName") : ""));
}
}}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MakeItRain__MakeItRain.repeatCount4 = (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("intensity")) || 0 : 0);
for(gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex4 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex4 < gdjs.evtsExt__MakeItRain__MakeItRain.repeatCount4;++gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex4) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList14(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList16 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList17 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList18 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);

for(gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4 < gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;++gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4) {
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = 0;


gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary4 = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.push(gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary4);
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = ((( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[0].getX()) >= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[0].getWidth()) * 2);
}
}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("RemoveRain")) == 0 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].deleteFromScene(runtimeScene);
}
}}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2);

for(gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3 < gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length;++gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3) {
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = 0;


gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary3 = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.push(gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary3);
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = ((( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[0].getX()) >= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[0].getWidth()) * 2);
}
}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("RemoveRain")) == 0) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);

gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("RemoveRainAndPause")) == 1) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("MakeItRain")).setNumber(1);
}
}}

}


{


gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9665452);
}
}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].resetTimer((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TimerName") : ""));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects3Objects, ((0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[0].getWidth())) * 2) - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)), gdjs.randomInRange(0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[0].getHeight()), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("layer") : ""));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);

gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].timerElapsedTime((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TimerName") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TimerSpeed")) || 0 : 0)) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("RemoveRain")) == 0 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList15(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3);

for(gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4 < gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;++gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4) {
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = 0;


gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary4 = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex4];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.push(gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary4);
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("GoDown")) == 1) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].getVariables().get("__MakeItRain").getChild("StopedRain")) == 1) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].addPolarForce((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RainAngle")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, 0);
}
}}
}

}


{


gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("OutOfRange") : false);
}
}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList19(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2});
gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects4Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4});
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList21 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2, gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects4Objects, (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + ((( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[0].getWidth()) * 2)) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)), gdjs.randomInRange(0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[0].getHeight()), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("layer") : ""));
}{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("zorder")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4[i].resetTimer((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TimerName") : ""));
}
}}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList22 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MakeItRain__MakeItRain.repeatCount3 = (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("intensity")) || 0 : 0);
for(gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex3 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex3 < gdjs.evtsExt__MakeItRain__MakeItRain.repeatCount3;++gdjs.evtsExt__MakeItRain__MakeItRain.repeatIndex3) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList21(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList23 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList24 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList25 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList26 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2);

for(gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3 < gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length;++gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3) {
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = 0;


gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary3 = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.push(gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary3);
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = ((( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[0].getX()) <= 0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[0].getWidth()) * 2);
}
}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("RemoveRain")) == 0 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].deleteFromScene(runtimeScene);
}
}}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects1);

for(gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex2 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex2 < gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects1.length;++gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex2) {
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length = 0;


gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary2 = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects1[gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex2];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.push(gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary2);
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = ((( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[0].getX()) <= 0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[0].getWidth()) * 2);
}
}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].getVariables().get("__MakeItRain").getChild("RemoveRain")) == 0) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList27 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2);

gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].getVariables().get("__MakeItRain").getChild("RemoveRainAndPause")) == 1) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length = k;}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].getVariables().get("__MakeItRain").getChild("MakeItRain")).setNumber(1);
}
}}

}


{


gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9674028);
}
}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].resetTimer((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TimerName") : ""));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__MakeItRain__MakeItRain.mapOfGDgdjs_46evtsExt_95_95MakeItRain_95_95MakeItRain_46GDObjectObjects2Objects, (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + ((( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[0].getWidth()) * 2)) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)), gdjs.randomInRange(0 - (( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[0].getHeight()), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("layer") : ""));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2);

gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].timerElapsedTime((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TimerName") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("TimerSpeed")) || 0 : 0)) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].getVariables().get("__MakeItRain").getChild("RemoveRain")) == 0 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList22(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2);

for(gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3 = 0;gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3 < gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length;++gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3) {
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = 0;


gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary3 = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2[gdjs.evtsExt__MakeItRain__MakeItRain.forEachIndex3];
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.push(gdjs.evtsExt__MakeItRain__MakeItRain.forEachTemporary3);
gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = false;
gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("MakeItRain")) == 1 ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("GoDown")) == 1) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}if ( gdjs.evtsExt__MakeItRain__MakeItRain.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariableNumber(gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].getVariables().get("__MakeItRain").getChild("StopedRain")) == 1) ) {
        gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val = true;
        gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[k] = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = k;}}
}
if (gdjs.evtsExt__MakeItRain__MakeItRain.condition2IsTrue_0.val) {
{for(var i = 0, len = gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3[i].addPolarForce((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("RainAngle")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, 0);
}
}}
}

}


{


gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("OutOfRange") : false);
}
}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList26(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList28 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("direction") : "") == "Down");
}
}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("direction") : "") == "Up");
}
}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("direction") : "") == "Right");
}
}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList20(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1 = gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0;
gdjs.evtsExt__MakeItRain__MakeItRain.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("direction") : "") == "Left");
}
}if (gdjs.evtsExt__MakeItRain__MakeItRain.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__MakeItRain__MakeItRain.eventsList27(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__MakeItRain__MakeItRain.eventsList29 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MakeItRain__MakeItRain.eventsList28(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__MakeItRain__MakeItRain.func = function(runtimeScene, Object, speed, direction, TimerSpeed, TimerName, layer, zorder, intensity, RainAngle, OutOfRange, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "speed") return speed;
if (argName === "direction") return direction;
if (argName === "TimerSpeed") return TimerSpeed;
if (argName === "TimerName") return TimerName;
if (argName === "layer") return layer;
if (argName === "zorder") return zorder;
if (argName === "intensity") return intensity;
if (argName === "RainAngle") return RainAngle;
if (argName === "OutOfRange") return OutOfRange;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects1.length = 0;
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects2.length = 0;
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects3.length = 0;
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects4.length = 0;
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects5.length = 0;
gdjs.evtsExt__MakeItRain__MakeItRain.GDObjectObjects6.length = 0;

gdjs.evtsExt__MakeItRain__MakeItRain.eventsList29(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__MakeItRain__MakeItRain.registeredGdjsCallbacks = [];