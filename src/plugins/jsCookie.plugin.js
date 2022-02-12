import jsCookie from "js-cookie";
import Vue from "vue";
const cookie = {
    set(key , value){
        jsCookie.set(key , value);
    },
    get(key){
        return jsCookie.get(key)
    },
    remove(key){
        jsCookie.remove(key)
    }
}


Vue.prototype.$cookie = cookie

export default cookie

