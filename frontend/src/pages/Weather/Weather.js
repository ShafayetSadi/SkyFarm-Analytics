import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import Menu from "../../components/Menu/Menu";

const data_ = {
    "latitude": 24,
    "longitude": 90,
    "generationtime_ms": 0.0749826431274414,
    "utc_offset_seconds": 0,
    "timezone": "GMT",
    "timezone_abbreviation": "GMT",
    "elevation": 11,
    "hourly_units": {
    "time": "iso8601",
        "temperature_2m": "°C",
        "relative_humidity_2m": "%",
        "dew_point_2m": "°C",
        "apparent_temperature": "°C",
        "precipitation_probability": "%"
},
    "hourly": {
    "time": [
        "2024-10-03T00:00",
        "2024-10-03T01:00",
        "2024-10-03T02:00",
        "2024-10-03T03:00",
        "2024-10-03T04:00",
        "2024-10-03T05:00",
        "2024-10-03T06:00",
        "2024-10-03T07:00",
        "2024-10-03T08:00",
        "2024-10-03T09:00",
        "2024-10-03T10:00",
        "2024-10-03T11:00",
        "2024-10-03T12:00",
        "2024-10-03T13:00",
        "2024-10-03T14:00",
        "2024-10-03T15:00",
        "2024-10-03T16:00",
        "2024-10-03T17:00",
        "2024-10-03T18:00",
        "2024-10-03T19:00",
        "2024-10-03T20:00",
        "2024-10-03T21:00",
        "2024-10-03T22:00",
        "2024-10-03T23:00"
    ],
        "temperature_2m": [
        26.5,
        26.4,
        26.6,
        26.7,
        27,
        26.9,
        26.9,
        27.2,
        26.9,
        26.4,
        26.1,
        26,
        25.7,
        25.6,
        25.6,
        25.5,
        25.3,
        25.2,
        25.1,
        25.2,
        25.2,
        25.1,
        25.3,
        25.4
    ],
        "relative_humidity_2m": [
        96,
        96,
        94,
        93,
        92,
        93,
        94,
        92,
        92,
        93,
        93,
        94,
        95,
        95,
        95,
        96,
        96,
        97,
        97,
        97,
        97,
        97,
        96,
        96
    ],
        "dew_point_2m": [
        25.8,
        25.7,
        25.6,
        25.5,
        25.6,
        25.7,
        25.8,
        25.8,
        25.5,
        25.2,
        24.9,
        24.9,
        24.9,
        24.8,
        24.8,
        24.8,
        24.6,
        24.7,
        24.6,
        24.7,
        24.7,
        24.6,
        24.6,
        24.7
    ],
        "apparent_temperature": [
        33,
        33,
        33,
        32.9,
        33.1,
        32.9,
        33.2,
        33.5,
        32.9,
        32.3,
        31.9,
        31.8,
        31.6,
        31.4,
        31.4,
        31.5,
        31.2,
        30.9,
        30.7,
        30.8,
        30.9,
        30.8,
        31,
        31.1
    ],
        "precipitation_probability": [
        80,
        90,
        85,
        88,
        88,
        95,
        98,
        90,
        95,
        90,
        90,
        73,
        65,
        60,
        60,
        75,
        73,
        68,
        80,
        75,
        78,
        78,
        73,
        85
    ]
}
}

const data = data_.hourly.time.map((time, index) => ({
    time,
    temperature_2m: data_.hourly.temperature_2m[index],
    relative_humidity_2m: data_.hourly.relative_humidity_2m[index],
    dew_point_2m: data_.hourly.dew_point_2m[index],
    apparent_temperature: data_.hourly.apparent_temperature[index],
    precipitation_probability: data_.hourly.precipitation_probability[index]
}));

    const Weather = () => {
        return (
            <div className="floodMapContainer mx-auto p-6 text-gray-200 bg-gray-900 min-h-screen relative">
                <div className=' absolute top-5 left-5'>
                    <Menu />
                </div>
                <section className="map-container">

                    <div className="iframe-container mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-green-400">
                            SKY FARM ANALYTICS
                        </h2>
                        <div className="overlay bg-gray-900 text-center text-4xl pt-10  font-bold text-blue-500">
                            Real-Time Weather Update
                        </div>
                        <div className="mt-36">
                        <ResponsiveContainer width="100%" height={500}>
                            <LineChart
                                data={data}
                                margin={{top: 10, right: 30, left: 0, bottom: 0}}
                            >
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="time"/>
                                <YAxis
                                    yAxisId="left"
                                    orientation="left"
                                    stroke="#8884d8"
                                    label={{value: '°C', angle: -90, position: 'insideLeft'}}
                                    domain={[25, 'auto']}
                                />
                                <YAxis
                                    yAxisId="right"
                                    orientation="right"
                                    stroke="#82ca9d"
                                    label={{value: '%', angle: -90, position: 'insideRight'}}
                                />
                                <Tooltip/>
                                <Legend/>
                                <Line
                                    yAxisId="left"
                                    type="monotone"
                                    dataKey="temperature_2m"
                                    stroke="#8884d8"
                                    activeDot={{r: 8}}
                                />
                                <Line
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="relative_humidity_2m"
                                    stroke="#82ca9d"
                                />
                                <Line
                                    yAxisId="left"
                                    type="monotone"
                                    dataKey="dew_point_2m"
                                    stroke="#ff7300"
                                />
                                <Line
                                    yAxisId="left"
                                    type="monotone"
                                    dataKey="apparent_temperature"
                                    stroke="#387908"
                                />
                                <Line
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="precipitation_probability"
                                    stroke="#0000ff"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                        </div>
                    </div>
                </section>
            </div>
        );
    };
export default Weather;