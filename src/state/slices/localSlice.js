import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    locals: [],
    geoJson: {},
    arquitectura: {},
    fire: {}
}

export const localSlice = createSlice({
    name: 'locals',
    initialState,
    reducers: {
        setLocals: (state, action) => {
            //console.log(action.payload);
            state.locals = action.payload
        },
        updateLocals: (state) => {
            //console.log(action.payload);
            state.locals = action.payload
        },
        setGeoJson: (state, action) => {
            //console.log('Payload geojson', action.payload);
            state.geoJson = action.payload;
        },
        updateGeoJson: (state) => {
            //console.log(action.payload);
            state.geoJson = { ...state.geoJson, geoJson: action.payload.geoJson }
        },
        setLocalsLoggout: (state) => {
            state.locals = []
            state.geoJson = {}
            state.arquitectura = {}
            state.fire = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLocalArc.fulfilled, (state, action) => {
            state.arquitectura = action.payload
        })
            .addCase(fetchLocalFire.fulfilled, (state, action) => {
                state.fire = action.payload
            })
    }
})

export const { setLocals, updateLocals, setGeoJson, updateGeoJson, setArc, setLocalsLoggout } = localSlice.actions

export default localSlice.reducer

export const fetchMarkers = createAsyncThunk('markers/rut', async (user) => {
    const response = await axios.get(`https://smu-api.herokuapp.com/api/local/rut/${user}`)
        .then((resp) => {
            const geoJson = {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": []
                }
            }

            resp.data.data.forEach((local) => {
                geoJson.data.features.push({
                    "type": "Feature",
                    "properties": local,
                    "geometry": {
                        "coordinates": [
                            `${local.longitude}`,
                            `${local.latitude}`
                        ],
                        "type": "Point"
                    }
                });
            });
            //console.log('Thunk json:', geoJson)
            return geoJson
        })
    return response
})

export const fetchLocalArc = createAsyncThunk('local/getArc', async (local) => {
    const response = await axios.get(`https://smu-api.herokuapp.com/api/view1/${local}`).then((data) => {
        //console.log('From fetch arc', data.data)
        return data.data
    }).catch((err) => {
        console.log(err)
    })
    return response
})

export const fetchLocalFire = createAsyncThunk('local/getFire', async (local) => {
    const response = await axios.get(`https://smu-api.herokuapp.com/api/view2/${local}`).then((data) => {
        //console.log('From fetch arc', data.data)
        return data.data
    }).catch((err) => {
        console.log(err)
    })
    return response
})