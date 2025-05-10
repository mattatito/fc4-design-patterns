export class RegularCache {
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
