/** dirty tiny helpers for rendering logic  */

/** */
const ConditionalWrapper = ({ condition, wrapperTrue, wrapperFalse, children }) => condition ? wrapperTrue(children) : wrapperFalse(children);

/** */
const ConditionalRender = ({ condition, renderTrue =  null, renderFalse = null }) =>  condition ? renderTrue : renderFalse;

export { ConditionalWrapper, ConditionalRender };
