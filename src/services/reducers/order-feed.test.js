import { ORDER_FEED_WS_CLOSE, ORDER_FEED_WS_CONNECTING, ORDER_FEED_WS_ERROR, ORDER_FEED_WS_GET_MESSAGE } from "../actions/order-feed"
import { initialState, orderFeedReducer } from "./order-feed"

describe('order feed reducer', () => {
   
    const testOrders = [
        {
            ingredients: ['milk', 'pear', 'banana'],
            _id: '13',
            status: 'done',
            number: 77,
            createdAt: 'today',
            updatedAt: 'today',
            name: 'coctaile'
        },
        {
            ingredients: ['tomato', 'pepper', 'cucumber', 'salad'],
            _id: '32',
            status: 'pending',
            number: 66,
            createdAt: 'today',
            updatedAt: 'today',
            name: 'salad'
        }
    ];

    const testTotal = 2;
    const testTotalToday = 10;

    it('test inital state', () => {
        expect(orderFeedReducer(undefined, {})).toEqual(initialState)
    })


    it('test user orders wsConnecting', () => {
        expect(orderFeedReducer(initialState, {
            type: ORDER_FEED_WS_CONNECTING
        })).toEqual({
            ...initialState,
            wsConnected: true
        })
    })

    it('test user orders wsGet message', () => {
        expect(orderFeedReducer(initialState, {
            type: ORDER_FEED_WS_GET_MESSAGE,
            payload: {
                orders: testOrders,
                total: testTotal,
                totalToday: testTotalToday, 
                success: true
            }
        })).toEqual({
            ...initialState,
            orders: testOrders,
            total: testTotal,
            totalToday: testTotalToday
        })
    })

    it('test user orders wsError', () => {
        expect(orderFeedReducer(initialState, {
            type: ORDER_FEED_WS_ERROR
        })).toEqual({
            ...initialState,
            wsConnected: false
        })
    })

    it('test user orders wsClose', () => {
        expect(orderFeedReducer(initialState, {
            type: ORDER_FEED_WS_CLOSE
        })).toEqual({
            ...initialState,
            wsConnected: false
        })
    })

})