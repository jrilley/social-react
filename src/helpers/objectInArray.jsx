export const objectInArray = (obj, objProp, action, newObjProp) => {
    return obj.map(u => {
        if (u[objProp] === action) {
            return {...u, ...newObjProp}
        }
        return u;
    })
}