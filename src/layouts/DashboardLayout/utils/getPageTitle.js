import { navigationConfig } from "./navigation.config";

export const getPageTitle = (pathName) => {
  for (const section of navigationConfig) {
    const matchedItem = section.items.find((item) => item.path === pathName);
    if (matchedItem) {
      return matchedItem.title;
    }
  }

  return "Dashboard";
};
