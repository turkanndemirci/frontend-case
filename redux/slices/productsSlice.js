import { createSlice, current } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    newAddedProducts: [],
    existingProducts: [],
  },
  reducers: {
    setExistingProducts: (state, action) => {
      state.existingProducts = [];
      action.payload.forEach((element) => {
        state.existingProducts?.push(element);
      });
    },
    setEmpty: (state, action) => {
      state.newAddedProducts = [];
    },
    addProduct: (state, action) => {
      state.newAddedProducts.push(action.payload);
    },
    removeProduct: (state, action) => {
      //do not use filter it creates new array, i need to mutate existing
      state.newAddedProducts.splice(
        state.newAddedProducts.findIndex(
          (item) => item.productName === action.payload
        ),
        1
      );
    },
    updateProduct: (state, action) => {
      const key = action.payload.key;
      const persistedIndex = state.newAddedProducts.findIndex(
        (item) => item.productName === action.payload.productName
      );
      if (persistedIndex !== undefined && persistedIndex !== -1) {
        if (key === 'licenceCode') {
          state.newAddedProducts[persistedIndex] = {
            ...state.newAddedProducts[persistedIndex],
            licenceCode: action.payload.value,
          };
        } else {
          state.newAddedProducts[persistedIndex] = {
            ...state.newAddedProducts[persistedIndex],
            productDescription: action.payload.value,
          };
        }
      }
    },
    removeExistingProduct: (state, action) => {
      state.existingProducts.splice(
        state.existingProducts.findIndex(
          (item) => item.productName === action.payload
        ),
        1
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  removeProduct,
  updateProduct,
  setEmpty,
  setExistingProducts,
  removeExistingProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
