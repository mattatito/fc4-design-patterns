export interface ICache {
  set(key: string, value: any): void;
  get(key: string): any;
  has(key: string): boolean;
  clear(): void;
}

export class CacheService implements ICache {
  private cache: Map<String, any>;

  constructor() {
    this.cache = new Map<String, any>();
  }

  set(key: string, value: any) {
    this.cache.set(key, value);
  }

  get(key: string): any {
    return this.cache.get(key);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  clear(): void {}
}
