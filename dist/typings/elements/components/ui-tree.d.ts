import { View } from 'aurelia-framework';
import { UITreeOptions, UITreeModel } from "../../utils/ui-tree-model";
export declare class UITree {
    element: Element;
    constructor(element: Element);
    created(owningView: View, myView: View): void;
    bind(bindingContext: Object, overrideContext: Object): void;
    attached(): void;
    detached(): void;
    unbind(): void;
    value: string;
    model: any[];
    options: UITreeOptions;
    private root;
    private searchText;
    private selectedNode;
    private searchable;
    private ignoreChange;
    valueChanged(newValue: any): void;
    optionsChanged(newValue: any): void;
    modelChanged(newValue: any): void;
    private readonly rootNodes;
    getChecked(nodes: any, retVal?: {
        checked: any[];
        partial: any[];
        unchecked: any[];
    }): {
        checked: any[];
        partial: any[];
        unchecked: any[];
    };
    private findNode(obj, id, field?, value?, expand?);
    private itemSelect(node);
    private itemChecked(node);
    private itemClicked(node);
    private scrollIntoView();
    private searchTextChanged(newValue);
    private filter(obj, value, parentVisible?);
}
export declare class TreeNode {
    element: Element;
    constructor(element: Element);
    created(owningView: View, myView: View): void;
    bind(bindingContext: Object, overrideContext: Object): void;
    attached(): void;
    detached(): void;
    unbind(): void;
    node: UITreeModel;
    options: UITreeOptions;
    private fireClicked();
}
