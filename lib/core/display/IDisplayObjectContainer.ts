import IDisplayObject from "./IDisplayObject";

export default interface IDisplayObjectContainer extends IDisplayObject {
  /**
   * Adds a child IDisplayObject instance to this IDisplayObjectContainer instance.
   * The child is added to the front (top) of all other children in this IDisplayObjectContainer instance.
   * To add a child to a specific index position, use the addChildAt() method.
   * If you add a child object that already has a different IDisplayObjectContainer as a parent,
   * the object is removed from the children list of the other IDisplayObjectContainer.
   **/
  addChild(child: IDisplayObject);
  /**
   * Adds an IDisplayObject instance to this IDisplayObjectContainer instance.
   * The child is added at the specified index position.
   * An index of 0 represents the back (bottom) of the IDisplayObjectContainer's display list for.
   **/
  addChildAt(child: IDisplayObject, index: number);
  /**
   * Removes the specified IDisplayObject child from the IDisplayObjectContainer's children list.
   */
  removeChild(child: IDisplayObject): IDisplayObject;
  /**
   * Removes an IDisplayObject child at the specified index position from the IDisplayObjectContainer's children list.
   */
  removeChildAt(index: number): IDisplayObject;
  /**
   * Returns IDisplayObjectContainer's children list
   */
  getChildren(): IDisplayObject[];
  /**
   * Returns specified IDisplayObject's position inside the IDisplayObjectContainer's children list.
   */
  getChildIndex(child: IDisplayObject): number;
  /**
   * Tells whether or not the specified IDisplayObject is a child of the IDisplayObjectContainer.
   */
  contains(child: IDisplayObject): boolean;
  /**
   * Removes all IDisplayObject children of the IDisplayObjectContainer children list.
   */
  removeChildren();
}
