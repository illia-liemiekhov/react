import type { ThermostatDevice } from 'lib/seam/thermostats/thermostat-device.js'
import type { TemperatureControlGroupProps } from 'lib/ui/thermostat/TemperatureControlGroup.js'

export type SetPointBounds = Partial<
  Pick<
    TemperatureControlGroupProps,
    'minCool' | 'maxCool' | 'minHeat' | 'maxHeat' | 'delta'
  >
>

export const getSetPointBounds = (device: ThermostatDevice): SetPointBounds => {
  const { properties } = device

  const setPointBounds: SetPointBounds = {}

  if (properties.is_cooling_available) {
    setPointBounds.minCool = properties.min_cooling_set_point_fahrenheit
    setPointBounds.maxCool = properties.max_cooling_set_point_fahrenheit
  }

  if (properties.is_heating_available) {
    setPointBounds.minHeat = properties.min_heating_set_point_fahrenheit
    setPointBounds.maxHeat = properties.max_heating_set_point_fahrenheit
  }

  if (properties.is_cooling_available && properties.is_heating_available) {
    setPointBounds.delta = properties.min_heating_cooling_delta_fahrenheit
  }

  return setPointBounds
}
