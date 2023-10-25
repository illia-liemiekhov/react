import type { DeviceModelV1 } from '@seamapi/types/devicedb'
import classNames from 'classnames'
import type { DeviceModel } from 'seamapi'

import { DotDivider } from 'lib/ui/layout/DotDivider.js'

interface SupportedDeviceRowProps {
  deviceModel: DeviceModelV1
}

export function SupportedDeviceRow({
  deviceModel,
}: SupportedDeviceRowProps): JSX.Element {
  return (
    <div className='seam-row'>
      <ImageColumn deviceModel={deviceModel} />
      <ModelColumn deviceModel={deviceModel} />
      <StatusColumn deviceModel={deviceModel} />
    </div>
  )
}

export function ImageColumn({
  deviceModel,
}: SupportedDeviceRowProps): JSX.Element {
  return (
    <div className='seam-col seam-device-image-col'>
      <div className='seam-image-box'>
        <img
          width={40}
          src={deviceModel.aesthetic_variants[0]?.images[0]?.url}
        />
      </div>
    </div>
  )
}

export function ModelColumn({
  deviceModel,
}: SupportedDeviceRowProps): JSX.Element {
  return (
    <div className='seam-col seam-model-col'>
      <div className='seam-model-name'>
        <div className='seam-truncated-text'>{deviceModel.display_name}</div>
      </div>
      <div className='seam-model-id'>
        <div className='seam-truncated-text'>
          {deviceModel.aesthetic_variants[0]?.manufacturer_sku}
          <DotDivider />
          {deviceModel.main_connection_type}
        </div>
      </div>
    </div>
  )
}

export function StatusColumn({
  deviceModel,
}: SupportedDeviceRowProps): JSX.Element {
  const statusColor =
    supportLevelColors[deviceModel.manufacturer.integration] ?? 'unknown'

  return (
    <div className='seam-col seam-status-col'>
      <div className={classNames('seam-status-pill', `status-${statusColor}`)}>
        <span>{status[deviceModel.manufacturer.integration]}</span>
      </div>
    </div>
  )
}

const supportLevelColors: Record<
  DeviceModelV1['manufacturer']['integration'],
  'green' | 'blue' | 'unknown'
> = {
  stable: 'green',
  beta: 'blue',
  planned: 'unknown',
  unsupported: 'unknown',
  inquire: 'unknown',
}

const status: Record<DeviceModelV1['manufacturer']['integration'], string> = {
  stable: 'LIVE',
  beta: 'BETA',
  unsupported: 'Inquire',
  planned: 'Inquire',
  inquire: 'Inquire',
}

export const connectionTypeNames: Record<
  DeviceModel['connection_type'],
  string
> = {
  wifi: 'Wifi',
  zwave: 'Z-Wave',
  zigbee: 'Zigbee',
  unknown: 'Unknown',
}
