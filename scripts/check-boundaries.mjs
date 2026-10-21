import {readdir,readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';
async function scan(root){for(const item of await readdir(root,{withFileTypes:true})){const path=join(root,item.name);if(item.isDirectory())await scan(path);else if(/\.mjs$/.test(path)){const text=await readFile(path,'utf8');if(/(?:from\s*|import\s*\()['"][^'"]*(?:AxiomEngine|AxiomGameEngine|engine\/|SceneWorkspace)/.test(text))throw Error('Math Lab cannot import Game Engine: '+path);}}}
for(const folder of ['src','platform','app'])await scan(fileURLToPath(new URL('../'+folder,import.meta.url)));console.log('Independent Math Lab boundary passed.');
