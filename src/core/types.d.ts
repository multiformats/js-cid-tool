import type { CIDVersion } from 'cids'
import type { BaseNameOrCode } from 'multibase'

export interface FormatOptions {
  format?: string
  cidVersion?: CIDVersion
  base?: BaseNameOrCode
}