import classNames from 'classnames'
import { useState } from 'react'
import {
  isThermostatDevice,
  type ThermostatDevice,
} from 'seamapi'

import { FanIcon } from 'lib/icons/Fan.js'
import { OffIcon } from 'lib/icons/Off.js'
import { DeviceImage } from 'lib/ui/device/DeviceImage.js'
import { ClimateSettingStatus } from 'lib/ui/thermostat/ClimateSettingStatus.js'

interface ThermostatCardProps {
  device: ThermostatDevice
}

export function ThermostatCard({ device }: ThermostatCardProps): JSX.Element {
  return (
    <div className='seam-thermostat-card'>
      <Content device={device} />
    </div>
  )
}

function Content(props: { device: ThermostatDevice }): JSX.Element | null {
  const { device } = props

  const [temperatureUnit, setTemperatureUnit] = useState<
    'fahrenheit' | 'celsius'
  >('fahrenheit')

  const toggleTemperatureScale = (): void => {
    setTemperatureUnit(
      temperatureUnit === 'fahrenheit' ? 'celsius' : 'fahrenheit'
    )
  }

  if (!isThermostatDevice(device)) {
    return null
  }

  const {
    temperature_fahrenheit: temperatureFahrenheit,
    temperature_celsius: temperatureCelsius,
    current_climate_setting: currentClimateSetting,
    is_fan_running: isFanRunning,
    relative_humidity: relativeHumidity,
  } = device.properties 

  return (
    <div className='seam-thermostat-card-content'>
      <div className='seam-thermostat-card-image-wrap'>
        <DeviceImage device={device} />
      </div>
      <div className='seam-thermostat-card-details'>
        <div className='seam-thermostat-heading-wrap'>
          <h4 className='seam-thermostat-card-heading'>
            {device.properties.name}
          </h4>
          <button
            onClick={toggleTemperatureScale}
            className='seam-thermostat-temperature-toggle'
          >
            <span className='seam-thermostat-temperature-toggle-label'>
              {temperatureUnit === 'fahrenheit' ? t.fahrenheit : t.celsius}
            </span>
          </button>
        </div>

        <div className='seam-thermostat-properties'>
          <div className='seam-thermostat-property-block'>
            <p className='seam-thermostat-property-label'>{t.temperature}:</p>
          </div>
          <div className='seam-thermostat-property-block'>
            <p className='seam-thermostat-property-value'>
              {Math.trunc(
                Number(
                  temperatureUnit === 'fahrenheit'
                    ? temperatureFahrenheit
                    : temperatureCelsius
                )
              )}
              º
            </p>

            <p className='seam-thermostat-property-value'>|</p>
            <p className='seam-thermostat-property-label'>{t.humidity}:</p>
            <p className='seam-thermostat-property-value'>
              {Number(relativeHumidity) * 100}%
            </p>
          </div>

          <div className='seam-thermostat-property-block'>
            <p className='seam-thermostat-property-label'>{t.setting}:</p>
          </div>
          <div className='seam-thermostat-property-block'>
            <ClimateSettingStatus
              climateSetting={currentClimateSetting}
              temperatureUnit={temperatureUnit}
            />
          </div>

          <div className='seam-thermostat-property-block'>
            <p className='seam-thermostat-property-label'>{t.fanMode}:</p>
          </div>
          <div className='seam-thermostat-property-block seam-thermostat-property-icon-block'>
            <div className='seam-thermostat-property-icon'>
              {isFanRunning ? <FanIcon /> : <OffIcon />}
            </div>
            <p className='seam-thermostat-property-value'>
              {isFanRunning ? t.auto : t.off}
            </p>
          </div>

          <div className='seam-thermostat-property-block'>
            <p className='seam-thermostat-property-label'>{t.systemStatus}:</p>
          </div>
          <div className='seam-thermostat-property-block'>
            <div
              className={classNames(
                'seam-thermostat-property-tag',
                `seam-thermostat-property-tag-${'cooling'}`
              )}
            >
              <p className='seam-thermostat-property-tag-label'>{t.cooling}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const t = {
  fahrenheit: 'F˚',
  celsius: 'C˚',
  auto: 'Auto',
  off: 'Off',
  temperature: 'Temperature',
  humidity: 'Humidity',
  setting: 'Setting',
  fanMode: 'Fan mode',
  systemStatus: 'System status',
  cooling: 'Cooling',
  heating: 'Heating',
}
