import { addIngredientToCart, cleanCart, closeModal, deleteIngredient, GET_INGREDIENTS_DATA_FAILED, GET_INGREDIENTS_DATA_REQUEST, GET_INGREDIENTS_DATA_SUCCESS, GET_ORDER_DATA_FAILED, GET_ORDER_DATA_REQUEST, GET_ORDER_DATA_SUCCESS, replaceIngredient, showDetailIngredient, switchTab,  } from "../actions";
import {constructorReducer, initialState} from "./burger-constructor";

describe('burgerConstructor reducer', () => {
    const testIngredients = [
        {
            _id: '111111',
            name: 'just bun',
            type: 'bun',
            proteins: 100,
            fat: 20,
            carbohydrates: 30,
            calories: 200,
            price: 250,
            image: 'https://url/image.jpg',
            image_mobile: 'https://url/image-mobile.jpg',
            image_large: 'https://url/image-large.jpg'
        },
        {
            _id: '22222',
            name: 'sweet sauce',
            type: 'sauce',
            proteins: 20,
            fat: 22,
            carbohydrates: 32,
            calories: 120,
            price: 130,
            image: 'https://url/image1.jpg',
            image_mobile: 'https://url/image1-mobile.jpg',
            image_large: 'https://url/image1-large.jpg'
        },
        {
            _id: '33333333',
            name: 'chicken cutlet',
            type: 'main',
            proteins: 150,
            fat: 72,
            carbohydrates: 150,
            calories: 320,
            price: 130,
            image: 'https://url/image2.jpg',
            image_mobile: 'https://url/image2-mobile.jpg',
            image_large: 'https://url/image2-large.jpg'
        }
    ]

    const testDetailIngredient = {
             _id: '22222',
            name: 'sweet sauce',
            proteins: 20,
            fat: 22,
            carbohydrates: 32,
            calories: 120,
            image: 'https://url/image1.jpg'
    }

    const testCartIngredients = [
        {
            _id: '111111',
            name: 'just bun',
            type: 'bun',
            price: 250,
            image: 'https://url/image.jpg'
     
        },
        {
            _id: '22222',
            name: 'sweet sauce',
            type: 'sauce',
            price: 130,
            key: '2',
            image: 'https://url/image1.jpg'
        },
        {
            _id: '33333333',
            name: 'chicken cutlet',
            type: 'main',
            price: 130,
            key: '3',
            image: 'https://url/image2.jpg'
        }
    ]

    it('test inital state', () => {
        expect(constructorReducer(undefined, {})).toEqual(initialState)
    })

    it('test get ingredients data request', () => {
        expect(constructorReducer(initialState, {
            type: GET_INGREDIENTS_DATA_REQUEST
        })).toEqual({
            ...initialState,
            getIngredientsRequest: true
        })
    })

    it('test get ingredients success', () => {
        expect(constructorReducer(initialState, {
            type: GET_INGREDIENTS_DATA_SUCCESS,
            ingredients: testIngredients
        })).toEqual({
            ...initialState,
            getIngredientsRequest: false,
            ingredients: testIngredients
        })
    })

    it('test get ingredients failed', () => {
        expect(constructorReducer(initialState, {
            type: GET_INGREDIENTS_DATA_FAILED
        })).toEqual({
            ...initialState,
            getIngredientsFailed: true
        })
    })

    it('test show detail ingredient', () => {
        const result = constructorReducer(initialState, showDetailIngredient(testDetailIngredient));
        expect(result).toEqual({
            ...initialState,
            detailIngredient: testDetailIngredient
        })
    })

    it('test close modal', () => {
        const result = constructorReducer(initialState, closeModal());
        expect(result).toEqual({
            ...initialState,
            detailIngredient: null,
            order: null
        })
    })

    it('test add ingredient to cart', () => {
        //Корзина пустая, добавлются булки
        expect(constructorReducer(initialState, addIngredientToCart(testCartIngredients[0], '1'))
        ).toEqual({
            ...initialState,
            cart: { 
                fillings: [],
                top: testCartIngredients[0],
                bottom: testCartIngredients[0]
            }
        })

        //Корзина пустая, добавляется одна начинка
        expect(constructorReducer(initialState, addIngredientToCart(testCartIngredients[1], '2'))
        ).toEqual({
            ...initialState,
            cart: {
                top: null,
                bottom: null,
                fillings: [testCartIngredients[1]]
            }
        })

        //В корзину добавлены булки, добавляется одна начинка
        expect(constructorReducer({
            ...initialState,
            cart: {
                top: testCartIngredients[0],
                bottom: testCartIngredients[0],
                fillings: []
            }
        }, addIngredientToCart(testCartIngredients[1], '2'))
        ).toEqual({
            ...initialState,
            cart: {
                top: testCartIngredients[0],
                bottom: testCartIngredients[0],
                fillings: [testCartIngredients[1]]
            }
        })

        //В корзину добавлены булки и одна начинка, добавляется вторая начинка
        expect(constructorReducer({
            ...initialState,
            cart: {
                top: testCartIngredients[0],
                bottom: testCartIngredients[0],
                fillings: [testCartIngredients[1]]
            }
        }, addIngredientToCart(testCartIngredients[2], '3'))
        ).toEqual({
            ...initialState,
            cart: {
                top: testCartIngredients[0],
                bottom: testCartIngredients[0],
                fillings: [testCartIngredients[1], testCartIngredients[2]]
            }
        })

        //В корзину дабавлена одна начинка, добавляется вторая начинка
        expect(constructorReducer({
            ...initialState,
            cart: {
                top: null,
                bottom: null,
                fillings: [testCartIngredients[1]]
            }
        }, addIngredientToCart(testCartIngredients[2], '3'))
        ).toEqual({
            ...initialState,
            cart: {
                top: null,
                bottom: null,
                fillings: [testCartIngredients[1], testCartIngredients[2]]
            }
        })
    })


    it('get order data request', () => {
        expect(constructorReducer(initialState, {
            type: GET_ORDER_DATA_REQUEST
        })).toEqual({
            ...initialState,
            getOrderDataRequest: true
        })
    })

    it('get order data success', () => {
        expect(constructorReducer(initialState, {
            type: GET_ORDER_DATA_SUCCESS,
            order: 1234
        })).toEqual({
            ...initialState,
            getOrderDataRequest: false,
            order: {
                id: 1234
            }
        })
    })

    it('get order data failed', () => {
        expect(constructorReducer(initialState, {
            type: GET_ORDER_DATA_FAILED
        })).toEqual({
            ...initialState,
            getOrderDataFailed: true
        })
    })

    it('test delete ingredient from cart', () => {
        // Есть булки и одна начинка
        expect(constructorReducer({
            ...initialState,
            cart: {
                top: testCartIngredients[0],
                bottom: testCartIngredients[0],
                fillings: [testCartIngredients[1]]
            },
        }, deleteIngredient('2'))
        ).toEqual({
            ...initialState,
            cart: {
                top: testCartIngredients[0],
                bottom: testCartIngredients[0],
                fillings: []
            }
        })

        // Есть булки и две начинки
        expect(constructorReducer({
            ...initialState,
            cart: {
                top: testCartIngredients[0],
                bottom: testCartIngredients[0],
                fillings: [testCartIngredients[1], testCartIngredients[2]]
            },
        }, deleteIngredient('3'))
        ).toEqual({
            ...initialState,
            cart: {
                top: testCartIngredients[0],
                bottom: testCartIngredients[0],
                fillings: [testCartIngredients[1]]
            }
        })

        // Нет булок, есть две начинки
        expect(constructorReducer({
            ...initialState,
            cart: {
                top: null,
                bottom: null,
                fillings: [testCartIngredients[1], testCartIngredients[2]]
            },
        }, deleteIngredient('3'))
        ).toEqual({
            ...initialState,
            cart: {
                top: null,
                bottom: null,
                fillings: [testCartIngredients[1]]
            }
        })

        // Нет булок, есть одна начинка
        expect(constructorReducer({
            ...initialState,
            cart: {
                top: null,
                bottom: null,
                fillings: [testCartIngredients[1]]
            },
        }, deleteIngredient('2'))
        ).toEqual({
            ...initialState,
            cart: {
                top: null,
                bottom: null,
                fillings: []
            }
        })
    })

    it('test clean cart', () => {
        expect(constructorReducer(initialState, cleanCart()))
        .toEqual({
            ...initialState,
            cart: {
                top: null,
                fillings: [],
                bottom: null,
            }
        })
    })

    it('test replace ingredients', () => {
        //В корзине булки и две начинки
        expect(constructorReducer({
            ...initialState,
            cart: {
                top: testCartIngredients[0],
                bottom: testCartIngredients[0],
                fillings: [testCartIngredients[1], testCartIngredients[2]]
            },
        }, replaceIngredient('2', '3')))
        .toEqual({
            ...initialState,
            cart: {
                top: testCartIngredients[0],
                bottom: testCartIngredients[0],
                fillings: [testCartIngredients[2], testCartIngredients[1]]
            }
        })

        // В корзине нет булок, есть две начинки
        expect(constructorReducer({
            ...initialState,
            cart: {
                top: null,
                bottom: null,
                fillings: [testCartIngredients[1], testCartIngredients[2]]
            },
        }, replaceIngredient('2', '3')))
        .toEqual({
            ...initialState,
            cart: {
                top: null,
                bottom: null,
                fillings: [testCartIngredients[2], testCartIngredients[1]]
            }
        })
    })

    it('test switch tab', () => {
        // Выбрана категория булок, tab на соусы
        expect(constructorReducer({
            ...initialState,
            tabs:[ 
                {
                    tab: 'bun',
                    isActive: true
                },
                {
                    tab: 'sauce',
                    isActive: false
                },
                {
                    tab: 'main',
                    isActive: false
                }
            ]
        }, switchTab('sauce', true))
        ).toEqual({
            ...initialState,
            tabs:[ 
                {
                    tab: 'bun',
                    isActive: false
                },
                {
                    tab: 'sauce',
                    isActive: true
                },
                {
                    tab: 'main',
                    isActive: false
                }
            ]
        })

        // Выбрана категория соусов, tab на начинки 
        expect(constructorReducer({
            ...initialState,
            tabs:[ 
                {
                    tab: 'bun',
                    isActive: false
                },
                {
                    tab: 'sauce',
                    isActive: true
                },
                {
                    tab: 'main',
                    isActive: false
                }
            ]
        }, switchTab('main', true))
        ).toEqual({
            ...initialState,
            tabs:[ 
                {
                    tab: 'bun',
                    isActive: false
                },
                {
                    tab: 'sauce',
                    isActive: false
                },
                {
                    tab: 'main',
                    isActive: true
                }
            ]
        })

        // Выбрана категория начинок, tab на булки
        expect(constructorReducer({
            ...initialState,
            tabs:[ 
                {
                    tab: 'bun',
                    isActive: false
                },
                {
                    tab: 'sauce',
                    isActive: false
                },
                {
                    tab: 'main',
                    isActive: true
                }
            ]
        }, switchTab('bun', true))
        ).toEqual({
            ...initialState,
            tabs:[ 
                {
                    tab: 'bun',
                    isActive: true
                },
                {
                    tab: 'sauce',
                    isActive: false
                },
                {
                    tab: 'main',
                    isActive: false
                }
            ]
        })
    })
})