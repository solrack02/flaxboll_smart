
// ---------- import Packs
import React from 'react';
import JSON5 from 'json5';
import { FlatList } from 'react-native';

// ---------- import Local Tools
import { getStlValues, mapElements, getVarValue, pathSel } from '../project';
import { useData } from '../../..';

type Tprops = {
  pass: {
    elementProperties: any[];
    pData: any;
    itemElements: any;
    styles: any;
    args: any;
  };
};

// FlatList2 - ccc_flatList (newBase)
export const FlatList2 = (props: Tprops) => {
  // ------- set Caps Inputs
  const { elementProperties = [], pData, itemElements, styles } = props.pass;

  // ---------- get store slice (sempre chama o hook, mas só usa se pData for string)
  const dataFromStore = useData(ct => {
    if (typeof pData === 'string') return pathSel(ct, pData);
    // Retorna algo estável/leve quando NÃO for string (não será usado)
    return undefined;
  });

  // ---------- set Data (sem passar pelo useData quando não for string)
  const watchDataRaw = typeof pData === 'string' ? dataFromStore : pData;

  // Garante que a FlatList receba sempre um array
  const watchData = Array.isArray(watchDataRaw) ? watchDataRaw : [];

  // ---------- set List Item
  const renderItem = ({ item, index }: any) => (
    <>{mapElements(itemElements, { item, index })}</>
  );

  // ------- set User Element Properties (If Exists)
  const userElProps: Record<string, any> = {};
  for (const strObj of elementProperties) {
    if (!strObj || typeof strObj !== 'string') continue;

    const parsedObject = JSON5.parse(strObj);
    for (const keyProp in parsedObject) {
      const valueProp = parsedObject[keyProp];
      const [hasVar, varValue] = getVarValue(valueProp);
      userElProps[keyProp] = hasVar ? varValue : valueProp;
    }
  }

  // ------- set Styles
  const stl = getStlValues(styles);

  const allProps = {
    style: stl,
    data: watchData,
    renderItem,
    ...userElProps,
  };

  // ------- set Render
  return <FlatList {...allProps} />;
};
