import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        offers: []
    },
    mutations: {
        setOffers(state, offers) {
            state.offers = offers;
        },
        setOfferSelected(state, offer) {
            offer.selected = true;
            // var indexSelected = 0;
            // var offerSelected;

            // state.offers.forEach((o, i) => {
            //     if (o.id === id) {
            //         o.selected = true;
            //         offerSelected = o;
            //         indexSelected = i;
            //     }
            // });

            //Vue.set(state.offers, indexSelected, offerSelected);
        },
        setOfferUnselected(state, id) {
            var indexSelected = 0;
            var offerSelected;

            state.offers.forEach((o, i) => {
                if (o.id === id) {
                    o.selected = false;
                    offerSelected = o;
                    indexSelected = i;
                }
            });

            Vue.set(state.offers, indexSelected, offerSelected);
        }
    }
})

export default store;