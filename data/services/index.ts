import type { Service, ServiceCategory } from "@/types/service";
import { poiKatsuServices } from "./poi-katsu";
import { creditCardServices } from "./credit-card";
import { investmentServices } from "./investment";
import { shoppingServices } from "./shopping";
import { gamingServices } from "./gaming";
import { mealServices } from "./meal";
import { oripaServices } from "./oripa";

export const services: Service[] = [
  ...poiKatsuServices,
  ...creditCardServices,
  ...investmentServices,
  ...shoppingServices,
  ...gamingServices,
  ...mealServices,
  ...oripaServices,
];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getAllServices(): Service[] {
  return services;
}
