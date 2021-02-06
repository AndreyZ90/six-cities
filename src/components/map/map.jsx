import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {ClassPrefix, MapPin, MapPinActive} from '@/helpers/const';

export default class Map extends Component {
  constructor(props) {
    super(props);

    this._mapRef = createRef();

    this._leaflet = null;
    this._icon = null;
    this._activeIcon = null;
    this._titleLayer = null;
    this._layerGroupMarkers = null;
  }

  _updateLayerGroupMarkers(geoCoords, activeGeoCoords) {
    if (this._layerGroupMarkers) {
      this._layerGroupMarkers.clearLayers();
    }

    geoCoords.map((coords) => this._layerGroupMarkers.addLayer(leaflet.marker(coords, {icon: this._icon})));

    if (activeGeoCoords.length > 0) {
      const activeMarkerLayer = leaflet.marker(activeGeoCoords, {icon: this._activeIcon});
      this._layerGroupMarkers.addLayer(activeMarkerLayer);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.activeGeoCoords === this.props.activeGeoCoords) {
      return false;
    }
    this._updateLayerGroupMarkers(nextProps.geoCoords, nextProps.activeGeoCoords);
    return true;
  }

  componentDidMount() {
    const {geoCoords, activeGeoCoords, center, zoom} = this.props;

    this._icon = leaflet.icon({iconUrl: MapPin.src, size: MapPin.size});
    this._activeIcon = leaflet.icon({iconUrl: MapPinActive.src, size: MapPinActive.size});

    this._titleLayer = leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    });

    this._layerGroupMarkers = leaflet.layerGroup();
    this._updateLayerGroupMarkers(geoCoords, activeGeoCoords);

    this._leaflet = leaflet.map(this._mapRef.current, {
      center,
      zoom,
      zoomControl: false,
      layers: [this._titleLayer, this._layerGroupMarkers]
    });
  }

  componentDidUpdate(prevProps) {
    const [prevLattiude, prevLongitude] = prevProps.center;
    const [lattiude, longitude] = this.props.center;

    if (prevLattiude !== lattiude && prevLongitude !== longitude) {
      this._leaflet.setView(this.props.center, this.props.zoom);
    }
  }

  render() {
    const {classPrefix} = this.props;

    return <section className={`${classPrefix}__map map`} ref={this._mapRef}></section>;
  }
}

Map.defaultProps = {
  classPrefix: ClassPrefix.CITY
};

Map.propTypes = {
  geoCoords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  activeGeoCoords: PropTypes.array.isRequired,
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  classPrefix: PropTypes.oneOf(Object.values(ClassPrefix))
};
