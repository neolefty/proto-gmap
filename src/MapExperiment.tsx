import React, {CSSProperties} from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, GoogleMapProps } from "react-google-maps"
import { WithScriptjsProps } from 'react-google-maps/lib/withScriptjs'
import {WithGoogleMapProps} from 'react-google-maps/lib/withGoogleMap'

interface MapExperimentProps {
    lat: number
    lng: number
}

export const MapExperiment = (props: MapExperimentProps) => (
    <WrappedMap{...addProps(props)} />
)

function addProps<T>(props: T, containerStyle?: CSSProperties): T & WithScriptjsProps & WithGoogleMapProps {
    const cStyle = containerStyle || {
        height: '100vh'
    }
    return {
        ...props,
        // WithScriptjsProps
        loadingElement: (<div style={{ height: '100%' }} />),
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAJOFgZkGQo7dlfFovuEIpMdp-N-y_wBHc&v=3.exp&libraries=geometry,drawing,places",
        // WithGoogleMapProps
        containerElement: (<div style={cStyle} />),
        mapElement: (<div style={{ height: '100%' }} />),
    }
}

const WrappedMap = withScriptjs(withGoogleMap(
    (props: MapExperimentProps & WithScriptjsProps & WithGoogleMapProps) => {
        const loc = {lat: props.lat, lng: props.lng}
        const mapProps: GoogleMapProps = {
            defaultZoom: 8,
            defaultCenter: loc,
        }
        return (
            <GoogleMap {...mapProps}>
                <Marker position={loc}/>
            </GoogleMap>
        )
    }
))