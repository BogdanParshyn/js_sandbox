import { ADD, REMOVE, SET, GET } from '../action';

const LOCAL_KAY = 'students';

export default (store) => (next) => (payload) => {
    /*
    try {
        const data = JSON.parse(localStorage.getItem('students'));

        //next({ type: SET, list: JSON.parse(rawData) || [] });

        if (Array.isArray(data)) {
            next({ type: SET, list: data});
        }

    } catch (err) {}
    */

    

        next(payload);

        if(payload.type === ADD || payload.type === REMOVE) {
            const list = store.getState().students;
            localStorage.setItem(LOCAL_KAY, JSON.stringify(list));
            //console.log(store.getState().students);
        }

        if(payload.type === GET) {
            try {
                const data = JSON.parse(localStorage.getItem(LOCAL_KAY));
        
                //next({ type: SET, list: JSON.parse(rawData) || [] });
        
                if (Array.isArray(data)) {
                    next({ type: SET, list: data});
                }
        
            } catch (err) {} 
        }
  
}

