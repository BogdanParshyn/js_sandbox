export default (store) => (next) => (payload) => {
    //console.log(stlre, next, payload);
    console.log(payload.type, payload);
    console.log(store.getState().counter.count);
    next(payload);
}