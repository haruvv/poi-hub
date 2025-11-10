import type { Service, ServiceCategory } from "@/types/service";
import { poiKatsuServices } from "./poi-katsu";
import { creditCardServices } from "./credit-card";
import { investmentServices } from "./investment";
import { pointExchangeServices } from "./point-exchange";

export const services: Service[] = [
  ...poiKatsuServices,
  ...creditCardServices,
  ...investmentServices,
  ...pointExchangeServices,
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
