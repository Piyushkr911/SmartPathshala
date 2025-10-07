import { modules } from "./modulesData";
import { subModules } from "./subModulesData";

export const getModules = async () => {
    return modules;
};

export const getSubModules = async (moduleId) => {
    return subModules.filter((s) => s.moduleId === moduleId);
};
