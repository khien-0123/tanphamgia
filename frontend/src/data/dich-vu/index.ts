import type { ServicePageContent } from './types';
import { tuVanThietKe } from './tu-van-thiet-ke';
import { xuongMayOemOdm } from './xuong-may-oem-odm';
import { fabricCollection } from './fabric-collection';
import { inAn } from './in-an';
import { theuViTinh } from './theu-vi-tinh';

/** Danh sách 5 dịch vụ — thứ tự điều hướng (footer, redirect...) */
export const servicePages: ServicePageContent[] = [
  tuVanThietKe,
  xuongMayOemOdm,
  fabricCollection,
  inAn,
  theuViTinh,
];

export function getServiceBySlug(slug: string): ServicePageContent | undefined {
  return servicePages.find((item) => item.slug === slug);
}

export type { ServicePageContent, ServiceBlock } from './types';
export { tuVanThietKe, xuongMayOemOdm, fabricCollection, inAn, theuViTinh };
