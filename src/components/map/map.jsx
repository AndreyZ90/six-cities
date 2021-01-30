import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet, {layerGroup} from 'leaflet';

import {ClassPrefix, MapPin} from '@/helpers/const';

export default class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._leaflet = null;
    this._icon = null;
    this._titleLayer = null;
    this._markersLayers = null;
  }

  componentDidMount() {
    const {geoCoords, center, zoom} = this.props;

    this._icon = leaflet.icon({iconUrl: MapPin.src, size: MapPin.size});

    this._titleLayer = leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    });

    this._markersLayers = geoCoords.map((coords) => leaflet.marker(coords, {icon: this._icon}));

    this._leaflet = leaflet.map(this._mapRef.current, {
      center,
      zoom,
      zoomControl: false,
      layers: [this._titleLayer, layerGroup(this._markersLayers)]
    });
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
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  classPrefix: PropTypes.oneOf(Object.values(ClassPrefix))
};
