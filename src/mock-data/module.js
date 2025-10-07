import { modules } from "./moduledata";
import {subModules}from './submoduledata'
export const getModules = async () => {
    return modules;
};

export const getSubModules = async (moduleId) => {
    return subModules.filter((s) => s.moduleId === moduleId);
};
