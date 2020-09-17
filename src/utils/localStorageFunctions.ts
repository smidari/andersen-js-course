import { ImprovesItem, MainItem } from '../data/data';

export function save(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function load(key: string) {
  const data: string | null = localStorage.getItem(key);
  return JSON.parse(<string>data);
}
