import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from "react-simple-maps";

export const Map = () => {
    return (
        <ComposableMap>
            <Geographies geography="../assets/features.json">
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
        </ComposableMap>
    );
};
