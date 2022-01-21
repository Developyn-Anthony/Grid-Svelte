import { writable } from 'svelte/store';

export const rows = writable([
    ["Anthony", "White", "20"],
    ["John", "Doe", "52"],
    ["Jane", "Doe", "53"],
  ]);