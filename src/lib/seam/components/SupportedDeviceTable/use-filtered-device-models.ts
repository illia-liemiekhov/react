import {
  useDeviceModels,
  type UseDeviceModelsParams,
} from 'lib/seam/components/SupportedDeviceTable/use-device-models.js'

import { useFilteredManufacturers } from './use-filtered-manufacturers.js'

export interface DeviceModelFilters {
  supportedOnly: boolean
  manufacturer: string | null
}

export const useFilteredDeviceModels = ({
  filterValue,
  filters,
  ...manufacturersParams
}: {
  filterValue: string
  filters: DeviceModelFilters
  manufacturers: string[] | null
  excludedManufacturers: string[]
}): ReturnType<typeof useDeviceModels> => {
  const { manufacturers } = useFilteredManufacturers(manufacturersParams)

  const params: UseDeviceModelsParams = {}

  if (filterValue.trim() !== '') {
    params.text_search = filterValue.trim()
  }

  if (filters.supportedOnly) {
    params.integration_status = 'stable'
  }

  if (filters.manufacturer !== null) {
    const manufacturer = manufacturers?.find(
      (manufacturer) => manufacturer.display_name === filters.manufacturer
    )

    if (manufacturer != null) {
      params.manufacturer_id = manufacturer.manufacturer_id
    }
  }

  if (filters.manufacturer == null && manufacturers != null) {
    params.manufacturer_ids = manufacturers.map((m) => m.manufacturer_id)
  }

  const { deviceModels, ...query } = useDeviceModels(params)

  return {
    ...query,
    deviceModels: deviceModels?.filter(
      (deviceModel) =>
        manufacturers?.some(
          (manufacturer) =>
            deviceModel.manufacturer.manufacturer_id ===
            manufacturer.manufacturer_id
        )
    ),
  }
}
