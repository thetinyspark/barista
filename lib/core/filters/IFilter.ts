import IDisplayObject from "../display/IDisplayObject";
/**
 * An IFilter object is used to apply specific filter on a DisplayObject instance
 */
export default interface IFilter{
    /**
     * Saves the current DisplayObject state before filtering.
     * @param child DisplayObject
     */
    save(child:IDisplayObject):void;

    /**
     * Applies filter to the current DisplayObject.
     * @param child DisplayObject
     */
    apply(child:IDisplayObject):void;

    /**
     * Make the DisplayObject comes back to the last saved state.
     * @param child DisplayObject
     */
    rollback(child:IDisplayObject):void;
}