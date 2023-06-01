import { USER_ORDERS_WS_CLOSE, USER_ORDERS_WS_CONNECTING, USER_ORDERS_WS_ERROR, USER_ORDERS_WS_GET_MESSAGE } from "../actions/user-orders"
import { initialState, userOrdersReducer } from "./user-orders"

describe('user orders reducer', () => {
    const testOrders =[
        {
            ingredients: ['apple', 'pear', 'banana'],
            _id: '123',
            status: 'done',
            number: 777,
            createdAt: 'today',
            updatedAt: 'today',
            name: 'fruits'
        },
        {
            ingredients: ['tomato', 'pepper', 'cucumber'],
            _id: '321',
            status: 'pending',
            number: 666,
            createdAt: 'today',
            updatedAt: 'today',
            name: 'vegetables'
        }
    ];

    const testTotal = 22;
    const testTotalToday = 100

    it('test inital state', () => {
        expect(userOrdersReducer(undefined, {})).toEqual(initialState)
    })


    it('test user orders wsConnecting', () => {
        expect(userOrdersReducer(initialState, {
            type: USER_ORDERS_WS_CONNECTING
        })).toEqual({
            ...initialState,
            wsConnected: true
        })
    })

    it('test user orders wsGet message', () => {
        expect(userOrdersReducer(initialState, {
            type: USER_ORDERS_WS_GET_MESSAGE, 
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
        expect(userOrdersReducer(initialState, {
            type: USER_ORDERS_WS_ERROR
        })).toEqual({
            ...initialState,
            wsConnected: false
        })
    })

    it('test user orders wsClose', () => {
        expect(userOrdersReducer(initialState, {
            type: USER_ORDERS_WS_CLOSE
        })).toEqual({
            ...initialState,
            wsConnected: false
        })
    })

})