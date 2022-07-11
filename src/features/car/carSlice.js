import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y", "Solar Panels", "Solar Roof"]
}

const carSLice = createSlice({
    name: "car",
    initialState,
    reducers: {},
})

export const selectCars = state => state.car.cars

export default carSLice.reducer