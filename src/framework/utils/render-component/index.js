import {isUndefined} from "framework/utils/log";


const renderComponent = (component) => {
    if (!isUndefined(component.onInit)) component.onInit();
    component.render();
    if (!isUndefined(component.afterInit)) component.afterInit();
};

export {renderComponent};
