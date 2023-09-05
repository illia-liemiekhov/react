import { isLockDevice, isThermostatDevice } from 'seamapi'

import { LockDeviceDetails } from 'lib/seam/components/DeviceDetails/LockDeviceDetails.js'
import { ThermostatDeviceDetails } from 'lib/seam/components/DeviceDetails/ThermostatDeviceDetails.js'
import { useDevice } from 'lib/seam/devices/use-device.js'

export interface DeviceDetailsProps {
  deviceId: string
  disableLockUnlock?: boolean
  onBack?: () => void
  className?: string
}

export function DeviceDetails({
  deviceId,
  disableLockUnlock = false,
  onBack,
  className,
}: DeviceDetailsProps): JSX.Element | null {
  const { device } = useDevice({
    device_id: deviceId,
  })

  if (device == null) {
    return null
  }

  if (isLockDevice(device)) {
    return (
      <LockDeviceDetails
        className={className}
        device={device}
        disableLockUnlock={disableLockUnlock}
        onBack={onBack}
      />
    )
  }

  if (isThermostatDevice(device)) {
    return <ThermostatDeviceDetails device={device} />
  }

  return null
}
