import type VectorLayer from 'ol/layer/Vector'
import { Circle as CircleStyle, Fill, Stroke, Style, Text, Icon } from 'ol/style.js'
import { boundingExtent } from 'ol/extent.js'

const statusColor: any = {
  registered: '#8f8f8fc4',
  verified_by_admin: '#68bb6dc9',
  paid: '#3d4ff2',
  rejected: '#ff6666ba',
  approved_by_customer:"#aaaef0"
}

const statusBorder: any = {
  registered: '#595858',
  verified_by_admin: '#15850b',
  paid: '#3d4ff2',
  rejected: '#e62929',
  approved_by_customer:"#5f68e8"

}

export const ImageIconPoint = () => {
  const iconStyle = new Style({
    image: new Icon({
      src: '../assets/tree.png',
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels'
    })
  })
  return iconStyle
}

const clusterRadisuSize = (size: number) => {
  let radius
  if (size === 1) {
    radius = 9
  } else if (size >= 9 && size <= 99) {
    radius = 25
  } else if (size >= 25) {
    radius = 29
  } else {
    return 20
  }
  return radius
}

export const clusterPointStyle = (feature: any, showImgPoint = false) => {
  // function that gives color based on status for single point and different style for clusters
  // showImgPoint: if true returns Image icon else just single circle point 
  const topfeature = feature.get('features')
  const size = topfeature?.length ?? 1
  let style: any
  if (size > 1) {
    style = new Style({
      image: new CircleStyle({
        radius: clusterRadisuSize(size),
        fill: new Fill({
          color: '#2e4f70'
        }),
        stroke: new Stroke({
          color: 'lightblue ',
          width: 1
        })
      }),
      text: new Text({
        text: topfeature.length > 1 ? size.toString() : topfeature[0].get('well_no'),
        fill: new Fill({
          color: '#fff'
        }),
        font: (topfeature.length > 1 ? 25 : 6) + 'px Calibri,sans-serif'
      })
    })
  } else {
    if (showImgPoint) {
      return ImageIconPoint()
    }
    let col = statusColor[topfeature[0].get('tree_status')]
    let borderColor = statusBorder[topfeature[0].get('tree_status')]
    style = new Style({
      image: new CircleStyle({
        radius: size > 1 ? 13 : 10,
        fill: new Fill({
          color: col ? col : '#8E8E8E'
        }),
        stroke: new Stroke({
          color: borderColor ? borderColor : '#595858',
          width: 1
        })
      }),
      text: new Text({
        text: topfeature[0].get('well_no'),
        fill: new Fill({
          color: '#fff'
        }),
        font: 6 + 'px Calibri,sans-serif'
      })
    })
  }
  return style
}
