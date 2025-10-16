

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = "a0-tela-azul-clara";

          let args: any = [];

          const screens = [
            

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:'a0-tela-azul-clara',

          styles:[{ backgroundColor: 'lightgreen', flex: 1, padding: 20, alignItems: 'center', justifyContent: 'flex-start' }],

          screenElements:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { color: 'lightcoral', fontSize: 40 }
          ],

          children: [
            'Navbar'
          ],

          args,

        }}/>, 
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{ width: 240, height: 150 }],

      URIvariablePath:['https://images.pexels.com/photos/20775629/pexels-photo-20775629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],

      args,
    }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
color: 'black',
fontSize: 14,

}],

          path: ['sc.A0.forms.iptsChanges.nome'],

          funcsArray: [(txt) => { tools.setData({ path: 'sc.A0.forms.iptsChanges.nome', value: txt }); console.log({txt}); }],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[{ paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8, alignItems: 'center', justifyContent: 'center', backgroundColor: '#006400' }],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { fontSize: 16, fontWeight: '600', color: '#fff' }
          ],

          children: [
            'Salvar'
          ],

          args,

        }}/>],

            args,
          }}/>
        , (...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: [{name: "Juliana", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"}, {name: "Carlos", img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"}],

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[
{
backgroundColor: 'white',
justifyContent: 'center',
minHeight: 22,
width: "100%",

}],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            "$arg_name"
          ],

          args,

        }}/>],

            args,
          }}/>
        
          ],

      styles:[
{
backgroundColor: 'white',
justifyContent: 'center',
minHeight: 22,
                width: "100%",
}
],    args,
        }}/>],

          functions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => (
 {
 'all': { 
'colors': { 
'primary': "#fff", 'secondary': "#0064fe" } 
, 
'cond1': false, 
'func1': (nativeEvent)=>console.log(nativeEvent), 
'Comp1': <RN.Text style={{color: "darkred"}}>---</RN.Text>, 
'lists': { 
'lt1': [{name: "João", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name: "Luciana"},{name: "Pedro"}], 
'lst2': [{name: "Tarefa 1", date: "21/03/25"},{name: "Tarefa 2", date: "21/03/25"},{name: "Tarefa 3", date: "24/03/25"}], 'lst3': [{name: "Task 1", check: false},{name: "Task 2", check: false}] } 
, 
'name': "Name:", 
'dataToSet': {name: "Carlos", phone: "1111"}, 
'toggles': { 
'box1': true, 'checkbox1': false } 
, 'firebaseConfig': {
  apiKey: "AIzaSyDjAfyEUADq7EaRyFWlGFjP1Eoox9LJHgI",
  authDomain: "devs-tests-95208.firebaseapp.com",
  projectId: "devs-tests-95208",
  storageBucket: "devs-tests-95208.appspot.com",
  messagingSenderId: "750912250366",
  appId: "1:750912250366:web:4629eac789a718a74220af"
} } 
 
} 
 );
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            async (...args) =>
  functions.firebase.fireInit({ args, pass:{
   fbConfig: `all.firebaseConfig`,

        }})
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
