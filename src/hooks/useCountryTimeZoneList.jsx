
import { useMemo } from 'react'
import { getCountryTimeZoneList } from '../helpers/time'

export const useCountryTimeZoneList = (lang = 'es') => {
  return useMemo(() => getCountryTimeZoneList(lang), [lang])
}
